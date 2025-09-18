import React from 'react';

interface EntradaTextoProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const EntradaTexto: React.FC<EntradaTextoProps> = ({ value, onChange, placeholder = "Ingresa tu párrafo aquí..." }) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Párrafo de texto:
            </label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                style={{
                    width: '100%',
                    height: '120px',
                    padding: '10px',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: 'Arial, sans-serif',
                    resize: 'vertical'
                }}
            />
        </div>
    );
};

export default EntradaTexto;
