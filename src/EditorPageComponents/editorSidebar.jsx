import { useLayoutEffect, useState } from "react";

function EditorSideBar() {
  const [isOpen, setIsOpen] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth >= 768) {
        // desktop default: open
        setIsOpen(true);
      } else {
        // mobile default: closed
        setIsOpen(false);
      }
    };

    handleResize(); // run once at mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Toggle Button */}
      <button
        className="btn btn-primary toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        style={{ marginTop: "70px", marginLeft: "10px", position: "fixed", zIndex: 1050 }}
      >
        {isOpen ? "⬅ Hide Tools" : "➡ Show Tools"}
      </button>

      {/* Sidebar */}
      <div
        className={`editor-sidebar shadow-lg p-3 ${isOpen ? "open" : "closed"}`}
        style={{
          position: "fixed",
          top: "70px", // space for navbar (adjust if navbar height is diff)
          left: isOpen ? "0" : "-260px",
          width: "250px",
          height: "calc(100vh - 70px)", // full height minus navbar
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
          <button className="btn btn-outline-warning w-100">🔠 Heading</button>
          <button className="btn btn-outline-dark w-100">✍ Paragraph</button>
        </div>
      </div>
    </>
  );
}

export default EditorSideBar;
