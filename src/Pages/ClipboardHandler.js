import React, { useState, useEffect } from 'react';

// متغیر const برای ذخیره تصویر کلیپ‌بورد
let clipboardImage = null;

const saveClipboardImage = async (event) => {
  const clipboardItems = event.clipboardData.items;
  for (let item of clipboardItems) {
    if (item.type.startsWith('image/')) {
      const blob = item.getAsFile();
      const reader = new FileReader();
      reader.onload = (e) => {
        clipboardImage = e.target.result;
        console.log('Image saved to const variable:', clipboardImage);
      };
      reader.readAsDataURL(blob);
    }
  }
};

function ClipboardHandler() {
  useEffect(() => {
    const handlePaste = (event) => {
      saveClipboardImage(event);
    };

    window.addEventListener('paste', handlePaste);

    return () => {
      window.removeEventListener('paste', handlePaste);
    };
  }, []);

  return (
    <div>
      <h2>Paste an image from clipboard</h2>
      <p>Press Ctrl+V to paste an image from clipboard</p>
    </div>
  );
}

export default ClipboardHandler;
