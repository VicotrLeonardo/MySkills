import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import {Button} from '../components/Button';
import {CardHabilidade} from '../components/CardHabilidade';
import {ListaHabilidadesContext} from '../context/ListaHabilidadesContext';

export function Home() {
  const [novaHabilidade, setNovaHabilidade] = useState('');
  const [greeting, setGreeting] = useState('Bom dia');

  const {
    minhasHabilidades,
    handleAdicionarNovaHabilidade,
    handleDeletarHabilidade,
  } = useContext(ListaHabilidadesContext);

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Bom Dia');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde');
    } else {
      setGreeting('Boa Noite');
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{greeting}, Victor</Text>
        <TextInput
          style={styles.input}
          placeholder="Nova Habilidade"
          placeholderTextColor="#999"
          onChangeText={setNovaHabilidade}
        />

        <Button
          onPress={() => handleAdicionarNovaHabilidade(novaHabilidade)}
          title="Adicionar Habilidade"
        />

        <Text style={[styles.title, {marginVertical: 30, fontSize: 18}]}>
          Minhas Habilidades
        </Text>

        <FlatList
          data={minhasHabilidades}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CardHabilidade
              habilidade={item.name}
              idHabilidade={item.id}
              handleDeletarHabilidade={handleDeletarHabilidade}
            />
          )}
        />
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
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    borderRadius: 10,
  },
});

/*
  const [minhasHabilidades, setMinhasHabilidades] = useState<HabilidadeData[]>(
    [],
  );
  function handleAdicionarNovaHabilidade() {
    const data = {
      id: String(Math.random()),
      name: novaHabilidade,
    };
    setMinhasHabilidades(oldState => [...oldState, data]);
  }

  function handleDeletarHabilidade(idHabilidade: string) {
    setMinhasHabilidades(oldState =>
      oldState.filter(habilidade => habilidade.id !== idHabilidade),
    );
  }
  */
