import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface DataTypes {
  moedas: string;
  moeda1Codigo: string;
  moeda2Codigo: string;
  alta: number;
  baixa: number;
  timestamp: string;
  dataCriacao: string;
}

const dadosIniciais: DataTypes = {
  moedas: '',
  moeda1Codigo: '',
  moeda2Codigo: '',
  alta: 0,
  baixa: 0,
  timestamp: '',
  dataCriacao: ''
};

export default function App() {
  const [data, setData] = useState<DataTypes>(dadosIniciais);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(listaMoedas[0].value);

  useEffect(() => {
    // axios.get("https://economia.awesomeapi.com.br/last/USD-BRL")
    axios.get(`https://economia.awesomeapi.com.br/last/${selectedLanguage}`)
      .then((item) => {
        const itemLista = selectedLanguage.replace("-", "");
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
        Alert.alert(`Erro: ${erro}`);
      });
  }, [selectedLanguage])


  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }
        style={styles.select}
      >
        {listaMoedas.map((item, index) => {
          return (
            <Picker.Item
              label={item.label}
              value={item.value}
              key={index}
            />
          );
        })}
        {/* <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" /> */}
      </Picker>
      <Text>Moedas: {data.moedas}</Text>
      <Text>Moedas codigos: {data.moeda1Codigo} - {data.moeda2Codigo}</Text>
      <Text>Alta: {data.alta}</Text>
      <Text>Baixa: {data.baixa}</Text>
      <Text>Data: {data.dataCriacao}</Text>
      <Text>Timestamp: {data.timestamp}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  select: {
    // width: "100%",
    width: 300,
    height: 50,
  }
});

interface ListaMoedasTypes {
  label: string;
  value: string;
}

const listaMoedas: ListaMoedasTypes[] = [
  { label: "Dólar Americano/Real Brasileiro", value: "USD-BRL" },
  { label: "Dólar Americano/Real Brasileiro Turismo", value: "USD-BRLT" },
  { label: "Dólar Canadense/Real Brasileiro", value: "CAD-BRL" },
  { label: "Euro/Real Brasileiro", value: "EUR-BRL" },
  { label: "Libra Esterlina/Real Brasileiro", value: "GBP-BRL" },
  { label: "Peso Argentino/Real Brasileiro", value: "ARS-BRL" },
  { label: "Bitcoin/Real Brasileiro", value: "BTC-BRL" },
  { label: "Litecoin/Real Brasileiro", value: "LTC-BRL" },
  { label: "Iene Japonês/Real Brasileiro", value: "JPY-BRL" },
  { label: "Franco Suíço/Real Brasileiro", value: "CHF-BRL" },
  { label: "Dólar Australiano/Real Brasileiro", value: "AUD-BRL" },
  { label: "Yuan Chinês/Real Brasileiro", value: "CNY-BRL" },
  { label: "Novo Shekel Israelense/Real Brasileiro", value: "ILS-BRL" },
  { label: "Ethereum/Real Brasileiro", value: "ETH-BRL" },
  { label: "XRP/Real Brasileiro", value: "XRP-BRL" },
  { label: "Dogecoin/Real Brasileiro", value: "DOGE-BRL" },
  { label: "Dólar de Cingapura/Real Brasileiro", value: "SGD-BRL" },
  { label: "Dirham dos Emirados/Real Brasileiro", value: "AED-BRL" },
  { label: "Coroa Dinamarquesa/Real Brasileiro", value: "DKK-BRL" },
  { label: "Dólar de Hong Kong/Real Brasileiro", value: "HKD-BRL" },
  { label: "Peso Mexicano/Real Brasileiro", value: "MXN-BRL" },
  { label: "Coroa Norueguesa/Real Brasileiro", value: "NOK-BRL" },
  { label: "Dólar Neozelandês/Real Brasileiro", value: "NZD-BRL" },
  { label: "Zlóti Polonês/Real Brasileiro", value: "PLN-BRL" },
  { label: "Riyal Saudita/Real Brasileiro", value: "SAR-BRL" },
  { label: "Coroa Sueca/Real Brasileiro", value: "SEK-BRL" },
  { label: "Baht Tailandês/Real Brasileiro", value: "THB-BRL" },
  { label: "Nova Lira Turca/Real Brasileiro", value: "TRY-BRL" },
  { label: "Dólar Taiuanês/Real Brasileiro", value: "TWD-BRL" },
  { label: "Bolívar Venezuelano/Real Brasileiro", value: "VEF-BRL" },
  { label: "Rand Sul-Africano/Real Brasileiro", value: "ZAR-BRL" },
  { label: "Peso Chileno/Real Brasileiro", value: "CLP-BRL" },
  { label: "Guarani Paraguaio/Real Brasileiro", value: "PYG-BRL" },
  { label: "Peso Uruguaio/Real Brasileiro", value: "UYU-BRL" },
  { label: "Peso Colombiano/Real Brasileiro", value: "COP-BRL" },
  { label: "Sol do Peru/Real Brasileiro", value: "PEN-BRL" },
  { label: "Boliviano/Real Brasileiro", value: "BOB-BRL" },
  { label: "Rublo Russo/Real Brasileiro", value: "RUB-BRL" },
  { label: "Rúpia Indiana/Real Brasileiro", value: "INR-BRL" },
];
