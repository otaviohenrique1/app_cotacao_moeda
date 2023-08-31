import React, { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, Text, GestureResponderEvent, DimensionValue } from 'react-native';

interface BotaoTypes {
  onPress: (event: GestureResponderEvent) => void;
  fontColor: string;
  buttonColor: string;
  widthBotao: DimensionValue;
  children: ReactNode;
}

export function Botao(props: BotaoTypes) {
  let style = styles(
    props.fontColor,
    props.buttonColor,
    props.widthBotao,
  );
  return (
    <TouchableOpacity
      style={style.botao}
      onPress={props.onPress}
    >
      <Text style={style.botaoTitulo}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = (fontColor: string, buttonColor: string, widthBotao: DimensionValue) => StyleSheet.create({
  botao: {
    padding: 10,
    width: widthBotao,
    alignItems: "center",
    backgroundColor: buttonColor,
  },
  botaoTitulo: {
    fontSize: 18,
    color: fontColor,
  },
});
