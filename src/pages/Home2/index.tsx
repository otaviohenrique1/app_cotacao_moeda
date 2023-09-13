import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { listaMoedas2 } from '../../utils/utils';
import { styles } from './styles';
import { Botao } from '../../components/botao';

export default function Home2() {
  const [moeda1Selecionada, setMoeda1Selecionada] = useState<string>("");
  const [moeda2Selecionada, setMoeda2Selecionada] = useState<string>("");
  const [moedaCodigo, setMoedaCodigo] = useState<string>("");
  const [erro, setErro] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>App cotação de moeda</Text>
      </View>
      <View style={styles.selectContainer}>
        <Picker
          selectedValue={moeda1Selecionada}
          onValueChange={(itemValue, itemIndex) => setMoeda1Selecionada(itemValue)}
          style={styles.select}
        >
          {listaMoedas2.map((item, index) => {
            return (
              <Picker.Item label={item.label} value={item.value} key={index} />
            );
          })}
        </Picker>
      </View>
      <View style={styles.selectContainer}>
        <Picker
          selectedValue={moeda2Selecionada}
          onValueChange={(itemValue, itemIndex) => setMoeda2Selecionada(itemValue)}
          style={styles.select}
        >
          {listaMoedas2.map((item, index) => {
            return (
              <Picker.Item label={item.label} value={item.value} key={index} />
            );
          })}
        </Picker>
      </View>
      <View style={{
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 16,
        marginBottom: 16,
        borderColor: "black",
        borderWidth: 1,
      }}>
        <Text>{moedaCodigo}</Text>
      </View>
      {(erro !== "") ? (
        <View style={{
          alignItems: 'center',
          marginHorizontal: 16,
          marginBottom: 16,
        }}>
          <Text>{erro}</Text>
        </View>
      ) : null}
      <View style={styles.botoesContainer}>
        <Botao
          buttonColor="blue"
          fontColor="white"
          widthBotao="48%"
          onPress={() => {
            if (moedaCodigo === "") {
              // Alert.alert("Erro", "Campo vazio");
              setErro("Campo vazio");
              return;
            } else {
              setMoedaCodigo(`${moeda1Selecionada} - ${moeda2Selecionada}`);
              setErro("");
            }
          }}
        >Calcular</Botao>
        <Botao
          buttonColor="red"
          fontColor="white"
          widthBotao="48%"
          onPress={() => {
            setMoedaCodigo("");
            setErro("");
          }}
        >Limpar</Botao>
      </View>
      <StatusBar style="dark" backgroundColor="cadetblue" />
    </View>
  );
}
