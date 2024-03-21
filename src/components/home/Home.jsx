import React, { useEffect, useState } from "react";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import "../slide_animation/SlideInComponent.css";

const Home = ({ page, gotoHome }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (page === "Home") {
      gotoHome();
      setTimeout(() => {
        setIsVisible(true);
        console.log(isVisible);
      }, 1000);
    } else {
      setIsVisible(false);
    }
  }, [page]);

  return (
    <>
      <Box
        component="main"
        width={"100vw"}
        height={"160%"}
        padding={"0px"}
        margin={"0px"}
        style={{
          // background:
          //   "linear-gradient(130deg, black 0%, #272727 44%, #494949 100%, #727272 100%)",
          backgroundColor: "rgb(30,30,30)",
        }}
      >
        <Box height={"100%"} width={"100%"} display={"flex"}>
          <Box
            sx={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
            margin={{
              sm: "40px 20px",
              lg: "80px",
              xl: "80px",
              md: "70px",
              xs: "30px 10px",
            }}
            height={"100%"}
            width={"100%"}
          >
            <img
              className={`slide-right ${isVisible ? "visible" : ""}`}
              src={require("../../assets/Login.png")}
              height={"60%"}
              alt=""
              style={{
                objectFit: "fill",
                position: "absolute",
                right: "-10px",
                padding: "0px",
                width: {
                  xl: "30%",
                  lg: "30%",
                  md: "40%",
                  sm: "80%",
                  xs: "80%",
                },
              }}
            ></img>

            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"intial"}
              alignItems={"initial"}
              sx={{
                fontWeight: "600",
                position: "absolute",
                top: "0px",
                zIndex: 4,
              }}
            >
              <Typography
                color={"white"}
                padding={{
                  sm: "60px 20px",
                  lg: "100px",
                  xl: "100px",
                  md: "60px 20px",
                  xs: "50px 10px",
                }}
                style={{
                  color: "#E5E9F0",
                  fontFamily: "Fira Code",
                  fontWeight: "450",
                  wordWrap: "break-word",
                }}
                fontSize={{
                  sm: "20px",
                  lg: "30px",
                  xl: "30px",
                  md: "20px",
                  xs: "20px",
                }}
                className={`slide-in ${isVisible ? "visible" : ""}`}
              >
                Hi all. I am
                <Typography
                  color={"white"}
                  style={{
                    color: "orange",
                    fontFamily: "Fira Code",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                  fontSize={{
                    sm: "30px",
                    lg: "80px",
                    xl: "80px",
                    md: "50px",
                    xs: "30px",
                  }}
                  className={`slide-in ${isVisible ? "visible" : ""}`}
                >
                  Rehaman Shaik
                </Typography>
                <Typography
                  color={"white"}
                  style={{
                    color: "skyblue",
                    fontFamily: "Fira Code",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                  fontSize={{
                    sm: "30px",
                    lg: "80px",
                    xl: "80px",
                    md: "50px",
                    xs: "30px",
                  }}
                  className={`slide-in ${isVisible ? "visible" : ""}`}
                >
                  👨🏻‍💻 Full Stack Developer
                </Typography>
                <Typography
                  color={"white"}
                  style={{
                    color: "white",
                    fontFamily: "Fira Code",
                    fontWeight: "200",
                    wordWrap: "break-word",
                  }}
                  marginTop={{
                    sm: "30px",
                    lg: "100px",
                    xl: "100px",
                    md: "50px",
                    xs: "30px",
                  }}
                  fontSize={{
                    sm: "16px",
                    lg: "25px",
                    xl: "25px",
                    md: "22px",
                    xs: "16px",
                  }}
                  className={`slide-top ${isVisible ? "visible" : ""}`}
                >
                  📱 Mobile App Developer
                </Typography>
                <Typography
                  color={"white"}
                  style={{
                    color: "white",
                    fontFamily: "Fira Code",
                    fontWeight: "200",
                    wordWrap: "break-word",
                  }}
                  marginTop={{
                    sm: "10px",
                    lg: "20px",
                    xl: "20px",
                    md: "16px",
                    xs: "10px",
                  }}
                  fontSize={{
                    sm: "16px",
                    lg: "25px",
                    xl: "25px",
                    md: "22px",
                    xs: "16px",
                  }}
                  className={`slide-bottom ${isVisible ? "visible" : ""}`}
                >
                  {"</>"} Web App Developer
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
