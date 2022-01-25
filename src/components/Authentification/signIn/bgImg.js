import React from "react";

function BgImg(){

    return (
        <svg
          width="55vw"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{
              position:'absolute',
              top:'-2%',
              left:'22%',
              zIndex:-1
          }}
        >
          <path
            fill="#0F62FE" d="M47.5,-50C60.9,-34.1,70.6,-17,73.4,2.8C76.2,22.7,72.1,45.3,58.7,58.4C45.3,71.4,22.7,74.9,3.1,71.8C-16.5,68.7,-33,59.1,-49,46.1C-65,33,-80.5,16.5,-82.7,-2.2C-84.9,-20.9,-73.7,-41.7,-57.7,-57.7C-41.7,-73.6,-20.9,-84.6,-1.9,-82.7C17,-80.8,34.1,-66,47.5,-50Z" transform="translate(100 100)"
          />
        </svg>
    )
  
}

export default BgImg;