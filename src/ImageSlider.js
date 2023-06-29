import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";
const slidesImages = [
  {
    url: "https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg",
    
    
  },
  {
    url: "https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg",
  },
  {
    url: "https://m.media-amazon.com/images/I/71YEY+JRlKL._SX3000_.jpg",
  },
  {
    url:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/Vernac/2021/Gw-Hero/Mobile_tall_Hero_revision_3000x1200._CB604857279_.jpg",
      
  },
  {
    url: "https://m.media-amazon.com/images/I/71S6shCB7DL._SX3000_.jpg",
    
  },
  {
    url:
      "https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/April_BVD/3000x1200_new1._CB591659208_.jpg",
      
  },
  {
    url:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/ATF/revised/new/Haircare-Herofader-PC._CB594539534_.jpg",
  },
];
const divStyle = {
  display:"flex",
  alignItems: "center",
  justifyContent: "center",
  height:"400px",
  backgroundSize:"cover",
  zIndex: -1,
  maskImage: "linearGradient(toRottom,rgb(0,0,0,1),rgba(0,0,0,0))"
}
function ImageSlider() {
  return (
    <div className="slide-container">
      <Fade>
        {slidesImages.map((image,index) =>(
          <div key={index}>
            <div style={{...divStyle,backgroundImage:`url(${image.url})`}}>

            </div>
          </div>
        ))}
      </Fade>

    </div>
  )
}

export default ImageSlider;
// import React from 'react'
// import './ImageSlider.css'

// function ImageSlider() {
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   )
// }

// export default ImageSlider
