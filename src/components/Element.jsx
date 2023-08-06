import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css"

export default function Element( {img, title}) {
  return (
    <div style={{
        display:"flex",
        height:"800px",
        width:"80%",
        flexDirection:"row"
    }}>
        <LazyLoadImage 
        src={img}
        height={"fit-content"}
        width={500}
        effect='blur'
        />
        <span>
            {title}
        </span>

    </div>
  )
}
