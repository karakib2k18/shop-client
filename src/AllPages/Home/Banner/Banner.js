import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
// import Container from "@mui/material/Container";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  // // {
  // //   imgPath: "http://opencart.templatemela.com/OPC07/OPC070159/image/cache/catalog/mainbanner3-1920x600.jpg",
  // // },
  // {
  //   imgPath: "https://i.ibb.co/BVZdGsX/banner1.jpg",
  // },
  // // {
  // //   imgPath: "http://opencart.templatemela.com/OPC07/OPC070159/image/cache/catalog/mainbanner1-1920x600.jpg",
  // // },
  // {
  //   imgPath: "https://i.ibb.co/0JTw758/banner3.jpg",
  // },
  // {
  //   imgPath: "https://i.ibb.co/f4CPqYM/banner-2.jpg",
  // },
  // {
  //   imgPath: "https://www.anjalijewellers.in/assets/images/bridal.jpg",
  // },
  {
    imgPath: "https://www.lialijewellery.com/media/wysiwyg/Web_banner_1920x760_JAN.jpg",
  },
  // {
  //   // imgPath: "https://www.lialijewellery.com/media/wysiwyg/Valentine_Web_banner_1920x760_.jpg",
  // },
  {
    imgPath: "https://www.lialijewellery.com/media/wysiwyg/DSF_Web_banner_1920x760_-2.jpg",
  },
  {
    imgPath: "https://www.lialijewellery.com/media/wysiwyg/DSF_Web_banner_1920x760_-2.jpg",
  },
  {
    imgPath: "https://www.lialijewellery.com/media/wysiwyg/Engagement_Ring_banner_O.jpg",
  },
  {
    imgPath: "https://www.lialijewellery.com/media/catalog/category/Diamond_Engagement_Ring.jpg",
  },

];

function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {

    setActiveStep(step);
    
  };

  return (
    <Box sx={{ border: 0 }}>
      <Box
        sx={{
          boxShadow: 3,
          bgcolor: "background.paper",
          // m: 1,
          // p: 1,
          
        }}
      >
        {" "}
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.imgPath}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    // height: 500,
                    display: "block",
                    // maxWidth: 400,
                    overflow: "hidden",
                    width: "100%",
                    
                  }}
                  src={step.imgPath}
                
                />
              ) : null}
            </div>
          ))}
        
        </AutoPlaySwipeableViews>
      </Box>
    </Box>
  );
}

export default Banner;
