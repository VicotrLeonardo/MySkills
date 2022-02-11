import React from 'react';
import {StatusBar} from 'react-native';
import {
  ListaHabilidadesContext,
  ListaHabilidadesContextProvider,
} from './src/context/ListaHabilidadesContext';
import {Home} from './src/pages/Home';

export default function App() {
  return (
    <>
      <ListaHabilidadesContextProvider>
        <StatusBar barStyle="light-content" />
        <Home />
      </ListaHabilidadesContextProvider>
    </>
  );
}
