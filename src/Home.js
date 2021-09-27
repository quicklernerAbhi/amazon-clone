import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div>
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_SADLPDesktop_1440x675_FINAL_en-CA_FT_PVD4020_MLP_Hunters_RUSH.jpg"
          alt="poster"
        ></img>

        <div className="home__row">
          <Product
            // props are past to the product
            id="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses [By ER]-[Paperback]"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            // props are past to the product
            id="2"
            title="Soundbar, BESTISAN 80 Watts TV Sound Bar Home Theater Speaker with Dual Connection Way, Bluetooth 5.0, Movie/Music/Dialogue Audio Mode, Enhanced Bass Technology, Bass Adjustable, Wall Mountable"
            price={59.99}
            image="https://m.media-amazon.com/images/I/71-S-dtu42L._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />

          {/* product */}
          {/* product */}
        </div>
        <div className="home__row">
          <Product
            // props are past to the product
            id="3"
            title="Hamilton Beach Electric Indoor Searing Grill with Viewing Window and Removable Easy-to-Clean Nonstick Plate, 6-Serving, Extra-Large Drip Tray, Stainless Steel (25361)
"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81YSZkz4wzL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            // props are past to the product
            id="4"
            title="Gretess Espresso Coffee Machine, Capsule Coffee Maker, Espresso, Cappuccino and Latte Pod machine, Compatible with dolce gusto Capsule, ltalian 15 Bar High Pressure Pump,34 Oz Water Tank, 3 Level Cups Settings, Perfect for Home, Office, Kitchen, OPT-XR"
            price={29.99}
            image="https://m.media-amazon.com/images/I/418TARf-5sL._AC_SR160,160_.jpg"
            rating={5}
          />
          <Product
            // props are past to the product
            id="5"
            title="
Indoor Grill Electric Grill Griddle CUSIMAX Smokeless Grill, Portable Korean BBQ Grill with Turbo Smoke Extractor Technology, Non-stick Removable Plates,..."
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/716R-9ohdJL._AC_SL1100_.jpg"
            rating={5}
          />

          {/* product */}
          {/* product */}
          {/* product */}
        </div>
        <div className="home__row">
          {/* product */}
          <Product
            // props are past to the product
            id="6"
            title="Soundbar, BESTISAN 80 Watts TV Sound Bar Home Theater Speaker with Dual Connection Way, Bluetooth 5.0, Movie/Music/Dialogue Audio Mode, Enhanced Bass Technology, Bass Adjustable, Wall Mountable"
            price={60.99}
            image="https://m.media-amazon.com/images/I/61YvcO02YBL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
