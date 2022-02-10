import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';

interface AuthContextData {
  excluir(id): void;
  skills: any;
  adicionar({id, name}): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const SkillsProvider: React.FC = ({children}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  function excluir(idHabilidade) {
    const x = data.filter(habilidade => habilidade.id !== idHabilidade);
    setData([...x]);
  }

  function adicionar({id, name}) {
    setData([...data, {id, name}]);
  }

  return (
    <AuthContext.Provider value={{excluir, skills: data, adicionar}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useSkills(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
