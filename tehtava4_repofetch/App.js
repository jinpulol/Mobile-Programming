import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';

export default function App() {

  const [keyword, setKeyword] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRepositories = () => {
    setLoading(true);
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
      .then(response => {
        if (!response)
          throw new Error('Error in fetch: ' + response.statusText);

        return response.json();
      })
      .then(data => {
        setRepositories(data.items);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      })
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  else {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 50, flex: 1 }}>
          <TextInput
            placeholder='Type keyword'
            value={keyword}
            onChangeText={text => setKeyword(text)}
          />
          <Button title='Search' onPress={fetchRepositories} />
        </View>
        <View style={{ flex: 6 }}>
          <FlatList
            data={repositories}
            renderItem={({ item }) =>
              <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 18 }}>{item.full_name}</Text>
                <Text>{item.description}</Text>
              </View>
            }
          />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
