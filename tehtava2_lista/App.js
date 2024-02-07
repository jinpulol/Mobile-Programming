import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';


export default function App() {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, todo]);
    setTodo('');


  }

  const itemSeparator = () => {
    return (<View
      style={{
        height: 1,
        backgroundColor: 'black'
      }}></View>);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Type todo...'
        onChangeText={text => setTodo(text)}
        value={todo}
      />
      <Button title='Add Todo' onPress={handleAdd} />
      <FlatList
        data={todos}
        ItemSeparatorComponent={itemSeparator}
        renderItem={({ item }) =>
          <View style={styles.listItem}>
            <Text>Todo:</Text>
            <Text>{item}</Text>
          </View>} />

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
    marginTop: 50,
  },
  listItem: {
    flexDirection: 'row',
    width: 300,
    padding: 10,
    backgroundColor: 'lightblue',

  }
});
