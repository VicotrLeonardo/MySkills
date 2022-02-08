import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  const [novaHabilidade, setNovaHabilidade] = useState('');
  const [minhasHabilidades, setMinhasHabilidades] = useState([]);

  function handleAdicionarNovaHabilidade() {
    setMinhasHabilidades(oldState => [...oldState, novaHabilidade]);
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Bem Vindo</Text>
        <TextInput
          style={styles.input}
          placeholder="Nova Habilidade"
          placeholderTextColor="#999"
          onChangeText={setNovaHabilidade}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={handleAdicionarNovaHabilidade}>
          <Text style={styles.buttonText}>Adiconar Habilidade</Text>
        </TouchableOpacity>

        <Text style={[styles.title, {marginVertical: 30, fontSize: 18}]}>
          Minhas Habilidades
        </Text>

        {minhasHabilidades.map(habilidade => (
          <TouchableOpacity
            key={habilidade}
            style={styles.buttonHabilidade}
            activeOpacity={0.5}>
            <Text style={styles.textoHabilidade}>{habilidade}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    color: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#A37C',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonHabilidade: {
    backgroundColor: '#1F1E44',
    padding: 18,
    borderRadius: 50,
    marginTop: 10,
    alignItems: 'center',
  },
  textoHabilidade: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
  },
});
