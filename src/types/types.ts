export interface ListaMoedasTypes {
  label: string;
  value: string;
}

export interface DataTypes {
  moedas: string;
  moeda1Codigo: string;
  moeda2Codigo: string;
  alta: number;
  baixa: number;
  timestamp: string;
  dataCriacao: string;
}

export interface MoedaDataTypes {
  ask: number; // Venda
  bid: number; // Compra
  code: string; // Moeda 1
  codein: string; // Moeda 2
  create_date: string; // Data
  high: number; // Máximo
  low: number; // Mínimo
  name: string; // Moedas
  pctChange: number; // Porcentagem de Variação
  timestamp: string; // Data em timestamp
  varBid: number; // Variação
}

// const a = {
//   "ask": "4.9188", // Venda
//   "bid": "4.9163", // Compra
//   "code": "USD",
//   "codein": "BRL",
//   "create_date": "2023-09-13 11:03:56",
//   "high": "4.9678", // Máximo
//   "low": "4.917", // Mínimo
//   "name": "Dólar Americano/Real Brasileiro",
//   "pctChange": "-0.6", // Porcentagem de Variação
//   "timestamp": "1694613836",
//   "varBid": "-0.0294", // Variação
// };
