import React, { useState } from 'react';
import Header from '../../components/Hearder/Header';
import useRecognitionController from '../../controllers/RecognitionController';
import './RecognitionImage.css';

const RecognitionImage = () => {
  const { fileName, result, handleFileChange, handleSubmit } = useRecognitionController();
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Cria a URL da imagem para pré-visualização
    }
  };

  return (
    <>
      <Header />
      <h2 className='title-main'>RECONHECIMENTO DE IMAGEM</h2>
      <div className='recognition-image'>
        <div className="upload-container">
          <div className="upload-input-container">
            <div className='cinza-upload'>
              <label htmlFor="file-upload" className="upload-label">
                  Selecione Arquivo
              </label>
            </div>
            <input
              type="file"
              id="file-upload"
              onChange={(e) => {
                handleFileChange(e);
                handleImageChange(e); 
              }}
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
                  {/* Exibe as imagens lado a lado */}
                  <div className="images-container">
                    {/* Imagem carregada pelo usuário */}
                    {imagePreview && (
                      <div className="image-preview-container">
                        <p className='upload-text'>Upload</p>
                        <img src={imagePreview} alt="Imagem carregada" className="uploaded-image" />
                      </div>
                    )}

                    {/* Imagem do banco */}
                    {item.image_url ? (
                      <div className="image-from-db-container">
                        <p className='upload-text'>Base de Dados</p>
                        <img src={item.image_url} alt="Imagem do Banco" className="uploaded-image" />
                      </div>
                    ) : (
                      <p>Imagem não encontrada no banco.</p>
                    )}
                  </div>

                  <p><strong>Nome:</strong> {item.name}</p>
                  <p><strong>CPF:</strong>{item.cpf}</p>
                  <p><strong>RG:</strong>{item.rg}</p>
                  <p><strong>Nome do Pai: </strong>{item.nome_pai}</p>
                  <p><strong>Nome da mãe:</strong>{item.nome_mae}</p>

                  {console.log("Imagem URL:", item.image_url)}
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
