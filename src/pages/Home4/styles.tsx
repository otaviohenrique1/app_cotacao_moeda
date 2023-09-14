import Constants from "expo-constants";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    flex: 1,
    backgroundColor: 'white',
    margin: 16,
  },
  moedaContainer: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 16,
    borderColor: "black",
    borderWidth: 1,
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 16,
    borderBottomWidth: 1,
    width: "100%",
    textAlign: "center",
  },
  selectContainer: {
    borderWidth: 1,
    // marginBottom: 16,
  },
  select: {
    width: "100%",
    // width: 300,
    height: 50,
  },
  resultadoContainer: {
    borderWidth: 1,
    marginHorizontal: 16,
    padding: 16,
  },
  resultado: {
    textAlign: "center",
    fontSize: 16,
  },
  formulario: {
    paddingHorizontal: 16,
  },
  input: {
    // height: 40,
    // marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
