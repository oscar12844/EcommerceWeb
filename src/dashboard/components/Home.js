import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import image1 from "../assets/reading.png";
import image2 from "../assets/writing.jpg";
import image3 from "../assets/speaking.jpg";
import image4 from "../assets/listening.png";
import { useNavigate } from "react-router-dom";

export default function Home(subject) {
  const navigate = useNavigate();
  const currentCourse = [
    "English Reading Course",
    "English Writing Course",
    "English Speaking Course",
    "English Listening Course",
  ];
  const links = ["/reading", "/writing", "/speaking", "/listening"];
  const teacher = [
    "Adrian Molises",
    "Arthur MaGregor",
    "Anna Hanzen",
    "Brian Wooden",
  ];
  const image = [image1, image2, image3, image4];
  const index = [0, 1, 2, 3];

  const handleClick = (index) => {
    navigate(links[index]);
  };

  return (
    <>
      <Box sx={{ width: "auto", p: 2 }}>
        <Grid>&nbsp;</Grid>
        <Grid container>
          <Typography variant="h4">Your Current Course</Typography>
        </Grid>
      </Box>
      <Box component="span" sx={{ display: "block", maxHeight: 400 }}>
        &nbsp;{" "}
      </Box>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2 }}>
        {currentCourse.map((course, index) => {
          return (
            <>
              <Card sx={{ width: "90%" }}>
                <CardActionArea
                  onClick={() => {
                    handleClick(index);
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={image[index]}
                    alt=""
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      key={index}
                    >
                      {course}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {teacher[index]}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </>
          );
        }, index)}
      </Grid>
    </>
  );
}
