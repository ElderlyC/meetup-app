import React from "react";

const UserInvite = () => {
  return (
    <div>
      UserInvite
      <p>Invite Your Friends!</p>
      <div>
        <input readOnly={true} placeholder="Hover to reveal link" />
        <button>Copy</button>
      </div>
    </div>
  );
};

export default UserInvite;
