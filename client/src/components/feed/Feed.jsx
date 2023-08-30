import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Feed() {
  const [posts,setPosts]= useState([]);
 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("heeeeeelo");
        const res = await axios.get("https://localhost:8800/api/posts/timeline/64b7b064c2a4733e9066a2a6");
        
        console.log(res);
        console.log("heelo");
      } catch (error) {
        console.error("Axios error:", error);
      }
    };
    fetchPosts();
  }, []);
  
  
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
  );
}
