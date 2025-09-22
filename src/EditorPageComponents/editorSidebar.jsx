import { useState, useLayoutEffect } from "react";

function EditorSideBar({ onAddHeading }) {
  const [isOpen, setIsOpen] = useState(true);

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
          <button className="btn btn-outline-primary w-100">➕ Background</button>
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
