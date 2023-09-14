import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { listaMoedas2 } from '../../utils/utils';
import { styles } from './styles';
import { Botao } from '../../components/botao';
import { Formik } from 'formik';
import * as yup from "yup";

const validationSchema = yup.object().shape({
  valor: yup.string().required('O campo é obrigatório'),
  moedaCodigo1: yup.string().required('O campo é obrigatório'),
  moedaCodigo2: yup.string().required('O campo é obrigatório'),
});

export default function Home2() {
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
          <Formik
            initialValues={{ valor: "", moedaCodigo1: "", moedaCodigo2: "" }}
            validationSchema={validationSchema}
            onSubmit={values => console.log(values.valor)}
          >
            {({ handleChange, handleBlur, handleSubmit, setFieldValue, resetForm, values, errors }) => (
              <View>
                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    onChangeText={handleChange('valor')}
                    onBlur={handleBlur('valor')}
                    value={values.valor}
                    style={[styles.input]}
                    placeholder="Valor"
                    keyboardType="numeric"
                  />
                  {errors.valor && <Text style={{ color: "red" }}>{errors.valor}</Text>}
                </View>
                <View style={{ marginBottom: 16 }}>
                  <View style={styles.selectContainer}>
                    <Picker
                      selectedValue={values.moedaCodigo1}
                      onValueChange={(itemValue, itemIndex) => setFieldValue("moedaCodigo1", itemValue)}
                      style={styles.select}
                    >
                      {listaMoedas2.map((item, index) => {
                        return (
                          <Picker.Item label={item.label} value={item.value} key={index} />
                        );
                      })}
                    </Picker>
                  </View>
                  {errors.moedaCodigo1 && <Text style={{ color: "red" }}>{errors.moedaCodigo1}</Text>}
                </View>
                <View style={{ marginBottom: 16 }}>
                  <View style={styles.selectContainer}>
                    <Picker
                      selectedValue={values.moedaCodigo2}
                      onValueChange={(itemValue, itemIndex) => setFieldValue("moedaCodigo2", itemValue)}
                      style={styles.select}
                    >
                      {listaMoedas2.map((item, index) => {
                        return (
                          <Picker.Item label={item.label} value={item.value} key={index} />
                        );
                      })}
                    </Picker>
                  </View>
                  {errors.moedaCodigo2 && <Text style={{ color: "red" }}>{errors.moedaCodigo2}</Text>}
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
          <Text>{moedaCodigo}</Text>
        </View>
        <StatusBar style="dark" backgroundColor="cadetblue" />
      </View>
    </>
  );
}
