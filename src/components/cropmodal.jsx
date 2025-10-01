import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";

const CropModal = ({image="https://images.unsplash.com/photo-1599140849279-1014532882fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"}) => {
  const [croppedImage, setCroppedImage] = useState(null);
  const [img,setImg]=useState(image)
  const cropperRef = useRef(null);

  const handleCrop = () => {
    if (cropperRef.current) {
      // ✅ Use cropper API
      const canvas = cropperRef.current.getCanvas();
      if (canvas) {
        const base64 = canvas.toDataURL("image/jpeg");
        setCroppedImage(base64);
        console.log("Cropped Image:", base64);
      } else {
        console.log("⚠️ No canvas available yet");
      }
    }
  };
  const inputImg=useRef(null)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // temporary URL banayenge for preview
      setImg(URL.createObjectURL(file));
    }
  };
  return (
    <div>
    <div>
      <input onChange={handleFileChange} type="file" accept="image/*" ref={inputImg} />
    </div>
      <Cropper
        ref={cropperRef}
        src={img}
        className="cropper"
        stencilProps={{
          
          movable: true,
          resizable: false,
          minimum: 16/16,
          maximum: 8/8,
        }}
        
      />

      <button onClick={handleCrop} style={{ marginTop: "10px", padding: "8px 16px" }}>
        Crop Image
      </button>

      {croppedImage && (
        <div style={{ marginTop: "20px" }}>
          <h3>Preview:</h3>
          <img
            src={croppedImage}
            alt="Cropped Result"
            style={{ width: "400px", border: "2px solid #333" }}
          />
        </div>
      )}
    </div>
  );
};
export default CropModal;
