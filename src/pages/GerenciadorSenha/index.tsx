import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";

export function GerenciadorSenha() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.titulo}>App cotação de moeda</Text>
      </View>
      <View>
        <Text>GerenciadorSenha</Text>
      </View>
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
  }
});