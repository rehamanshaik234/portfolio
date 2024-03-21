import React, { useEffect, useRef } from "react";
import NavBar from "../NavBar/NavBar";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import useNav from "../NavBar/useNav";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "react-spring";
import SlideInComponent from "../slide_animation/SlideInComponent";
import Home from "../home/Home";

function Navigation() {
  const { page, updatePage } = useNav();
  const ref = useRef();
  function onHomeClick() {
    updatePage("Home");
    ref.current.scrollTo(0);
  }
  function onAboutClick() {
    updatePage("About");
    ref.current.scrollTo(1);
  }
  function onContactClick() {
    updatePage("Contact");
    ref.current.scrollTo(2);
  }

  const gotoHome = () => {
    ref.current.scrollTo(0);
  };
  const gotoAbout = () => {
    ref.current.scrollTo(1);
  };
  const gotoContact = () => {
    ref.current.scrollTo(2);
  };
  const scrollListener = () => {
    const handleWheelEvent = () => {
      const { container, current } = ref.current;
      const scrollpercent =
        current / (container.current.scrollHeight - window.innerHeight);
      if (scrollpercent >= 0 && scrollpercent < 0.26034) {
        updatePage("Home");
      } else if (scrollpercent > 0.26034 && scrollpercent < 0.8572) {
        updatePage("About");
      } else {
        updatePage("Contact");
      }
    };
    window.addEventListener("wheel", handleWheelEvent);
    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
    };
  };
  useEffect(scrollListener, []);
  const FadeInLeftToRight = ({ children }) => {
    const props = useSpring({
      opacity: 1,
      transform: "translateX(0)",
      from: { opacity: 0, transform: "translateX(-50px)" },
    });

    return <animated.div style={props}>{children}</animated.div>;
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      style={{
        background:
          "linear-gradient(130deg, black 0%, #272727 44%, #494949 100%, #727272 100%)",
      }}
    >
      <NavBar
        onAboutClick={onAboutClick}
        onContactCLick={onContactClick}
        onHomeClick={onHomeClick}
        page={page}
      />
      <Parallax onScroll={(e) => {}} pages={3} ref={ref}>
        {/* Page 1 */}
        <ParallaxLayer offset={0} factor={1} speed={0.5}>
          <Home page={page} gotoHome={gotoHome}></Home>
        </ParallaxLayer>

        {/* Page 2 */}
        <ParallaxLayer offset={1} factor={1} speed={0.5}>
          <SlideInComponent
            gotoAbout={gotoAbout}
            page={page}
          ></SlideInComponent>
        </ParallaxLayer>

        {/* Page 3 */}
        <ParallaxLayer offset={2} factor={1} speed={0.5}>
          <Box
            component="main"
            width={"100vw"}
            height={"100vh"}
            padding={"0px"}
            margin={"0px"}
            bgcolor={"rgb(30,30,30)"}
          >
            <Typography color={"white"}>Heyyy</Typography>
          </Box>
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
}

export default Navigation;
