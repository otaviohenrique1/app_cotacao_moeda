import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Text, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Botao } from '../../components/botao';
import { DataTypes } from '../../types/types';
import { dadosIniciais, listaMoedas, formataMonetario } from '../../utils/utils';
import { styles } from './styles';

export default function Home() {
  const [data, setData] = useState<DataTypes>(dadosIniciais);
  const [moedaSelecionada, setMoedaSelecionada] = useState<string>(listaMoedas[0].value);
  const [valorMoeda, setValorMoeda] = useState<string>('');
  const [resultado, setResultado] = useState<number>(0);

  useEffect(() => {
    // axios.get("https://economia.awesomeapi.com.br/last/USD-BRL")
    axios.get(`https://economia.awesomeapi.com.br/last/${moedaSelecionada}`)
      .then((item) => {
        const itemLista = moedaSelecionada.replace("-", "");
        // console.log(item.data[itemTeste]);
        const dados = item.data[itemLista];
        // console.log(dados);

        setData({
          moedas: dados.name,
          moeda1Codigo: dados.code,
          moeda2Codigo: dados.codein,
          alta: parseFloat(dados.high),
          baixa: parseFloat(dados.low),
          timestamp: dados.timestamp,
          dataCriacao: dados.create_date,
          compra: parseFloat(dados.ask),
          venda: parseFloat(dados.bid),
        });
      })
      .catch((erro) => {
        console.error(erro);
        Alert.alert(`Erro`, `${erro}`);
      });
  }, [moedaSelecionada])

  function calculaCotacaoMoeda() {
    if (valorMoeda === "") {
      Alert.alert("Erro", "Campo vazio", [{ text: "Fechar" }]);
    } else {
      setResultado(data.alta * parseFloat(valorMoeda))
    }
  }

  function limpar() {
    setResultado(0);
    setValorMoeda("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>App cotação de moeda</Text>
      </View>
      <View style={styles.selectContainer}>
        <Picker
          selectedValue={moedaSelecionada}
          onValueChange={(itemValue, itemIndex) => setMoedaSelecionada(itemValue)}
          style={styles.select}
        >
          {listaMoedas.map((item, index) => {
            return (
              <Picker.Item label={item.label} value={item.value} key={index} />
            );
          })}
        </Picker>
      </View>
      <View style={styles.moedaContainer}>
        <Text style={styles.subtitulo}>Informações</Text>
        <Text>Moedas: {data.moedas}</Text>
        <Text>Moedas codigos: {data.moeda1Codigo} - {data.moeda2Codigo}</Text>
        <Text>Alta: {formataMonetario(data.alta)}</Text>
        <Text>Baixa: {formataMonetario(data.baixa)}</Text>
        <Text>Data: {data.dataCriacao}</Text>
        <Text>Compra: {formataMonetario(data.compra)}</Text>
        <Text>Venda: {formataMonetario(data.venda)}</Text>
        {/* <Text>Timestamp: {data.timestamp}</Text> */}
      </View>
      <View style={styles.resultadoContainer}>
        <Text style={styles.subtitulo}>Resultado</Text>
        <Text style={styles.resultado}>
          {`${data.moeda1Codigo} => ${(valorMoeda === "") ? formataMonetario(0) : formataMonetario(parseFloat(valorMoeda))}`}
        </Text>
        <Text style={styles.resultado}>
          {`${data.moeda2Codigo} => ${formataMonetario(resultado)}`}
        </Text>
      </View>
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          onChangeText={setValorMoeda}
          value={valorMoeda}
          placeholder="Valor da moeda"
          keyboardType="numeric"
        />
        <View style={styles.botoesContainer}>
          <Botao
            buttonColor="blue"
            fontColor="white"
            widthBotao="48%"
            onPress={() => calculaCotacaoMoeda()}
          >Calcular</Botao>
          <Botao
            buttonColor="red"
            fontColor="white"
            widthBotao="48%"
            onPress={() => limpar()}
          >Limpar</Botao>
        </View>
      </View>
      <StatusBar style="dark" backgroundColor="cadetblue" />
    </View>
  );
}
