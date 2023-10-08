import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const TestCounter = () => {
  const [number, setNumber] = useState(0);
  const [storedNumber, setStoredNumber] = useState(0);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyALogs6dO87zJEjLihG7WIYyMks-1Jv-DA",
      authDomain: "meetup-mannaja.firebaseapp.com",
      databaseURL: "https://meetup-mannaja-default-rtdb.firebaseio.com",
      projectId: "meetup-mannaja",
      storageBucket: "meetup-mannaja.appspot.com",
      messagingSenderId: "693531976064",
      appId: "1:693531976064:web:39b7e22af956890b9f6165",
    };

    firebase.initializeApp(firebaseConfig);
    // Create a reference to the Firebase Realtime Database node
    const counterRef = firebase.database().ref("counter");

    // Listen for real-time updates to the counter value
    counterRef.on("value", (snapshot) => {
      // Update the local state with the new counter value from Firebase
      const counterValue = snapshot.val();
      setStoredNumber(counterValue);
    });

    // Clean up the listener when the component unmounts
    return () => {
      counterRef.off("value");
    };
  }, []);

  useEffect(() => {
    fetch("https://meetup-mannaja-default-rtdb.firebaseio.com/counter.json", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(number),
    })
      .then((response) => response.json())
      .then((data) => {
        // Server responds with {name: randomId}
        console.log("Response from server:", data);
      })
      .catch((error) => {
        console.error("Error sending POST request:", error);
      });
  }, [number]);

  const increaseCounter = () => {
    // Increment the counter value in Firebase
    setNumber((p) => p + 1);
  };

  const decreaseCounter = () => {
    // Decrement the counter value in Firebase
    setNumber((p) => p - 1);
  };

  return (
    <div>
      <p>Test Counter</p>
      <button onClick={decreaseCounter}>-</button>
      <span>{number}</span>
      <button onClick={increaseCounter}>+</button>
      <p>
        Realtime Count: <span>{storedNumber}</span>
      </p>
    </div>
  );
};

export default TestCounter;
