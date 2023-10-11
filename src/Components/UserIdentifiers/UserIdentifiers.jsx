import React, { useState, useEffect } from "react";
import reg from "../../images/faces/reg.png";
import wide from "../../images/faces/wide.png";
import sad from "../../images/faces/sad.png";
import joy from "../../images/faces/joy.png";
import alien from "../../images/faces/alien.png";
import skeleton from "../../images/faces/skeleton.png";
import cloud from "../../images/faces/cloud.png";
import angry from "../../images/faces/angry.png";
import clown from "../../images/faces/clown.png";
import frog from "../../images/faces/frog.png";

import classes from "./UserIdentifiers.module.css";

const faces = [reg, wide, sad, joy, alien, skeleton, cloud, angry, clown, frog];
const faces2 = [
  "reg",
  "wide",
  "sad",
  "joy",
  "alien",
  "skeleton",
  "cloud",
  "angry",
  "clown",
  "frog",
];
const colours = [
  "white",
  "green",
  "blue",
  "red",
  "yellow",
  "orange",
  "purple",
  "grey",
  "violet",
  "indigo",
  "pink",
  "lavender",
];

function UserIdentifiers({ onChangeData, titleDisabled, initialTitle }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState(titleDisabled ? initialTitle : "");

  // the personalIcon is a rounded square with an associated colour and face.
  // the colour changes the backgroundColor inside the square
  // the face changes the image within the square
  const [faceNum, setFace] = useState(0);
  const [colourNum, setColour] = useState(0);
  const [data, setData] = useState();

  const prevFace = () => {
    if (faceNum > 0) {
      setFace(faceNum - 1);
    } else {
      setFace(faces.length - 1);
    }
  };

  const prevColour = () => {
    if (colourNum > 0) {
      setColour(colourNum - 1);
    } else {
      setColour(colours.length - 1);
    }
  };

  const nextFace = () => {
    if (faceNum < faces.length - 1) {
      setFace(faceNum + 1);
    } else {
      setFace(0);
    }
  };

  const nextColour = () => {
    if (colourNum < colours.length - 1) {
      setColour(colourNum + 1);
    } else {
      setColour(0);
    }
  };

  useEffect(() => {
    // Update the data object whenever any relevant state changes
    setData({
      name,
      icon: faces2[faceNum],
      colour: colours[colourNum],
      title,
    });
  }, [colourNum, faceNum, name, title]);

  useEffect(() => {
    console.log(data);
    onChangeData(data);
  }, [data, onChangeData]);

  return (
    <div>
      UserIdentifiers
      <div>
        <input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          placeholder="Enter a Meetup Title"
          onChange={(e) => setTitle(e.target.value)}
          disabled={titleDisabled}
          value={title}
        />
      </div>
      <div className={classes.iconBox}>
        <div className={classes.selectors}>
          <button onClick={prevFace}>{"<"}</button>
          <button onClick={prevColour}>{"<"}</button>
        </div>
        <div
          className={classes.icon}
          style={{ backgroundColor: colours[colourNum] }}
        >
          <img src={faces[faceNum]} alt="Personal Icon" />
        </div>
        <div className={classes.selectors}>
          <button onClick={nextFace}>{">"}</button>
          <button onClick={nextColour}>{">"}</button>
        </div>
      </div>
    </div>
  );
}

export default UserIdentifiers;
