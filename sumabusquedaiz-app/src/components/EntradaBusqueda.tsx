import React from 'react';

interface EntradaBusquedaProps {
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
    placeholder?: string;
}

const EntradaBusqueda: React.FC<EntradaBusquedaProps> = ({ 
    value, 
    onChange, 
    onSearch, 
    placeholder = "Ingresar palabra a buscar" 
}) => {
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Palabra a buscar:
            </label>
            <div style={{ display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={placeholder}
                    style={{
                        flex: 1,
                        padding: '10px',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontFamily: 'Arial, sans-serif'
                    }}
                />
                <button
                    onClick={onSearch}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#0056b3';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#007bff';
                    }}
                >
                    Buscar
                </button>
            </div>
        </div>
    );
};

export default EntradaBusqueda;
