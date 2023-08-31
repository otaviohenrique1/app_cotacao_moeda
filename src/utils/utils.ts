import { DataTypes, ListaMoedasTypes } from "../types/types";

export function formataMonetario(valor: number) {
  return valor.toFixed(2).replace(".", ",");
}

export const listaMoedas: ListaMoedasTypes[] = [
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

export const dadosIniciais: DataTypes = {
  moedas: '',
  moeda1Codigo: '',
  moeda2Codigo: '',
  alta: 0,
  baixa: 0,
  timestamp: '',
  dataCriacao: ''
};
