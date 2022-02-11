import React, {createContext, ReactNode, useState} from 'react';

interface HabilidadeData {
  id: string;
  name: string;
  date?: Date;
}

interface childrenProviderProps {
  children: ReactNode;
}

interface ListaHabilidadesContextType {
  minhasHabilidades: HabilidadeData[];
  handleAdicionarNovaHabilidade: (novaHabilidade: string) => void;
  handleDeletarHabilidade: (idHabilidade: string) => void;
}

export const ListaHabilidadesContext = createContext(
  {} as ListaHabilidadesContextType,
);

export function ListaHabilidadesContextProvider({
  children,
}: childrenProviderProps) {
  const [minhasHabilidades, setMinhasHabilidades] = useState<HabilidadeData[]>(
    [],
  );
  function handleAdicionarNovaHabilidade(novaHabilidade: string) {
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

  return (
    <ListaHabilidadesContext.Provider
      value={{
        minhasHabilidades: minhasHabilidades,
        handleAdicionarNovaHabilidade,
        handleDeletarHabilidade,
      }}>
      {children}
    </ListaHabilidadesContext.Provider>
  );
}
