import React, { useEffect, useState } from "react";
import classes from "./UserInvite.module.css";

const UserInvite = ({ title }) => {
  const [link, setLink] = useState("");
  const [randomNumber, setRandomNumber] = useState("");

  const input = document.getElementById("link");

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    input.placeholder = "Copied to Clipboard!";
  };

  const handleMouseHover = () => {
    input.value = link; // Set the placeholder to the current value
  };

  const handleMouseLeave = () => {
    input.value = "";
    input.placeholder = "Hover to reveal link"; // Set the placeholder to the current value
  };

  useEffect(() => {
    setLink(() => {
      return title + randomNumber || randomNumber;
    });
  }, [title, randomNumber]);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 10000));
  }, []);

  return (
    <div>
      UserInvite
      <p>Invite Your Friends!</p>
      <div>
        <div className={classes.inputContainer}>
          <input
            className={classes.link}
            id="link"
            readOnly={true}
            placeholder="Hover to reveal link"
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseLeave}
            required
          />
        </div>

        <button onClick={handleCopy}>Copy</button>
      </div>
    </div>
  );
};

export default UserInvite;
