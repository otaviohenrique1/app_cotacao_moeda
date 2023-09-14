import { Picker } from '@react-native-picker/picker';
import { FormikErrors } from 'formik';
import { Text, View, StyleSheet } from 'react-native';

export const styleSelect = StyleSheet.create({
  containerCampo: {
    marginBottom: 16,
  },
  selectContainer: {
    borderWidth: 1,
  },
  select: {
    width: "100%",
    height: 50,
  },
  erroTexto: {
    color: "red",
  }
});

interface CampoSelectProps {
  lista: {
    label: string;
    value: string;
  }[];
  selectedValue: string;
  onValueChange?: ((itemValue: string, itemIndex: number) => void);
  errors: any
}

export function CampoSelect(props: CampoSelectProps) {
  return (
    <View style={styleSelect.containerCampo}>
      <View style={styleSelect.selectContainer}>
        <Picker
          selectedValue={props.selectedValue}
          onValueChange={props.onValueChange}
          style={styleSelect.select}
        >
          {props.lista.map((item, index) => {
            return (
              <Picker.Item label={item.label} value={item.value} key={index} />
            );
          })}
        </Picker>
      </View>
      {props.errors}
    </View>
  );
}