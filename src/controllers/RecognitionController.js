import { useState } from 'react';
import { uploadImage } from '../models/ImageModel';

const useRecognitionController = () => {
  const [fileName, setFileName] = useState(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      setFile(selectedFile);
    } else {
      setFileName(null);
      setFile(null);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Por favor, selecione um arquivo.');
      return;
    }

    try {
      const data = await uploadImage(file);
      setResult(data);
    } catch (error) {
      setResult({ error: error.message });
    }
  };

  return {
    fileName,
    result,
    handleFileChange,
    handleSubmit,
  };
};

export default useRecognitionController;
