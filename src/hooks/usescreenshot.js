// useScreenshot.js
import { useState } from "react";
import html2canvas from "html2canvas";

const useScreenshot = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isCapturing, setIsCapturing] = useState(false);

  const takeScreenshot = async (elementId) => {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`❌ Element with id '${elementId}' not found`);
      return null;
    }

    try {
      setIsCapturing(true);
      const canvas = await html2canvas(element, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
      });
      const base64Image = canvas.toDataURL("image/png");
      setImageUrl(base64Image);
      return base64Image;
    } catch (error) {
      console.error("❌ Screenshot failed:", error);
      return null;
    } finally {
      setIsCapturing(false);
    }
  };

  return { imageUrl, takeScreenshot, isCapturing };
};

export default useScreenshot;
