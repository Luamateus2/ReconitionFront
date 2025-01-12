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

  // Função para enviar o arquivo (simulação)
  const handleSubmit = () => {
    if (fileName) {
      alert('Arquivo enviado com sucesso!');
    } else {
      alert('Por favor, selecione um arquivo.');
    }
  };

  return (
    <div className="recognition-image">
      <Header />
      <div className="upload-container">
        <h2>RECONHECIMENTO DE IMAGEM</h2>
        <h3>Escolha uma Imagem para enviar</h3>
        {/* Campo de Upload de Arquivo */}
        <label htmlFor="file-upload" className="upload-label">
          Escolher arquivo | {fileName ? fileName : 'Nenhum arquivo selecionado'}
        </label>
        <input
          type="file"
          id="file-upload"
          onChange={handleFileChange}
          className="upload-input"
        />

        {/* Botão de Enviar */}
        <button className="submit-button" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default RecognitionImage;
