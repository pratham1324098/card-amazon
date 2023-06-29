import React from "react";
import "./Prime.css";
import Benefit from './Benefit'
function Prime() {
  return (
    <div>
      <div className="prime_container">
        <div className="prime_logo">
          <center>
            <img src="https://m.media-amazon.com/images/G/31/marketing/prime/inline-prime-logo._CB636295712_.png" />
          </center>
          <div className="prime_details_1">
            <img
              src="https://m.media-amazon.com/images/G/31/prime/detail_page/2017/Sep/IN-Prime-Slash-Prime-Offer-Benefits1-1400x680._CB442254152_.jpg"
              alt=""
            />
            <div className="prime_image">
              <img
                src="https://m.media-amazon.com/images/G/31/marketing/prime/detail_page/Prime_Logo._CB485923298_.png"
                alt=""
              />
              
              <h2>FREE 1-day delivery, videos, music & more</h2>
              <button>Login to join Prime</button>
              <h3>
                Prime members enjoy unlimited free 1-day delivery on eligible
                items, video streaming, ad-free music and, exclusive access to
                deals & more.
              </h3>
              <p>
                By signing up for a Prime membership, you agree to the Amazon
                Prime Terms and Conditions.
              </p>
            </div>
          </div>
            <center><h1 class="primeDetailPage-content-benefit">Enjoy these benefits with <b>Prime</b></h1></center>
            <div className="gap"></div>
            <Benefit
            imgUrl="https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_Benefits_Delivery_1344x526._CB653891553_.jpg"
            title="Unlimited FREE fast delivery"
            paragraph="Why pay more for One-Day Delivery every time you need an item quickly? As a Prime member, get unlimited FREE One-Day and Two-Day Delivery on eligible items from India’s largest online store, to over a hundred cities. Prime items that are not eligible for free One-Day or Two-Day Delivery to your location, will always qualify for free Standard Delivery with no minimum purchase value. The fastest, free Prime delivery speed available for an item will be shown on the product page.
        
            Prime members also enjoy discounted Same-Day and Morning Delivery to pin-codes in select cities across India. Get exclusive 2-hour Express Delivery to eligible pin-codes in Delhi, Mumbai, Bangalore & Hyderabad via the Prime Now App."
            />
            <Benefit
            imgUrl="https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_VideoLaunch_1344x526._CB592495725_.jpg"
            title="Prime Video"
            paragraph="With your Prime membership, you have access to the latest and exclusive Bollywood and regional blockbusters such as Kantara, Jugjugg Jeeyo, Ram Setu and Hollywood movies like Batman, Fast & Furious 9. You can also binge watch US TV shows like Young Sheldon, Suits and exclusive access to Prime Original Series Comicstaan, Breathe and Reacher.

            Access Prime Video anywhere: on the go or in the comfort of your living room. Watch on your Android or iOS phone, tablet, laptop, desktop, or smart TV."
            />
            <Benefit
            imgUrl="https://m.media-amazon.com/images/G/31/marketing/prime/pdp/Robin_Benefit2._CB592209584_.jpg"
            title="Prime Music"
            paragraph="With your Prime membership, enjoy ad-free music streaming with unlimited offline downloads* across 75 million songs in multiple languages - English, Hindi, Tamil, Punjabi, Telugu, Bengali and more. Enjoy Playlists and Stations specially curated by Amazon’s music editors across moods, activities, genres, artists and decades.

            Discover a new way to find and play music - voice controlled with Alexa. Simply tap on Alexa icon in your mobile app and ask for music. No typing, no browsing, no searching - Just ask! Listen to music across devices – Android & iOS devices, Desktop app and Web Player, Amazon Fire TV sticks and Amazon Echo and other Alexa enabled devices.
            
            *Subject to devices storage"
            />
            <Benefit
            imgUrl="https://m.media-amazon.com/images/G/31/marketing/prime/pdp/Samus_Benefit_Desktop._CB642411917_.jpg"
            title="Prime Gaming"
            paragraph="Prime members get access to FREE in-game content like power-ups, exclusive collectibles, characters, outfits, skins, themes, in-game currency and more across popular mobile games, refreshed frequently. Login with your Amazon account within supported games to claim in-game content. Enjoy frequent new content drops and launches across top international & Indian mobile games."
            />
            <Benefit
            imgUrl="https://m.media-amazon.com/images/G/31/marketing/prime/pdp/Samus_Benefit_Desktop._CB642411917_.jpg"
            title="Unlimited 5% cashback"
            paragraph="Eligible Prime members earn unlimited 5% cashback on all purchases on Amazon.in using the Amazon Pay ICICI Bank credit card. You can also earn unlimited 2% cashback on payments at 100+ Amazon Pay partner merchants and 1% cashback on all other payments (except fuel purchases). Currently available in 35 cities across India."
            />
            <Benefit
            imgUrl="https://m.media-amazon.com/images/G/31/prime/detail_page/2018/Sep/Slash-Prime-BTF._CB623230677_.png"
            title="Prime Reading"
            paragraph="Read as much as you want from hundreds of eligible eBooks, comics and more. With a catalogue across literature and fiction, quick reads, romance, non-fiction, and eBooks in Indian languages, you will always find something to read.

            You can enjoy Prime Reading on your Kindle E-reader, or install the free Kindle reading apps on mobile, tablet, PC or Mac. You can also try Prime Reading on the 2MB Kindle Lite Android app designed for Indian readers."
            />
            <Benefit
            imgUrl="https://m.media-amazon.com/images/G/31/marketing/prime/detail_page/early-access._CB485972705_.jpg"
            title="Grab the best deals first"
            paragraph="You get access to exclusive deals across categories. Be among the first to decide what's hot and what's not, and get 30-minute early access to top Lightning Deals every day. Choose the Prime Early Access filter when you search, to see the day’s selected deals."
            />
            
        </div>
      </div>
    </div>
  );
}

export default Prime;
