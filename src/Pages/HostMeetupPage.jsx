import React from "react";
import { Link } from "react-router-dom";
import Initiator from "../Components/Initiator/Initiator";

function HostMeetupPage() {
  return (
    <div>
      HostMeetupPage (1)
      <Initiator />
      <button>
        <Link to={"/Meetup-Settings"}>Go to Meetup Settings</Link>
      </button>
    </div>
  );
}

export default HostMeetupPage;
