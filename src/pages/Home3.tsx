import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
});

export default function Home3() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Enviar dados do formulário (values) para o servidor ou realizar outras ações
          Alert.alert(values.name);
          console.log(values);
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <View>
            <TextInput
              placeholder="Nome"
              onChangeText={handleChange('name')}
              value={values.name}
            />
            {errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}

            <TextInput
              placeholder="E-mail"
              onChangeText={handleChange('email')}
              value={values.email}
            />
            {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

            <Button title="Enviar" onPress={() => handleSubmit()} />
          </View>
        )}
      </Formik>
    </View>
  );
}
