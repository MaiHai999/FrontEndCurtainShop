import React from 'react';

const ImageComponent = (props) => {
    const { base64Data } = props;

  const decodeBase64ToImage = (base64Data) => {
    const binaryString = atob(base64Data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: 'image/png' });
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  };

  const imageUrl = decodeBase64ToImage(base64Data);

  return <img src={imageUrl} alt="Decoded Image" />;
};

export default ImageComponent;