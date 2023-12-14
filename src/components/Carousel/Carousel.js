import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: theme.spacing(4),
  },
  carousel: {
    width: "80%",
    position: "relative",
    overflow: "hidden",
    maxWidth: 600,
  },
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.5s ease",
  },
  media: {
    height: 300,
    width: "100%",
  },
  navigation: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: "50%",
    cursor: "pointer",
  },
  prevButton: {
    left: 0,
  },
  nextButton: {
    right: 0,
  },
}));

const Carousel = ({ items }) => {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <div className={classes.root}>
      <div className={classes.carousel}>
        {items.map((item, index) => (
          <Card
            key={index}
            className={classes.card}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <CardMedia
              className={classes.media}
              image={item.imageUrl}
              title={item.title}
            />
            <CardContent>
              <Typography variant="h6" align="center">
                {item.title}
              </Typography>
              <Typography variant="body2" align="center">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
        <IconButton
          className={`${classes.navigation} ${classes.prevButton}`}
          onClick={prevSlide}
        >
          <NavigateBefore />
        </IconButton>
        <IconButton
          className={`${classes.navigation} ${classes.nextButton}`}
          onClick={nextSlide}
        >
          <NavigateNext />
        </IconButton>
      </div>
    </div>
  );
};

export default Carousel;
