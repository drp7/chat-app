import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ChatsPage() {
  const [chats, setChats] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("/api/chat");
      setChats(res.data);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div>ChatsPage</div>;
}
