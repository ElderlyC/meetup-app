import React, { useEffect, useState } from "react";
import classes from "./UserInvite.module.css";

const UserInvite = ({ title, saveLink, eventURL }) => {
  const [link, setLink] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);

  const input = document.getElementById("link");
  const handleCopy = () => {
    if (title) {
      const fixedlink = eventURL
        ? eventURL.replaceAll(" ", "%20")
        : link.replaceAll(" ", "%20");
      navigator.clipboard.writeText(
        "https://elderlyc.github.io/meetup-app/#/" + fixedlink
      );
      input.placeholder = "Copied to Clipboard!";
    }
  };

  const handleMouseHover = () => {
    input.value = eventURL || link;
  };

  const handleMouseLeave = () => {
    input.value = "";
    input.placeholder = "Hover to reveal link";
  };

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 10000));
  }, []);

  useEffect(() => {
    const newLink = title + randomNumber || randomNumber;
    setLink(newLink);
    saveLink(newLink);
  }, [title, randomNumber, saveLink]);

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
