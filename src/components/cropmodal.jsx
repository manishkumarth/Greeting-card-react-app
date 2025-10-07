import React, { useState, useRef, useContext } from "react";
import { Cropper, ratio } from "react-advanced-cropper";
import { CircleStencil, RectangleStencil } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import { bgContext } from "../context/bgcontext";

const CropModal = ({
  type,
  // = "squre",
  // circle
  bgRatio,
  image }) => {
  const { setBgImg } = useContext(bgContext)
  const [croppedImage, setCroppedImage] = useState(null);
  // const [img, setImg] = useState(image);
  const cropperRef = useRef(null);
  console.log("props:Images", image, "types:", type, "ratio:", ratio)
  const handleCrop = () => {
    if (cropperRef.current) {
      const canvas = cropperRef.current.getCanvas();
      if (canvas) {
        const base64 = canvas.toDataURL("image/jpeg");
        setCroppedImage(base64);
        setBgImg(base64)
        console.log("Cropped Image:", base64);
      } else {
        console.log("No canvas available yet");
      }
    }
  };


  return (

    <div class="modal fade" id="cropper">
      <div class="modal-dialog">
        <div class="modal-content">

          <Cropper
            ref={cropperRef}
            src={image}
            className="cropper"
            stencilComponent={type === "circle" ? CircleStencil : RectangleStencil}
            stencilProps={{
              movable: true,
              resizable: true,
              aspectRatio: bgRatio,
            }}
          />

          <button
            onClick={handleCrop}
            style={{ marginTop: "10px", padding: "8px 16px", cursor: "pointer" }}
          >
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
      </div>
    </div>

  );
};

export default CropModal;
