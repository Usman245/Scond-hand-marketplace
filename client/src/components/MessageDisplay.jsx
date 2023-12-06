import React, { useState, useEffect } from "react";

const MessageDisplay = ({ message, setMessage }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        setMessage(""); // Clear the message after hiding it
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [message]);

  return visible ? (
    <div className="my-1 mx-2 text-xl font-semibold">{message}</div>
  ) : null;
};

export default MessageDisplay;
