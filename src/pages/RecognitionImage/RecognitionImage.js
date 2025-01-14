// src/views/RecognitionImage.js
import React from 'react';
import Header from '../../components/Hearder/Header';
import useRecognitionController from '../../controllers/RecognitionController';
import './RecognitionImage.css';

const RecognitionImage = () => {
  const { fileName, result, handleFileChange, handleSubmit } = useRecognitionController();

  return (
    <>
      <Header />
      <h2 className='title-main'>RECONHECIMENTO DE IMAGEM</h2>
      <div className='recognition-image'>
        <div className="upload-container">
          <div className="upload-input-container">
            <div className='cinza-upload'>
              <label htmlFor="file-upload" className="upload-label">
                Escolher arquivo |
              </label>
            </div>
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              className="upload-input"
            />
            <span className="upload-file-name">
              {fileName ? fileName : 'Nenhum arquivo selecionado'}
            </span>
          </div>

          <button className="submit-button" onClick={handleSubmit}>
            Enviar
          </button>
        </div>

        {result && (
          <div className="result-container">
            <h3>Resultado:</h3>
            {result.error ? (
              <p>{result.error}</p>
            ) : (
              result.map((item, index) => (
                <div key={index}>
                  <p><strong>Nome:</strong> {item.name}</p>
                  <p>CPF:{item.cpf} </p>
                  <p>RG:{item.rg}</p>
                  <p>Nome do Pai:{item.nome_pai}</p>
                  <p>Nome da mãe: {item.nome_mae}</p>  
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default RecognitionImage;
