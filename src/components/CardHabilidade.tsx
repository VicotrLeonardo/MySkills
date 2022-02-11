import React, {useContext} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  Button,
} from 'react-native';

interface CardHabilidadeProps extends TouchableOpacityProps {
  habilidade: string;
  idHabilidade: string;
  handleDeletarHabilidade: (id: string) => void;
}

export function CardHabilidade({
  habilidade,
  idHabilidade,
  handleDeletarHabilidade,
  ...rest
}: CardHabilidadeProps) {
  return (
    <TouchableOpacity
      style={styles.buttonHabilidade}
      activeOpacity={0.5}
      {...rest}>
      <Text style={styles.textoHabilidade}>{habilidade}</Text>
      <Button
        title="Excluir"
        onPress={() => handleDeletarHabilidade(idHabilidade)}></Button>
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
