"use client";
import React, { useEffect, useState } from "react";

const Carrousel: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const posts = [process.env.NEXT_PUBLIC_POST1, process.env.NEXT_PUBLIC_POST2, process.env.NEXT_PUBLIC_POST3];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    posts.map((post, i) => (
      post?.includes("reel") ? (
      <iframe
        className="instagram-media instagram-media-rendered"
        id="instagram-embed-0"
        src={posts[i]}
        data-instgrm-payload-id="instagram-media-payload-0"
        scrolling="no"
        style={{
          height: 367,
          background: "white",
          maxWidth: 326,
          width: "calc(100% - 2px)",
          borderRadius: 3,
          border: "1px solid rgb(219, 219, 219)",
          boxShadow: "none",
          display: "block",
          margin: "0px 0px 12px",
          minWidth: 326,
          padding: 0,
        }}
      />
      ) : (
      <iframe
        className="instagram-media instagram-media-rendered "
        id="instagram-embed-0"
        src={posts[i]}
        data-instgrm-payload-id="instagram-media-payload-0"
        scrolling="no"
        style={{
          height: 589,
          background: "white",
          maxWidth: 326,
          width: "calc(100% - 2px)",
          borderRadius: 3,
          border: "1px solid rgb(219, 219, 219)",
          boxShadow: "none",
          display: "block",
          margin: "0px 0px 12px",
          minWidth: 326,
          padding: 0,
        }}
      />
      )
    ))
  ) : (
    <div
      style={{
        height: 589,
        background: "white",
        maxWidth: 326,
        width: "calc(100% - 2px)",
        borderRadius: 3,
        border: "1px solid rgb(219, 219, 219)",
        boxShadow: "none",
        display: "block",
        margin: "0px 0px 12px",
        minWidth: 326,
        padding: 0,
      }}
    ></div>
  );
};

export default Carrousel;
