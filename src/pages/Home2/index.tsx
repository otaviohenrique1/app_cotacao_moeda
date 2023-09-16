import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, TextInput, View, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { dadosIniciaisMoeda, listaMoedas3 } from '../../utils/utils';
import { styles } from './styles';
import { Botao } from '../../components/botao';
import { Formik } from 'formik';
import * as yup from "yup";
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { MoedaDataTypes } from '../../types/types';

const validationSchema = yup.object().shape({
  valor: yup.string().required('O campo é obrigatório'),
  moedaCodigo1: yup.string().required('O campo é obrigatório'),
  moedaCodigo2: yup.string().required('O campo é obrigatório'),
});

interface FormTypes {
  valor: string;
  moedaCodigo1: string;
  moedaCodigo2: string;
}

const valoresIniciais: FormTypes = {
  valor: '',
  moedaCodigo1: '',
  moedaCodigo2: ''
};

export default function Home2() {
  const [moeda1Selecionada, setMoeda1Selecionada] = useState<string>("");
  const [moeda2Selecionada, setMoeda2Selecionada] = useState<string>("");
  const [moedaCodigo, setMoedaCodigo] = useState<string>("");
  const [valorMoeda, setValorMoeda] = useState<string>('');
  const [erroCampoMoeda1, setErroCampoMoeda1] = useState<string>("");
  const [erroCampoMoeda2, setErroCampoMoeda2] = useState<string>("");
  const [erroCampoValor, setErroCampoValor] = useState<string>("");
  const [dados, setDados] = useState<MoedaDataTypes>(dadosIniciaisMoeda);

  useEffect(() => {
    // axios.get(`https://economia.awesomeapi.com.br/last/${moedaSelecionada}`)
    //   .then((item) => {
    //     const itemLista = moedaSelecionada.replace("-", "");
    //     // console.log(item.data[itemTeste]);
    //     const dados = item.data[itemLista];
    //     // console.log(dados);

    //     setData({
    //       moedas: dados.name,
    //       moeda1Codigo: dados.code,
    //       moeda2Codigo: dados.codein,
    //       alta: parseFloat(dados.high),
    //       baixa: parseFloat(dados.low),
    //       timestamp: dados.timestamp,
    //       dataCriacao: dados.create_date,
    //     });
    //   })
    //   .catch((erro) => {
    //     console.error(erro);
    //     Alert.alert(`Erro`, `${erro}`);
    //   });
    // axios.get(`https://economia.awesomeapi.com.br/last/${moedaCodigo}`)
    //   .then((item) => {
    //     let data = item.data[`${moeda1Selecionada}${moeda2Selecionada}`];
    //     setDados({
    //       ask: parseFloat(data.ask),
    //       bid: parseFloat(data.bid),
    //       code: data.code,
    //       codein: data.codein,
    //       create_date: data.create_date,
    //       high: parseFloat(data.high),
    //       low: parseFloat(data.low),
    //       name: data.name,
    //       pctChange: parseFloat(data.pctChange),
    //       timestamp: data.timestamp,
    //       varBid: parseFloat(data.varBid)
    //     });
    //   })
    //   .catch((erro) => {
    //     console.error(erro);
    //     Alert.alert(`Erro`, `${erro}`);
    //   });
  },[]);

  function onSubmitForm(values: FormTypes) {
    // console.log(values.valor);
    // https://economia.awesomeapi.com.br/last/USD-BRL
    // setMoedaCodigo(`https://economia.awesomeapi.com.br/last/${values.moedaCodigo1}-${values.moedaCodigo2}`);
    // setMoedaCodigo(values.valor);
    setMoeda1Selecionada(values.moedaCodigo1);
    setMoeda2Selecionada(values.moedaCodigo2);
    setValorMoeda(values.valor);
    setMoedaCodigo(`${values.moedaCodigo1}-${values.moedaCodigo2}`);
    axios.get(`https://economia.awesomeapi.com.br/last/${moedaCodigo}`)
      .then((item) => {
        let data = item.data[`${moeda1Selecionada}${moeda2Selecionada}`];
        setDados({
          ask: parseFloat(data.ask),
          bid: parseFloat(data.bid),
          code: data.code,
          codein: data.codein,
          create_date: data.create_date,
          high: parseFloat(data.high),
          low: parseFloat(data.low),
          name: data.name,
          pctChange: parseFloat(data.pctChange),
          timestamp: data.timestamp,
          varBid: parseFloat(data.varBid)
        });
      })
      .catch((erro) => {
        console.error(erro);
        Alert.alert(`Erro`, `${erro}`);
      });
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.titulo}>App cotação de moeda</Text>
      </View>
      <View style={styles.container}>
        <View style={{ marginBottom: 16 }}>
          <Formik
            initialValues={valoresIniciais}
            validationSchema={validationSchema}
            onSubmit={onSubmitForm}
          >
            {({ handleChange, handleBlur, handleSubmit, setFieldValue, resetForm, values, errors }) => (
              <View>
                <View style={{ marginBottom: 16 }}>
                  <Text>Valor monetário</Text>
                  <TextInput
                    onChangeText={handleChange('valor')}
                    onBlur={handleBlur('valor')}
                    value={values.valor}
                    style={[styles.input]}
                    placeholder="Valor da moeda"
                    keyboardType="numeric"
                  />
                  {errors.valor && <Text style={{ color: "red" }}>{errors.valor}</Text>}
                </View>
                <View style={{ marginBottom: 16 }}>
                  <Text>Moeda 1</Text>
                  <View style={styles.selectContainer}>
                    <Picker
                      selectedValue={values.moedaCodigo1}
                      onValueChange={(itemValue, itemIndex) => setFieldValue("moedaCodigo1", itemValue)}
                      style={styles.select}
                    >
                      {listaMoedas3.map((item, index) => {
                        return (
                          <Picker.Item label={item.label} value={item.value} key={index} />
                        );
                      })}
                    </Picker>
                  </View>
                  {errors.moedaCodigo1 && <Text style={{ color: "red" }}>{errors.moedaCodigo1}</Text>}
                </View>
                <View style={{ marginBottom: 16 }}>
                  <Text>Moeda 2</Text>
                  <View style={styles.selectContainer}>
                    <Picker
                      selectedValue={values.moedaCodigo2}
                      onValueChange={(itemValue, itemIndex) => setFieldValue("moedaCodigo2", itemValue)}
                      style={styles.select}
                    >
                      {listaMoedas3.map((item, index) => {
                        return (
                          <Picker.Item label={item.label} value={item.value} key={index} />
                        );
                      })}
                    </Picker>
                  </View>
                  {errors.moedaCodigo2 && <Text style={{ color: "red" }}>{errors.moedaCodigo2}</Text>}
                </View>
                <View style={[styles.moedaContainer, { flexDirection: "row", justifyContent: "space-around" }]}>
                  <Text>{(values.moedaCodigo1 === "") ? "Moeda 1" : values.moedaCodigo1}</Text>
                  {/* <AntDesign name="forward" size={20} />
                  <Text>Para</Text> */}
                  <AntDesign name="forward" size={20} />
                  <Text>{(values.moedaCodigo2 === "") ? "Moeda 2" : values.moedaCodigo2}</Text>
                </View>
                <View style={styles.botoesContainer}>
                  <Botao
                    buttonColor="blue"
                    fontColor="white"
                    widthBotao="48%"
                    onPress={() => handleSubmit()}
                  >Calcular</Botao>
                  <Botao
                    buttonColor="red"
                    fontColor="white"
                    widthBotao="48%"
                    onPress={() => resetForm()}
                  >Limpar</Botao>
                </View>
              </View>
            )}
          </Formik>
        </View>
        <View style={styles.moedaContainer}>
          <Text>Resultado</Text>
          <Text>{(moedaCodigo === "") ? "Moeda1-Moeda2" : moedaCodigo}</Text>
          <Text>{(valorMoeda === "") ? "0,0" : valorMoeda}</Text>
          <Text>{dados.bid}</Text>
        </View>
        <StatusBar style="dark" backgroundColor="cadetblue" />
      </View>
    </>
  );
}
