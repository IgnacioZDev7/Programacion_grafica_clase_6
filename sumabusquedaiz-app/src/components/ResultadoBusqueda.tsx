import React from 'react';

interface ResultadoBusquedaProps {
    text: string;
    searchWord: string;
    isSearching: boolean;
}

const ResultadoBusqueda: React.FC<ResultadoBusquedaProps> = ({ text, searchWord, isSearching }) => {
    // Función simple de búsqueda binaria
    const buscarPalabra = (): boolean => {
        if (!text.trim() || !searchWord.trim()) {
            return false;
        }

        // Dividir el texto en palabras y ordenarlas
        const palabras = text
            .toLowerCase()
            .replace(/[^\w\s]/g, ' ')
            .split(/\s+/)
            .filter(palabra => palabra.length > 0)
            .sort();

        const palabraBuscada = searchWord.toLowerCase();

        // Búsqueda binaria simple
        let izquierda = 0;
        let derecha = palabras.length - 1;

        while (izquierda <= derecha) {
            const medio = Math.floor((izquierda + derecha) / 2);
            const palabraMedio = palabras[medio];

            if (palabraMedio === palabraBuscada) {
                return true; // Encontrada
            } else if (palabraMedio < palabraBuscada) {
                izquierda = medio + 1;
            } else {
                derecha = medio - 1;
            }
        }

        return false; // No encontrada
    };

    const encontrada = buscarPalabra();

    if (isSearching) {
        return (
            <div style={{ 
                padding: '20px', 
                border: '2px solid #ddd', 
                borderRadius: '8px', 
                backgroundColor: '#f8f9fa',
                textAlign: 'center'
            }}>
                <p style={{ margin: 0 }}>
                    Buscando...
                </p>
            </div>
        );
    }

    if (!text.trim() || !searchWord.trim()) {
        return (
            <div style={{ 
                padding: '20px', 
                border: '2px solid #ddd', 
                borderRadius: '8px', 
                backgroundColor: '#f8f9fa',
                textAlign: 'center'
            }}>
                <p style={{ margin: 0 }}>
                    Ingresa un parrafo y una palabra para buscar
                </p>
            </div>
        );
    }

    return (
        <div style={{ 
            padding: '20px', 
            border: '2px solid #ddd', 
            borderRadius: '8px', 
            backgroundColor: '#f8f9fa'
        }}>
            <h3 style={{ 
                margin: '0 0 15px 0'
            }}>
                {encontrada ? 'Palabra encontrada' : 'Palabra no encontrada'}
            </h3>
            
            <div style={{ marginBottom: '15px' }}>
                <strong>Palabra buscada:</strong> "{searchWord}"
            </div>
        </div>
    );
};

export default ResultadoBusqueda;
