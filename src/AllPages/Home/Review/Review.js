import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { CircularProgress, Rating} from "@mui/material";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Review() {
  const [reviewList, setReviewList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://tranquil-anchorage-09740.herokuapp.com/review")
      .then((response) => response.json())
      .then((json) => {
        setReviewList(json);
        setIsLoading(false);
      });
  }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = reviewList.length;

  const handleStepChange = (review) => {
    setActiveStep(review);
  };
  return (
    <Box style={{ backgroundColor: "#eaeef2"}}>
      <Typography variant="h4" noWrap component="div" sx={{ py: 2, p: 1 }}>
        Client Testimonials
      </Typography>
      <Typography variant="h5" noWrap component="div" sx={{ pb: 2, p: 1 }}>
        What they say
      </Typography>
      {isLoading && <CircularProgress />}
      <Box sx={{ maxWidth: 750, flexGrow: 1, mx: "auto" }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {reviewList.map((review, index) => (
            <div key={review?._id}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 130,
                    display: "block",
                    maxWidth: 130,
                    overflow: "hidden",
                    width: "100%",
                    mx: "auto" ,
                    borderRadius: '50%' 
                  }}
                  src={review.image}
                  alt={review.label}
                ></Box>
              ) : null}
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ pb: 2, m: 1 }}
              >
              </Typography>
              <Rating name="read-only" value={review?.ratings} readOnly />
              <Typography
                variant="h6"
                component="div"
                sx={{ py: 1, m: 1 }}
              >
                {review?.description}
              </Typography>
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{display: "block",width: "100%", mx: "auto" }}
        />
      </Box>
    </Box>
  );
}

export default Review;
