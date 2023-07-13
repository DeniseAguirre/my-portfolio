import React from 'react';
import PdfFile from '../../public/docs/DeniseAguirreMartinez-CV.pdf';

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PdfFile;
    link.download = 'DeniseAguirreMartinez-CV.pdf';
    link.click();
  };

  return (
    <button onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadButton;
