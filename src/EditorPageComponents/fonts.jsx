import { useState, useEffect, memo } from "react";

const Fonts = ({ onUpdateFonts, value }) => {
  const [fonts, setFonts] = useState([]);

  // fetch fonts list once
  useEffect(() => {
    fetch("https://api.fontsource.org/v1/fonts")
      .then((res) => res.json())
      .then((data) => setFonts(data))
      .catch((err) => console.error("Error fetching fonts:", err));
  }, []);

  // load selected font but DON'T remove on cleanup
  useEffect(() => {
    if (!value) return;

    const linkId = `google-font-${value.replace(/\s+/g, "-")}`;

    // check if link already exists
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.href = `https://fonts.googleapis.com/css2?family=${value.replace(
        / /g,
        "+"
      )}:wght@400&display=swap`;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, [value]);

  return (
    <div style={{ padding: "10px" }}>
      <select onChange={(e) => onUpdateFonts(e.target.value)} value={value}>
        <option value="">-- Choose Font --</option>
        {fonts.map((font) => (
          <option key={font.id} value={font.family}>
            {font.family}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Fonts);
