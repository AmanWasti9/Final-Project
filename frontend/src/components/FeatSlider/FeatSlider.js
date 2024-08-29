// src/components/FeatSlider.js
import React, { useState, useEffect } from "react";
import "./FeatSlider.css";
import url from "../../Images/url.jpg";

const FeatSlider = () => {
  const [visibleSection, setVisibleSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const thresholds = [550, 750, 850];

      let newVisibleSection = 0;
      for (let i = 0; i < thresholds.length; i++) {
        if (scrollPosition > thresholds[i]) {
          newVisibleSection = i + 1;
        }
      }
      console.log(
        "Scroll Position:",
        scrollPosition,
        "Visible Section:",
        newVisibleSection
      ); // Debugging line
      setVisibleSection(newVisibleSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on initial render to check visibility

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-slider">
      <div className="slider-content">
        <h1>Scroll Down to Reveal Sections</h1>
      </div>
      <div
        className={`section section-1 ${visibleSection >= 1 ? "visible" : ""}`}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "50%",
              color: "white",
            }}
          >
            {" "}
            <h2>Section 1</h2>
            <p>
              This is the content for the first section. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Tempora vel, repudiandae quis
              assumenda, tempore autem magni dignissimos impedit recusandae
              animi aut libero, expedita eius dolores labore? Sint error ducimus
              sequi.
            </p>
          </div>
          <div
            style={{
              width: "50%",
            }}
          >
            <img
              src={url}
              alt=""
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={`section section-2 ${visibleSection >= 2 ? "visible" : ""}`}
      >
        <h2>Section 2</h2>
        <p>
          This is the content for the second section. Lorem ipsum dolor sit
          amet...
        </p>
      </div>
      <div
        className={`section section-3 ${visibleSection >= 3 ? "visible" : ""}`}
      >
        <h2>Section 3</h2>
        <p>
          This is the content for the third section. Lorem ipsum dolor sit
          amet...
        </p>
      </div>
    </div>
  );
};

export default FeatSlider;
