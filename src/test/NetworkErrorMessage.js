import React from "react";

const NetworkErrorMessage = ({ message, dismiss }) => {
  return (
    <div>
      {message}
      <button type="button" onClick={dismiss}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default NetworkErrorMessage;