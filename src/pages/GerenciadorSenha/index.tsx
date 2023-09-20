import Constants from "expo-constants";
import { useState } from "react";
import { Alert, Button, TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import * as yup from "yup";
import { Formik } from 'formik';

const validationSchema = yup.object().shape({
  tamanhoSenha: yup
    .number()
    .min(8, "Minimo de 8 caracteres")
    .required('O campo é obrigatório'),
});

interface FormTypes {
  tamanhoSenha: number;
}

const valoresIniciais: FormTypes = {
  tamanhoSenha: 0,
};

export default function GeradorSenha() {
  const [senha, setSenha] = useState("");

  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";

  function gerenciadorSenha(tamanhoSenha: number) {
    let password = "";
    for (var i = 0; i < tamanhoSenha; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
  }
  
  function onSubmitForm(values: FormTypes) {
    const texto = gerenciadorSenha(values.tamanhoSenha);
    setSenha(texto);
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.titulo}>Gerador de Senha</Text>
      </View>
      <View style={styles.container}>
        <Formik
          initialValues={valoresIniciais}
          validationSchema={validationSchema}
          onSubmit={onSubmitForm}
          >
          {({ handleChange, handleBlur, handleSubmit, setFieldValue, resetForm, values, errors }) => (
            <View>
              <View style={styles.senhaContainer}>
                <Text>Resultado</Text>
                <Text style={styles.senha}>{senha}</Text>
              </View>
              <View style={{ marginBottom: 16 }}>
                <Text>Tamanho da senha</Text>
                <TextInput
                  onChangeText={handleChange('tamanhoSenha')}
                  onBlur={handleBlur('tamanhoSenha')}
                  value={(values.tamanhoSenha).toString()}
                  style={[styles.input]}
                  placeholder="Quantidade de caracteres"
                  keyboardType="numeric"
                />
                {errors.tamanhoSenha && <Text style={{ color: "red" }}>{errors.tamanhoSenha}</Text>}
              </View>
              <Button title="Gerar" color="blue" onPress={() => handleSubmit()} />
              <Button title="Limpar" color="red" onPress={() => {
                setSenha("");
                resetForm();
              }} />
            </View>
          )}
        </Formik>
      </View>
      <StatusBar style="dark" backgroundColor="cadetblue" />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "cadetblue",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: Constants.statusBarHeight,
  },
  titulo: {
    fontSize: 20,
  },
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column"
  },
  input: {
    // height: 40,
    // marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  senhaContainer: {
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
  },
  senha: {
    textAlign: "center",
  }
});