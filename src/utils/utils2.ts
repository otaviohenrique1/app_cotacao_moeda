const listaMoedas2 = [
  { label: "Dólar Americano", value: "USD" },
  { label: "Dólar Americano Turismo", value: "USDT" },
  { label: "Real Brasileiro", value: "BRL" },
  { label: "Real Brasileiro Turismo", value: "BRLT" },
  { label: "Afghani do Afeganistão", value: "AFN" },
  { label: "Dirham dos Emirados", value: "AED" },
  { label: "Lek Albanês", value: "ALL" },
  { label: "Dram Armênio", value: "AMD" },
  { label: "Guilder das Antilhas", value: "ANG" },
  { label: "Kwanza Angolano", value: "AOA" },
  { label: "Peso Argentino", value: "ARS" },
  { label: "Dólar Australiano", value: "AUD" },
  { label: "Manat Azeri", value: "AZN" },
  { label: "Marco Conversível", value: "BAM" },
  { label: "Dólar de Barbados", value: "BBD" },
  { label: "Taka de Bangladesh", value: "BDT" },
  { label: "Lev Búlgaro", value: "BGN" },
  { label: "Dinar do Bahrein", value: "BHD" },
  { label: "Franco Burundinense", value: "BIF" },
  { label: "Dólar de Brunei", value: "BND" },
  { label: "Boliviano", value: "BOB" },
  { label: "Dólar das Bahamas", value: "BSD" },
  { label: "Bitcoin", value: "BTC" },
  { label: "Pula de Botswana", value: "BWP" },
  { label: "Rublo Bielorrusso", value: "BYN" },
  { label: "Dólar de Belize", value: "BZD" },
  { label: "Dólar Canadense", value: "CAD" },
  { label: "Franco Suíço", value: "CHF" },
  { label: "Franco Suíço", value: "CHFRTS" },
  { label: "Peso Chileno", value: "CLP" },
  { label: "Yuan chinês offshore", value: "CNH" },
  { label: "Yuan Chinês", value: "CNY" },
  { label: "Peso Colombiano", value: "COP" },
  { label: "Colón Costarriquenho", value: "CRC" },
  { label: "Peso Cubano", value: "CUP" },
  { label: "Escudo cabo-verdiano", value: "CVE" },
  { label: "Coroa Checa", value: "CZK" },
  { label: "Franco do Djubouti", value: "DJF" },
  { label: "Coroa Dinamarquesa", value: "DKK" },
  { label: "Dogecoin", value: "DOGE" },
  { label: "Peso Dominicano", value: "DOP" },
  { label: "Dinar Argelino", value: "DZD" },
  { label: "Libra Egípcia", value: "EGP" },
  { label: "Birr Etíope", value: "ETB" },
  { label: "Ethereum", value: "ETH" },
  { label: "Euro", value: "EUR" },
  { label: "Dólar de Fiji", value: "FJD" },
  { label: "Libra Esterlina", value: "GBP" },
  { label: "Lari Georgiano", value: "GEL" },
  { label: "Cedi Ganês", value: "GHS" },
  { label: "Dalasi da Gâmbia", value: "GMD" },
  { label: "Franco de Guiné", value: "GNF" },
  { label: "Quetzal Guatemalteco", value: "GTQ" },
  { label: "Dólar de Hong Kong", value: "HKD" },
  { label: "Lempira Hondurenha", value: "HNL" },
  { label: "Kuna Croata", value: "HRK" },
  { label: "Gourde Haitiano", value: "HTG" },
  { label: "Florim Húngaro", value: "HUF" },
  { label: "Rupia Indonésia", value: "IDR" },
  { label: "Novo Shekel Israelense", value: "ILS" },
  { label: "Rúpia Indiana", value: "INR" },
  { label: "Dinar Iraquiano", value: "IQD" },
  { label: "Rial Iraniano", value: "IRR" },
  { label: "Coroa Islandesa", value: "ISK" },
  { label: "Dólar Jamaicano", value: "JMD" },
  { label: "Dinar Jordaniano", value: "JOD" },
  { label: "Iene Japonês", value: "JPY" },
  { label: "Iene Japonês", value: "JPYRTS" },
  { label: "Shilling Queniano", value: "KES" },
  { label: "Som Quirguistanês", value: "KGS" },
  { label: "Riel Cambojano", value: "KHR" },
  { label: "Franco Comorense", value: "KMF" },
  { label: "Won Sul-Coreano", value: "KRW" },
  { label: "Dinar Kuwaitiano", value: "KWD" },
  { label: "Dólar das Ilhas Cayman", value: "KYD" },
  { label: "Tengue Cazaquistanês", value: "KZT" },
  { label: "Kip Laosiano", value: "LAK" },
  { label: "Libra Libanesa", value: "LBP" },
  { label: "Rúpia de Sri Lanka", value: "LKR" },
  { label: "Loti do Lesoto", value: "LSL" },
  { label: "Litecoin", value: "LTC" },
  { label: "Dinar Líbio", value: "LYD" },
  { label: "Dirham Marroquino", value: "MAD" },
  { label: "Leu Moldavo", value: "MDL" },
  { label: "Ariary Madagascarense", value: "MGA" },
  { label: "Denar Macedônio", value: "MKD" },
  { label: "Kyat de Mianmar", value: "MMK" },
  { label: "Mongolian Tugrik", value: "MNT" },
  { label: "Pataca de Macau", value: "MOP" },
  { label: "Ouguiya Mauritana", value: "MRO" },
  { label: "Rúpia Mauriciana", value: "MUR" },
  { label: "Rufiyaa Maldiva", value: "MVR" },
  { label: "Kwacha Malauiana", value: "MWK" },
  { label: "Peso Mexicano", value: "MXN" },
  { label: "Ringgit Malaio", value: "MYR" },
  { label: "Metical de Moçambique", value: "MZN" },
  { label: "Dólar Namíbio", value: "NAD" },
  { label: "Naira Nigeriana", value: "NGN" },
  { label: "Naira Nigeriana", value: "NGNI" },
  { label: "Naira Nigeriana", value: "NGNPARALLEL" },
  { label: "Córdoba Nicaraguense", value: "NIO" },
  { label: "Coroa Norueguesa", value: "NOK" },
  { label: "Rúpia Nepalesa", value: "NPR" },
  { label: "Dólar Neozelandês", value: "NZD" },
  { label: "Rial Omanense", value: "OMR" },
  { label: "Balboa Panamenho", value: "PAB" },
  { label: "Sol do Peru", value: "PEN" },
  { label: "Kina Papua-Nova Guiné", value: "PGK" },
  { label: "Peso Filipino", value: "PHP" },
  { label: "Rúpia Paquistanesa", value: "PKR" },
  { label: "Zlóti Polonês", value: "PLN" },
  { label: "Guarani Paraguaio", value: "PYG" },
  { label: "Rial Catarense", value: "QAR" },
  { label: "Leu Romeno", value: "RON" },
  { label: "Dinar Sérvio", value: "RSD" },
  { label: "Rublo Russo", value: "RUB" },
  { label: "Rublo Russo", value: "RUBTOD" },
  { label: "Rublo Russo", value: "RUBTOM" },
  { label: "Franco Ruandês", value: "RWF" },
  { label: "Riyal Saudita", value: "SAR" },
  { label: "Rúpias de Seicheles", value: "SCR" },
  { label: "Libra Sudanesa", value: "SDG" },
  { label: "DSE", value: "SDR" },
  { label: "Coroa Sueca", value: "SEK" },
  { label: "Dólar de Cingapura", value: "SGD" },
  { label: "Shilling Somaliano", value: "SOS" },
  { label: "Dobra São Tomé/Príncipe", value: "STD" },
  { label: "Colon de El Salvador", value: "SVC" },
  { label: "Libra Síria", value: "SYP" },
  { label: "Lilangeni Suazilandês", value: "SZL" },
  { label: "Baht Tailandês", value: "THB" },
  { label: "Somoni do Tajiquistão", value: "TJS" },
  { label: "TMT", value: "TMT" },
  { label: "Dinar Tunisiano", value: "TND" },
  { label: "Nova Lira Turca", value: "TRY" },
  { label: "Dólar de Trinidad", value: "TTD" },
  { label: "Dólar Taiuanês", value: "TWD" },
  { label: "Shilling Tanzaniano", value: "TZS" },
  { label: "Hryvinia Ucraniana", value: "UAH" },
  { label: "Shilling Ugandês", value: "UGX" },
  { label: "Peso Uruguaio", value: "UYU" },
  { label: "Som Uzbequistanês", value: "UZS" },
  { label: "Bolívar Venezuelano", value: "VEF" },
  { label: "Dong Vietnamita", value: "VND" },
  { label: "Vatu de Vanuatu", value: "VUV" },
  { label: "Franco CFA Central", value: "XAF" },
  { label: "Prata", value: "XAGG" },
  { label: "Brent Spot", value: "XBR" },
  { label: "Dólar do Caribe Oriental", value: "XCD" },
  { label: "Franco CFA Ocidental", value: "XOF" },
  { label: "Franco CFP", value: "XPF" },
  { label: "XRP", value: "XRP" },
  { label: "Riyal Iemenita", value: "YER" },
  { label: "Rand Sul-Africano", value: "ZAR" },
  { label: "Kwacha Zambiana", value: "ZMK" },
  { label: "Dólar Zimbabuense", value: "ZWL" },
  { label: "Ouro", value: "XAU" },
];

listaMoedas2.sort((a, b) => a.label.localeCompare(b.label)); // Organiza o objeto com base no label