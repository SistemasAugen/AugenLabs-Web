import type { NextPage } from "next";
import React, { useEffect, useState } from "react";

const Labone: NextPage = () => {

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
      <iframe
        width={windowSize.width}
        height={windowSize.height}
        src="https://direccionmkt2.wixsite.com/labone"
        title="labone">
      </iframe>
    )
  }
  return <></>;
}

export default Labone