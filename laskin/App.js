import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");

  const result = () => {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    if (operator == "+") {
      return num1 + num2;
    } else if (operator == "-") {
      return num1 - num2;
    }
  }

  return (

    <View style={styles.container}>
      <View>
        <Text style={{fontSize:20}}>Result: {result()}</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={input => setFirstOperand(input)} />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={input => setSecondOperand(input)} />
      </View>
      <View style={styles.button}>
        <Button title="+" onPress={_ => setOperator("+")} />
        <Button title="-" onPress={_ => setOperator("-")} />
      </View>

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
  input: {
    textAlign: 'center',
    fontSize: 18,
    height: 40,
    width: 160,
    margin: 5,
    borderWidth: 1,
  },
  button: {
    flexDirection: 'row',
    columnGap: 15,
  }
});
