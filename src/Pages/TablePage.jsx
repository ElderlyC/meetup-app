import React from "react";
import { Link } from "react-router-dom";

function TablePage() {
  const sendRockHandler = () => {
    const rockInput = document.getElementById("rock");
    const rockValue = rockInput.value;

    // Create a data object to send with the request
    const data = {
      rock: rockValue,
    };

    // Make the POST request using the fetch API
    fetch("https://meetup-mannaja-default-rtdb.firebaseio.com/rocks.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Server responds with {name: randomId}
        console.log("Response from server:", data);
      })
      .catch((error) => {
        console.error("Error sending POST request:", error);
      });
  };

  const getRockHandler = () => {
    fetch("https://meetup-mannaja-default-rtdb.firebaseio.com/rocks.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        // document.getElementById("rockInfo").value = Object.values(data).find(
        //   (item) => item.rock === "Geode"
        // ).rock;
        document.getElementById("rockInfo").value = Object.values(data)
          .map((item) => item.rock)
          .join(", ");
      });
  };
  return (
    <div>
      TablePage (3)
      <div>
        <input id="rock" />
        <button onClick={sendRockHandler}>Send rock</button>
      </div>
      <div>
        <button onClick={getRockHandler}>Retrieve Rocks</button>
        <textarea
          id="rockInfo"
          placeholder="rock info goes here"
          rows="4"
        ></textarea>
      </div>
      <button>
        <Link to={"/Meetups-List"}>Go to Meetups List</Link>
      </button>
    </div>
  );
}

export default TablePage;
