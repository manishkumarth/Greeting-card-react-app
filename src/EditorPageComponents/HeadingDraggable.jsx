import React, { useState, useRef, useEffect } from "react";
import { Rnd } from "react-rnd";
import Fonts from "./fonts";

const HeadingDraggable = ({ headingData, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const buttonRef = useRef(null);

  // ✅ Update helpers
  const updateField = (key, value) => {
    onChange({ ...headingData, [key]: value });
  };

  const updateNestedField = (parentKey, value) => {
    onChange({ ...headingData, [parentKey]: value });
  };

  // Font size controls
  const increaseFont = () =>
    updateField("fontSize", headingData.fontSize + 1);
  const decreaseFont = () =>
    updateField("fontSize", Math.max(8, headingData.fontSize - 1));

  // Blur handling
  const handleBlur = (e) => {
    if (buttonRef.current && buttonRef.current.contains(e.relatedTarget)) return;
    setIsFocused(false);
  };
  useEffect(() => {
    console.log("Heading data :", headingData)
  }, [headingData])

  return (
    <div>
      <Rnd
        size={headingData.size}
        position={headingData.position}
        onDragStop={(e, d) =>
          updateNestedField("position", { x: d.x, y: d.y })
        }
        onResizeStop={(e, direction, ref, delta, pos) => {
          onChange({
            ...headingData,
            size: {
              width: ref.offsetWidth,
              height: ref.offsetHeight,
            },
            position: pos,
            fontSize: Math.floor(ref.offsetHeight / 2), // optional: update fontSize
          });
        }}

        dragHandleClassName="drag-handle"
      >
        <input
          // name="hading"
          type="text"
          placeholder="Type here..."
          className="drag-handle"
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          value={headingData.text}
          onChange={(e) => updateField("text", e.target.value)}
          style={{
            width: "100%",
            height: "100%",
            outline: "none",
            border: isFocused ? "2px solid blue" : "none",
            fontSize: `${headingData.fontSize}px`,
            fontFamily: headingData.fontName,
            color: headingData.fontColor,
            fontWeight: headingData.fontWeight,
            padding: "5px",
            boxSizing: "border-box",
            cursor: "move",
            background: "transparent"
          }}
        />

        {isFocused && (
          <div
            ref={buttonRef}
            style={{ marginTop: 20, display: "flex", gap: "8px",fontSize:"1vw" }}
          >
            <button onClick={increaseFont}>A+</button>
            <button onClick={decreaseFont}>A-</button>

            <Fonts
              onUpdateFonts={(val) => updateField("fontName", val)}
              value={headingData.fontName}
            />

            <div>
              <input
                type="color"
                value={headingData.fontColor}
                onChange={(e) => updateField("fontColor", e.target.value)}
                style={{ width: "30px", height: "30px" }}
              />
            </div>

            <div>
              <select
                value={headingData.fontWeight}
                onChange={(e) => updateField("fontWeight", e.target.value)}
              >
                {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map((w) => (
                  <option key={w} value={w}>
                    {w / 100}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </Rnd>
    </div>
  );
};
export default HeadingDraggable;