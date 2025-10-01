import React, { useState, useRef } from "react";
import { Cropper, ratio } from "react-advanced-cropper";
import { CircleStencil, RectangleStencil } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";

const CropModal = ({
  type,
  // = "squre",
  // circle
  bgRatio ,
  // = 25 / 30,
  // = "https://images.unsplash.com/photo-1599140849279-1014532882fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"

  image }) => {
  const [croppedImage, setCroppedImage] = useState(null);
  // const [img, setImg] = useState(image);
  const cropperRef = useRef(null);
console.log("props:Images",image,"types:",type,"ratio:",ratio)
  const handleCrop = () => {
    if (cropperRef.current) {
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

  // const inputImg = useRef(null);
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setImg(URL.createObjectURL(file));
  //   }
  // };

  return (


    <div
      className="modal fade text-center"
      id="cropper"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="false"
      style={{ background: 'rgb(227 229 232 / 74%)' }}
    >
      <div className="modal-dialog">


        {/* <div>
        <input
          onChange={handleFileChange}
          type="file"
          accept="image/*"
          ref={inputImg}
        />
      </div> */}

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
          style={{ marginTop: "10px", padding: "8px 16px" }}
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
  );
};

export default CropModal;
