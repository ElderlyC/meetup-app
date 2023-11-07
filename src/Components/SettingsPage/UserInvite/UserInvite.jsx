import React, { useEffect, useState } from "react";
import classes from "./UserInvite.module.css";

const UserInvite = ({ title, saveLink }) => {
  const [link, setLink] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);

  const input = document.getElementById("link");

  const handleCopy = () => {
    const fixedlink = link.replaceAll(" ", "%20");
    navigator.clipboard.writeText(
      "https://elderlyc.github.io/meetup-app/#/" + fixedlink
    );
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
    const newLink = title + randomNumber || randomNumber;
    setLink(newLink);
    saveLink(newLink);
  }, [title, randomNumber, saveLink]);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 10000));
  }, []);

  return (
    <div>
      <p className={classes.label}>Invite Your Friends!</p>
      <div>
        <div className={classes.inputContainer}>
          <input
            className={classes.link}
            id="link"
            readOnly={true}
            placeholder="Hover to reveal link"
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <button onClick={handleCopy} className={classes.copy}>
          Copy
        </button>
      </div>
    </div>
  );
};

export default UserInvite;
