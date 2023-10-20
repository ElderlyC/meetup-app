import React from "react";
import faces from "../../images/faces"; // Assuming you have an array of face image filenames

function FaceImage({ faceNum }) {
  return (
    <img
      src={require(`../../images/faces/${faces[faceNum]}.png`).default}
      alt="Personal Icon"
    />
  );
}

export default FaceImage;
