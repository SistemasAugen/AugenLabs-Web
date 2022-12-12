import type { NextPage } from "next";
import React, { useEffect, useState } from "react";

const VideoLabOne: NextPage = () => {

  const [windowSize, setWindowSize] = useState({
    height: 0, width: 0
  });

  useEffect(() => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }, [])

  if (windowSize.height) {
    return (
      <div>
        <iframe
          width={windowSize.width}
          height={windowSize.height}
          src="https://www.youtube.com/embed/HPWb_QBZdj8"
          title="YouTube video player"
          allowFullScreen
        >
        </iframe>
      </div>
    )
  }
  return <></>;
}

export default VideoLabOne;
