import React from "react";
import { Typography, Grid, CardMedia } from "@mui/material";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import BackpackIcon from "@mui/icons-material/Backpack";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function Reading() {
  return (
    <>
      <div style={{ display: "flex", height: "100%" }}>
        <ProSidebarProvider>
          <Sidebar>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <Menu>
              <MenuItem
                icon={<BackpackIcon />}
                component={<Link to="/mycourse" />}
              >
                {" "}
                Current Course
              </MenuItem>
              <MenuItem icon={<LiveTvIcon />} component={<Link to="/live" />}>
                {" "}
                Enrolled Live
              </MenuItem>
              <MenuItem icon={<ExitToAppIcon />} component={<Link to="/" />}>
                {" "}
                Back to Main Page
              </MenuItem>
            </Menu>
          </Sidebar>
        </ProSidebarProvider>
        <Grid container>
          <Grid item xs={6}>
            <Grid container sx={{ p: 2 }}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{ ml: 4, textDecoration: "underline" }}
                >
                  English Reading Lesson
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ ml: 4, mt: 3 }}>
                  Current Period: Lesson 1
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ ml: 4 }}>
                  Teacher: Mr. Adrian
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" sx={{ ml: 4, mt: 10 }}>
                  Announcements:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ ml: 4 }}>
                  Please read the lesson 1 notes before the lesson.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{ mt: 4, mb: 4 }}>
            <CardMedia
              component="img"
              image="./images/readingnote.jpg"
              alt=""
              sx={{ maxWidth: 500 }}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
