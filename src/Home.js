import React from 'react';
import './Home.css';
import Product from './Product';
import ImageSlider from './ImageSlider'
function Home() {
  return (
    <>
        {/* <h1>hello</h1> */}
        <ImageSlider/>
    <div className="home">
      <div className="home_container">
        {/* <img 
            className="home_image"
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61PhyFJspPL._SX3000_.jpg" 
            alt="" 
        /> */}
        <h3 style={{fontStyle: "Arial,sans-serif"}}>Best Seller in Electronics</h3>
        <div className="home_row">
        <Product 
        id="12321341"
        title="AmazonBasics 468 L Frost Free Side-by-Side Automatic Defrost Refrigerator (AB2019RF008, Multi Airflow, Black)"
        price={29.99}
        image="https://m.media-amazon.com/images/I/5160SoMxXnL._SX466_.jpg"
        rating={3}/>
        <Product
         id="49538094"
         title="Kenwood kMixer with K-beater"
         price={499.99}
         image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTolVp1go32HSD5ZOfDoxyMwQLvnt93_bu2cB4S5nFJPrRFUN2N1HUXejP3E0_eJyKLVKDs9TyJAxyrw5T9CFk7XifDBlOtOF52NORezRyXe_Do2rlEP1XC&usqp=CAE"
         rating={4}/>
        
        </div>
        <div className="home_row">
        <Product
         id="4903850"
         title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
         price={299.99}
          image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSlO4PneU85qFpNTF3ZmFWmOidUbsTSyQb2uD1LeLlnnuwjG6ovDsSD2cIu0WdSmoCK4-xUOQiUAxVpm8ojte_mkO32MEUYgpuTikKKBCbEycGrmplK4I8cVA&usqp=CAE"
          rating={5}/>
        <Product 
        id="23445930"
        title="Amazon Echo (4th generation) | Smart speaker with Alexa, Charcoal Fabric"
        price={29.99}
         image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRcX2kofr9Bqqkh1kf1eAqowUy-3g1-PCg5Dje8qArDyQIDuFAoM7L7jUJ5s5ubaIKgDP8Pc495NLE_TWsf9M1zblLa-9U9gh5_9az33V-8bjSQmIW-THswCrEW&usqp=CAE"
         rating={3}/>
        <Product 
        id="3254354345"
        title="Apple 2022 12.9-inch iPad Pro (Wi-Fi + Cellular, 512GB) - Space Grey (6th Generation)"
        price={2999.99}
         image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS1s8cVHACvOxPPnxUIGSCqvEhycBb_1X503uCRu-iSC2zpnHx0Rmay6uCPA17556YSYJcD1qyMK9JnrC7MaJiluIk1zXTElymDI3KJ4ER-DhuXNF4Q1Ew&usqp=CAE"
         rating={4}/>

        </div>
        <div className="home_row">
        <Product
            id="234567"
            title="HP Pavilion AMD Ryzen 7 5800H 15.6 inches(39.6cm) FHD Gaming Laptop"
            price={3999}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51DmOWr3rnL._SX679_.jpg"
            rating={4}
            />
            <Product
            id="234567"
            title="Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD"
            price={6099}
            image="https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
            />
            <Product
            id="23456"
            title="Apple 2022 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space Grey (6th Generation) "
            price={199}
            image="https://m.media-amazon.com/images/I/41WkmC8bOEL._SY445_SX342_QL70_FMwebp_.jpg"
            rating={4}
            />
            
        </div>
        <h3 style={{fontStyle: "Arial,sans-serif"}}>Frequently repurchased in Supplies</h3>
        <div className="home_row">
          <Product
            id="234567"
            title="Careview 3 Ply Disposable Surgical Face Mask Box with FABRIC Earloop and built in Nose Pin, Certified by BFE>99% and PFE > 95%"
            price={3999}
            image="https://m.media-amazon.com/images/I/516jBW2zC4S._UL1280_.jpg"
            rating={4}
            />
            <Product
            id="234567"
            title="QUARANT Melt Blown - SMMS Fabric 3 Ply Disposable Face Mask with Nose Pin and Reusable Travel Pouch (Blue, Pack of 100) for Unisex"
            price={6099}
            image="https://m.media-amazon.com/images/I/41L-0zTZppL._SY445_SX342_QL70_FMwebp_.jpg"
            rating={5}
            />
            <Product
            id="23456"
            title="Boldfit Shoe Bag for Travel & Storage Travel Organizer for Women & Men Travel Accessories Shoe Organizer Shoe Bags Pouches Travel Shoe Cover, Essentials - Pack of 6 Shoe Pouch (Blue, Yellow, Grey)"
            price={99}
            image="https://m.media-amazon.com/images/I/81F4YkbCa0L._SY450_.jpg"
            rating={3}
            />
            
        </div>
        <h3 style={{fontStyle: "Arial,sans-serif"}}>Up to 60% off | Car & bike accessories & more</h3>
        <div className="home_row">
            <Product
            id="234567"
            title="Bosch Aquatak 125 1500-Watt High Pressure Washer"
            price={9898}
            image="https://m.media-amazon.com/images/I/717wYrO+b0L._SY679_.jpg"
            rating={4}
            />
            <Product
            id="234567"
            title="Bergmann Typhoon Heavy Duty Metal Car Tyre Inflator (Blue)"
            price={2178}
            image="https://m.media-amazon.com/images/I/818kmzObgCL._SX355_.jpg"
            rating={5}
            />
            <Product
            id="23456"
            title="BLACK+DECKER BXPW1600E-B5 1600Watt 125 Bar, 420 L/hr Flow Rate Pressure Washer for Car wash and Home use (Red & Black)"
            price={99}
            image="https://m.media-amazon.com/images/I/71t9-9MtwkL._SY450_.jpg"
            rating={3}
            />
            <Product
            id="23456"
            title="Vega Crux Black Helmet-M"
            price={1233}
            image="https://m.media-amazon.com/images/I/61eEetcCb9L._SX355_.jpg"
            rating={3}
            />
            <Product
            id="23456"
            title="Bergmann Typhoon Digital Heavy-Duty Metal Tyre Inflator with Auto Cut-Off & LED Light (BCT-150D) - Wine Red            "
            price={2685}
            image="https://m.media-amazon.com/images/I/819Gt9Act8L._SX355_.jpg"
            rating={3}
            />
           
        </div>
          <h3 style={{fontStyle: "Arial,sans-serif"}}>Inspired by your browsing history</h3>
          <div className="home_row">
            <Product
            id="24567"
            title="amiciAuto Universal Puncture Tool Kit for Tubeless Tyre with Premium Storage Bag for Car, Bike, SUV, & Motorcycle"
            price={649}
            image="https://m.media-amazon.com/images/I/71uvIgKwPTL._SY355_.jpg"
            rating={4}
            />
            <Product
            id="23467"
            title="Bergmann Stunner Car Vacuum Cleaner with Stainless Steel HEPA Filter (Black)"
            price={6099}
            image="https://images-eu.ssl-images-amazon.com/images/I/71RVlMswpgL._AC_UL160_SR160,160_.jpg"
            rating={5}
            />
            <Product
            id="23456"
            title="Bajaj PX 97 Torque New 36L Personal Air Cooler for home with DuraMarine Pump (2-Yr Warranty by Bajaj), TurboFan Technology, Powerful Air Throw & 3-Speed Control, Portable AC, White cooler for room"
            price={239}
            image="https://m.media-amazon.com/images/I/41s7Bh+95WL._SY300_SX300_.jpg"
            rating={3}
            />  
            
        </div>
        
      </div>
    </div>
  </>  
   );
}

export default Home
