import { useState, useEffect } from "react";
import io from "socket.io-client";
import { useMyContext } from "../ContexProvider/SearchContext";

const Chat = () => {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { adId, senderEmail, recieverEmail } = useMyContext();

  const user = senderEmail; // Replace with the actual user ID or username
  const adOwner = recieverEmail; // Replace with the actual ad owner ID or username

  useEffect(() => {
    const socket = io("http://localhost:4000");

    // Fetch existing rooms on component mount
    socket.emit("fetchRooms", { user });

    socket.on("rooms", (roomList) => {
      setRooms(roomList);
    });

    return () => {
      socket.disconnect();
    };
  }, [user]);

  const handleRoomClick = (room) => {
    setCurrentRoom(room);
    // Fetch existing messages for the selected room
    io("http://localhost:5000").emit("fetchMessages", { room });
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message = {
      sender: user,
      receiver: adOwner,
      text: newMessage,
      timestamp: new Date().toISOString(),
    };

    // If a room is selected, send the message to that room
    if (currentRoom) {
      io("http://localhost:5000").emit("sendMessage", {
        room: currentRoom,
        message,
      });
    } else {
      // If no room is selected, create a new room and send the message
      io("http://localhost:5000").emit("createRoom", {
        user,
        receiver: adOwner,
        message,
      });
    }

    setNewMessage("");
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Chat Rooms</h2>
        <div className="overflow-y-auto">
          {rooms.map((room) => (
            <div
              key={room}
              className={`p-2 cursor-pointer ${
                room === currentRoom ? "bg-gray-300" : ""
              }`}
              onClick={() => handleRoomClick(room)}
            >
              {room}
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/3 bg-white p-4">
        <div className="h-5/6 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 ${
                message.sender === user
                  ? "text-right text-blue-600"
                  : "text-left"
              }`}
            >
              <span className="font-bold">{message.sender}:</span>{" "}
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex mt-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 border p-2"
            placeholder="Type a message..."
          />
          <button
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

/*import { useEffect } from "react";
import { useState } from "react";
import io from "socket.io-client";
import { useMyContext } from "../ContexProvider/SearchContext";

// Replace with your server URL
const socket = io("http://localhost:4000");

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const { adId, senderEmail, recieverEmail } = useMyContext();
  console.log(adId, senderEmail, recieverEmail);

  //Use effect hook to join the chat room when the component mounts
  const room = `user_${recieverEmail}_${senderEmail}${adId}`;

  // Function to handle receiving a new message
  const handleNewMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };
  useEffect(() => {
    const fetchMessages = async () => {
      // Make a request to your server to fetch existing messages for this room
      try {
        const response = await fetch(`/messages/${room}`);
        const existingMessages = await response.json();
        setMessages(existingMessages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [room]);

  useEffect(() => {
    // Join the chat room when the component mounts
    socket.emit("joinRoom", room);

    // Listen for incoming messages
    socket.on("message", handleNewMessage);

    // Clean up socket subscriptions when the component unmounts
    return () => {
      socket.off("message", handleNewMessage);
      socket.emit("leaveRoom", room);
    };
  }, [room]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // Define a function that handles the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a message object with the sender, receiver, ad, and text properties
    const message = {
      sender: senderEmail,
      receiver: recieverEmail,
      room: room,
      ad: adId,
      text: value,
    };
    // Emit a sendMessage event with the message object
    socket.emit("sendMessage", message);
    // Clear the input value
    setValue("");
  };

  // Define a function that handles the leave chat button click
  const handleLeave = () => {
    // Emit a leaveRoom event with the ad id
    socket.emit("leaveRoom", adId);
    // Redirect to the home page
    window.location.href = "/";
  };

  return (
    <div className="chat">
      <h1>Chat about {adId}</h1>
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === senderEmail ? "sent" : "received"
            }`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Type a message"
        />
        <button type="submit">Send</button>
      </form>
      <button onClick={handleLeave}>Leave Chat</button>

      <div className="caht flex w-[95%] h-[80vh] mx-10 overflow-x-hidden mobile:mx-1 mobile:border-none rounded-md border-2 border-gray-600">
        <div className="left w-[30%] mobile:hidden border-r-2 border-r-gray-400"></div>
        <div className="right w-[70%] mobile:w-full"></div>
      </div>
    </div>
  );
};

export default ChatComponent;*/
