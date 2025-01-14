import React, { useState } from 'react';
import Header from '../../components/Hearder/Header';
import './RecognitionImage.css';
function RecognitionImage() {
  const [fileName, setFileName] = useState(null); // Estado para armazenar o nome do arquivo selecionado

  // Função para lidar com a mudança de imagem
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); // Atualiza o nome do arquivo
    } else {
      setFileName(null); // Se não houver arquivo, reseta o nome
    }
  };

  return (
    <>
      <Header /> 
      <h2 className='title-main'>
              RECONHECIMENTO DE IMAGEM
      </h2>
      <div className='recognition-image'>   
            <div className="upload-container">
            
              

              {/* Container do campo de upload */}
              <div className="upload-input-container">
                {/* Texto "Escolher arquivo", clicável */}
                <div className='cinza-upload'>
                    <label htmlFor="file-upload" className="upload-label">
                      Escolher arquivo   |
                    </label>
                </div>
                {/* Campo de input real */}
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleFileChange}
                  className="upload-input"
                />

                {/* Texto para exibir o nome do arquivo ou "Nenhum arquivo selecionado" */}
                <span className="upload-file-name">
                  {fileName ? fileName : 'Nenhum arquivo selecionado'}
                </span>
              </div>

              {/* Botão de Enviar */}
              <button className="submit-button">
                Enviar
              </button>
            </div>
      </div>      
    </>
  );
}

export default RecognitionImage;