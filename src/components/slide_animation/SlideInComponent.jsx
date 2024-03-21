// SlideInComponent.js
import React, { useState, useEffect } from "react";
import "../slide_animation/SlideInComponent.css";
import { Box, Typography } from "@mui/material";

const SlideInComponent = ({ page, gotoAbout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (page === "About") {
      gotoAbout();
      setTimeout(() => {
        setIsVisible(true);
        console.log(isVisible);
      }, 500);
    } else {
      setIsVisible(false);
    }
  }, [page]);

  return (
    <Box
      style={{
        backgroundColor: "rgb(30,30,30)",
      }}
      height={"160%"}
      width={"100vw"}
    >
      {/* Your component content goes here */}
      <Typography
        color={"white"}
        className={`slide-in ${isVisible ? "visible" : ""}`}
      >
        Your Component Content
      </Typography>
    </Box>
  );
};

export default SlideInComponent;
