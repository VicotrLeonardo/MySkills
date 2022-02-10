import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  Button,
} from 'react-native';

interface CardHabilidadeProps extends TouchableOpacityProps {
  habilidade: string;
}

export function CardHabilidade({habilidade, ...rest}: CardHabilidadeProps) {
  return (
    <TouchableOpacity
      style={styles.buttonHabilidade}
      activeOpacity={0.5}
      {...rest}>
      <Text style={styles.textoHabilidade}>{habilidade}</Text>
      <Button title="Excluir"></Button>
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
