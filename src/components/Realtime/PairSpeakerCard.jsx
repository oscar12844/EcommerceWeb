import React from "react";
import { realtimespeaker } from "../../dummydata";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const PairSpeakerCard = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {realtimespeaker.map((val) => (
        <div className="items shadow">
          <h4>{val.name}</h4>
          <h1>
            <img src={val.cover} alt="" />
          </h1>
          <p>{val.desc}</p>
          <Button variant="outlined" onClick={handleClickOpen}>
            START PAIR!
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Join the Zoom Meeting to talk with the Speaker!"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {"Zoom ID: 7752 068 976"}
              </DialogContentText>
              <DialogContentText id="alert-dialog-description">
                {"Zoom Password: R7z1X9QyjK"}
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </>
  );
};

export default PairSpeakerCard;
