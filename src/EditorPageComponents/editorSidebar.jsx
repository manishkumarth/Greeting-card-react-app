import { useState, useLayoutEffect } from "react";
import CropModal from "../components/cropmodal";
import { UseModalHook } from "../hooks/modals";

function EditorSideBar({ onAddHeading }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isBgtoggle, setIsBgtoggle] = useState(false)
  const [isImg, setIsImg] = useState(false)
  const [file, setfile] = useState("");
  const [showLoader, hideLoader] = UseModalHook()
  // const []

  // ✅ Adjust sidebar open/closed based on device width
  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // desktop: open by default
        setIsOpen(true);
      } else {
        // mobile: closed by default
        setIsOpen(false);
      }
    };

    handleResize(); // run once at mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {
        isImg && (
          <CropModal
            type="square"
            bgRatio={25 / 30}
            image={URL.createObjectURL(file)} />
        )
      }
      <button
        className="btn btn-primary toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        style={{ marginTop: "70px", marginLeft: "10px", position: "fixed", zIndex: 1050 }}
      >
        {isOpen ? "⬅ Hide Tools" : "➡ Show Tools"}
      </button>

      <div
        className={`editor-sidebar shadow-lg p-3 ${isOpen ? "open" : "closed"}`}
        style={{
          position: "fixed",
          top: "70px",
          left: isOpen ? "0" : "-260px",
          width: "250px",
          height: "calc(100vh - 70px)",
          background: "#fff",
          transition: "left 0.3s ease-in-out",
          zIndex: 1040,
        }}
      >
        <h5 className="text-center mb-4">Editor Tools</h5>
        <div className="d-flex flex-column gap-3">
          <button
            onClick={(e) => setIsBgtoggle(!isBgtoggle)}
            className="btn btn-outline-primary w-100">➕ Background</button>
          {isBgtoggle ? (
            <div style={{ transition: ".5s ease" }}>
              <div>
                <label for="exampleColorInput" className="form-label">color</label>
                <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color" />
              </div>
              <div>
                <label for="formFileSm" className="form-label">image</label>
                <input className="form-control form-control-sm"
                  onChange={(e) => {
                    setIsImg(true);
                   
                      setfile(e.target.files[0]);
              
                    setTimeout(() => {
                      showLoader("cropper")
                    }, 1000)
                  }}
                  id="formFileSm" accept="image" type="file" />
              </div>
            </div>
          ) : ""}
          <button className="btn btn-outline-success w-100">🟠 Circle Image</button>
          <button className="btn btn-outline-info w-100">⬛ Square Image</button>
          <button
            className="btn btn-outline-warning w-100"
            onClick={onAddHeading} // ✅ call parent function
          >
            🔠 Heading
          </button>
          <button className="btn btn-outline-dark w-100">✍ Paragraph</button>
        </div>
      </div>

    </>
  );
}

export default EditorSideBar;
