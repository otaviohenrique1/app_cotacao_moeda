import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Constants from 'expo-constants';
import { dadosIniciais, formataMonetario, listaMoedas } from './src/utils/utils';
import { DataTypes } from './src/types/types';

export default function App() {
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
        setData({
          moedas: dados.name,
          moeda1Codigo: dados.code,
          moeda2Codigo: dados.codein,
          alta: parseFloat(dados.high),
          baixa: parseFloat(dados.low),
          timestamp: dados.timestamp,
          dataCriacao: dados.create_date,
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
          <TouchableOpacity
            style={[styles.botao, styles.botaoCalcular]}
            onPress={() => calculaCotacaoMoeda()}
          >
            <Text style={styles.botaoTitulo}>Calcular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.botao, styles.botaoLimpar]}
            onPress={() => limpar()}
          >
            <Text style={styles.botaoTitulo}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="dark" backgroundColor="cadetblue" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "cadetblue",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  titulo: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Constants.statusBarHeight,
    // marginBottom: 16,
    // marginHorizontal: 12,
  },
  moedaContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    padding: 16,
    margin: 16,
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 16,
    borderBottomWidth: 1,
    width: "100%",
    textAlign: "center",
  },
  selectContainer: {
    borderWidth: 1,
    margin: 16,
  },
  select: {
    width: "100%",
    // width: 300,
    height: 50,
  },
  resultadoContainer: {
    borderWidth: 1,
    marginHorizontal: 16,
    padding: 16,
  },
  resultado: {
    textAlign: "center",
    fontSize: 16,
  },
  formulario: {
    paddingHorizontal: 16,
  },
  input: {
    // height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal: 16,
  },
  botao: {
    padding: 10,
    width: "48%",
    alignItems: "center",
  },
  botaoTitulo: {
    fontSize: 18,
    color: "white",
  },
  botaoCalcular: {
    backgroundColor: "blue",
  },
  botaoLimpar: {
    backgroundColor: "red",
  },
});
