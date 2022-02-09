import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function CardHabilidade({habilidade}) {
  return (
    <TouchableOpacity style={styles.buttonHabilidade} activeOpacity={0.5}>
      <Text style={styles.textoHabilidade}>{habilidade}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonHabilidade: {
    backgroundColor: '#1F1E44',
    padding: 15,
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
