import { useState } from "react";
import HeadingDraggable from "./HeadingDraggable";
import EditorSideBar from "./editorSidebar";

function EditTemplate() {
  const [headings, setHeadings] = useState([]);

  // Add a new heading
  const addHeading = () => {
    setHeadings((prev) => [
      ...prev,
      {
        id: Date.now(),  // unique id
        text: "",
        size: { width: 200, height: 40 },
        position: { x: 100, y: 100 },
        fontSize: 20,
        fontName: "sans-serif",
        fontColor: "#1d1d1d",
        fontWeight: 400,
      },
    ]);
  };

  // Update a heading by id
  const updateHeading = (id, newData) => {
    setHeadings((prev) =>
      prev.map((h) => (h.id === id ? { ...h, ...newData } : h))
    );
  };

  return (
    <div style={{ display: "flex" }}>
      <EditorSideBar onAddHeading={addHeading} />

      <div
        style={{
          flex: 1,
          position: "relative",
          height: "100vh",
          background: "#f5f5f5",
        }}
      >
        {headings.map((heading) => (
          <HeadingDraggable
            key={heading.id}
            headingData={heading}
            onChange={(data) => updateHeading(heading.id, data)}
          />
        ))}
      </div>
    </div>
  );
}

export default EditTemplate;
