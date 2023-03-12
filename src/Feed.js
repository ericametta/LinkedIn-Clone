import { serverTimestamp } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOptions from "./InputOptions";
import Post from "./Post";
import { db } from "./firebase";
import { addDoc, orderBy, query, collection, onSnapshot } from "firebase/firestore"; 

const Feed = () => {
  const [input, setInput] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postRef = collection(db, "posts")
    const q = query(postRef , orderBy("timestamp", "desc"))


    onSnapshot(q, (snapshot) => {
        setPosts(
            snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
            }))
        )
    }
  )
  }, []);
  
const sendPost = async (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
        name: "Erica Metta",
        description: "this is a test",
        message: input,
        photoURL: "",
        timestamp: serverTimestamp(),
      });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed-input-container">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed-input-options">
          <InputOptions title="Photo" Icon={ImageIcon} color="#378FE9" />
          <InputOptions
            title="Video"
            Icon={SubscriptionsIcon}
            color="#5F9B41"
          />
          <InputOptions title="Event" Icon={EventNoteIcon} color="#D39E5A" />
          <InputOptions
            title="Write Article"
            Icon={CalendarViewDayIcon}
            color="#E16744"
          />
        </div>
      </div>

      {/* Posts */}
      {posts.map(({ id, data: { name, description, message, photoURL } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoURL={photoURL}
        />
      ))}

      <Post
        name="Erica Metta"
        description="Software Engineer @ Google"
        message="I'm such a genius"
      />
      <Post
        name="Zoey Ackermann"
        description="Creative Director @ Fenty Corp"
        message="Goodmorning everyone! Today is a beautiful day! What do you think?"
        photoURL={"icons/day.jpg"}
      />
    </div>
  );
};

export default Feed;
