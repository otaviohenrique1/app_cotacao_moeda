import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, View, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { listaMoedas2 } from '../../utils/utils';
import { styles } from './styles';
import { Botao } from '../../components/botao';
import { Formik } from 'formik';
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  valor: yup.string().required('O campo é obrigatório'),
  moedaCodigo: yup.string().required('O campo é obrigatório'),
});

export default function Home4() {
  const [moeda1Selecionada, setMoeda1Selecionada] = useState<string>("");
  const [moeda2Selecionada, setMoeda2Selecionada] = useState<string>("");
  const [moedaCodigo, setMoedaCodigo] = useState<string>("");
  const [erroCampoMoeda1, setErroCampoMoeda1] = useState<string>("");
  const [erroCampoMoeda2, setErroCampoMoeda2] = useState<string>("");
  const [erroCampoValor, setErroCampoValor] = useState<string>("");
  const [valorMoeda, setValorMoeda] = useState<string>('');

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.titulo}>App cotação de moeda</Text>
      </View>
      <View style={styles.container}>
        <View style={{ marginBottom: 16 }}>
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
          {(erroCampoMoeda1 !== "") ? <Text>{erroCampoMoeda1}</Text> : null}
        </View>
        <View style={{ marginBottom: 16 }}>
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
          {(erroCampoMoeda2 !== "") ? <Text>{erroCampoMoeda2}</Text> : null}
        </View>
        <View style={styles.moedaContainer}>
          <Text>{moedaCodigo}</Text>
        </View>
        {(erroCampoMoeda1 !== "") ? (
          <View style={{
            alignItems: 'center',
            marginHorizontal: 16,
            marginBottom: 16,
          }}>
            <Text>{erroCampoMoeda1}</Text>
          </View>
        ) : null}
        <View style={{ marginBottom: 16 }}>
          <TextInput
            style={styles.input}
            onChangeText={setValorMoeda}
            value={valorMoeda}
            placeholder="Valor da moeda"
            keyboardType="numeric"
          />
          {(erroCampoValor !== "") ? <Text>{erroCampoValor}</Text> : null}
        </View>
        <View style={styles.botoesContainer}>
          <Botao
            buttonColor="blue"
            fontColor="white"
            widthBotao="48%"
            onPress={() => {
              if (moeda1Selecionada === "") {
                setErroCampoMoeda1("Campo vazio");
              } else if (moeda2Selecionada === "") {
                setErroCampoMoeda2("Campo vazio");
              } else if (valorMoeda === "") {
                setErroCampoValor("Campo vazio");
              } else {
                setMoedaCodigo(`${moeda1Selecionada}-${moeda2Selecionada}`);
                setErroCampoValor("");
                setErroCampoMoeda1("");
                setErroCampoMoeda2("");
              }
            }}
          >Calcular</Botao>
          <Botao
            buttonColor="red"
            fontColor="white"
            widthBotao="48%"
            onPress={() => {
              setMoeda1Selecionada("");
              setMoeda2Selecionada("");
              setMoedaCodigo("");
              setValorMoeda("");
              setErroCampoValor("");
              setErroCampoMoeda1("");
              setErroCampoMoeda2("");
            }}
          >Limpar</Botao>
        </View>
        <StatusBar style="dark" backgroundColor="cadetblue" />
      </View>
    </>
  );
}
