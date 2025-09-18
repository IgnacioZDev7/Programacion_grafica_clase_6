import React, { useState } from 'react';
import './App.css';
import SumForm from './components/SumForm';
import Result from './components/Result';
import EntradaTexto from './components/EntradaTexto';
import EntradaBusqueda from './components/EntradaBusqueda';
import ResultadoBusqueda from './components/ResultadoBusqueda';

const App: React.FC = () => {
  const [result, setResult] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [searchWord, setSearchWord] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleSearch = () => {
    if (!text.trim() || !searchWord.trim()) return;
    
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 100);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        clase 6
      </h1>
      
      <div style={{ 
        marginBottom: '40px', 
        padding: '20px', 
        borderRadius: '10px',
        backgroundColor: '#f8f9ff'
      }}>
        <h2 style={{ marginTop: 0 }}>Calculadora</h2>
        <SumForm onSum={setResult} />
        <Result value={result} />
      </div>

      <div style={{ 
        padding: '20px', 
        borderRadius: '10px',
        backgroundColor: '#f8fff9'
      }}>
        <h2 style={{ marginTop: 0 }}>Busqueda de Palabras</h2>
        <EntradaTexto 
          value={text} 
          onChange={setText}
          placeholder="Ingresar un parrafo de texto"
        />
        <EntradaBusqueda 
          value={searchWord} 
          onChange={setSearchWord}
          onSearch={handleSearch}
          placeholder="Ingresar una palabra para buscar"
        />
        <ResultadoBusqueda 
          text={text} 
          searchWord={searchWord} 
          isSearching={isSearching}
        />
      </div>
    </div>
  );
}

export default App;
