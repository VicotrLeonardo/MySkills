import React from 'react';
import {StatusBar} from 'react-native';
import {SkillsProvider} from './src/hooks/habilidadesContext';
import {Home} from './src/pages/Home';

export default function App() {
  return (
    <SkillsProvider>
      <StatusBar barStyle="light-content" />
      <Home />
    </SkillsProvider>
  );
}
