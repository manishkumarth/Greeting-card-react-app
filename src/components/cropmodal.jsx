import React, { useState, useRef, useContext, useEffect } from "react";
import { Cropper } from "react-advanced-cropper";
import { CircleStencil, RectangleStencil } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import { bgContext } from "../context/bgcontext";

const CropModal = ({ type, bgRatio, image }) => {
  const { setBgImg } = useContext(bgContext);
  const [croppedImage, setCroppedImage] = useState(null);
  const [cropperKey, setCropperKey] = useState(0); 
  const cropperRef = useRef(null);

  const handleCrop = () => {
    if (cropperRef.current) {
      const canvas = cropperRef.current.getCanvas();
      if (canvas) {
        const base64 = canvas.toDataURL("image/jpeg");
        setCroppedImage(base64);
        setBgImg(base64);
        console.log("✅ Cropped Image:", base64);
      } else {
        console.log("⚠️ No canvas available yet");
      }
    }
  };

  // 👇 Fix: Re-render Cropper when modal is shown
  useEffect(() => {
    const modal = document.getElementById("cropper");
    const handleShown = () => {
      setTimeout(() => {
        setCropperKey((prev) => prev + 1); 
      }, 200);
    };
    modal.addEventListener("shown.bs.modal", handleShown);
    return () => modal.removeEventListener("shown.bs.modal", handleShown);
  }, []);

  return (
    <div className="modal fade" id="cropper" tabIndex="-1">
      <div className="modal-dialog modal-lg">
        <div className="modal-content p-3">
          <Cropper
            key={cropperKey} 
            ref={cropperRef}
            src={image}
            className="cropper"
            stencilComponent={type === "circle" ? CircleStencil : RectangleStencil}
            stencilProps={{
              movable: true,
              resizable: true,
              aspectRatio: bgRatio,
            }}
            style={{
              width: "100%",
              height: "400px",
            }}
          />

          <button
            onClick={handleCrop}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              cursor: "pointer",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
            }}
          >
            Crop Image
          </button>

          {croppedImage && (
            <div style={{ marginTop: "20px" }}>
              <h3>Preview:</h3>
              <img
                src={croppedImage}
                alt="Cropped Result"
                style={{ width: "100%", border: "2px solid #333" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropModal;
