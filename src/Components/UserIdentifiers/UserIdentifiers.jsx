import React, { useState } from "react";
import face1 from "../../images/faces/reg.png";
import face2 from "../../images/faces/wide.png";
import face3 from "../../images/faces/sad.png";
import face4 from "../../images/faces/joy.png";
import face5 from "../../images/faces/alien.png";
import face6 from "../../images/faces/skeleton.png";
import face7 from "../../images/faces/cloud.png";
import face8 from "../../images/faces/angry.png";
import face9 from "../../images/faces/clown.png";
import face10 from "../../images/faces/frog.png";

import classes from "./UserIdentifiers.module.css";

const faces = [
  face1,
  face2,
  face3,
  face4,
  face5,
  face6,
  face7,
  face8,
  face9,
  face10,
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

function UserIdentifiers() {
  const [name, setName] = useState();
  const [title, setTitle] = useState();

  // the personalIcon is a rounded square with an associated colour and face.
  // the colour changes the backgroundColor inside the square
  // the face changes the image within the square
  const [faceNum, setFace] = useState(0);
  const [colourNum, setColour] = useState(0);

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

  return (
    <div>
      UserIdentifiers
      <div>
        <input placeholder="Enter Your Name" />
        <input placeholder="Enter a Meetup Title" />
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
