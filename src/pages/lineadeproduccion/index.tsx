import type { NextPage } from "next";
import React, { useEffect, useState } from "react";

const Lineadeproduccion: NextPage = () => {

  const [windowSize, setWindowSize] = useState({
    height: 0, width: 0
  });

  useEffect(() => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }, [])

  return (
    <div>
      <iframe
        // src="https://docs.google.com/viewerng/viewer?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true"
        src="https://docs.google.com/document/d/1ViV3nC-CJtJME_YCS2JWsFJPI40G8_3J64ZOeEomhT0/edit?usp=sharing"
        width={windowSize.width}
        height={windowSize.height}
      >
        This browser does not support PDFs. Please download the PDF to view it:
      </iframe>
    </div>
  );
}

export default Lineadeproduccion;
