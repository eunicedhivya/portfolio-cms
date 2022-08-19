import { useState } from 'react'

function PreviewImg({ file }) {

    const [previewImg, setPreviewImg] = useState(null);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setPreviewImg(reader.result);
    };
  return (
    <div>
        <img src={previewImg} alt="preview" />
    </div>
  )
}

export default PreviewImg