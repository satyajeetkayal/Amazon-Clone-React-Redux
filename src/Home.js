import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id="49833467"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
            price={239.0}
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="56823409"
            title="Samsung Galaxy Fit2 Smart Band (1.1 AMOLED Display, 5 ATM Water Resistance, 90+ Workout Support, Sleep Score, 75 Watch Faces, Notification and Quick Replies, Music and Camera Controller), Black"
            image="https://images-na.ssl-images-amazon.com/images/I/61g%2BZzD3hEL._SL1500_.jpg"
            rating={3}
            price={199.99}
          />
          <Product
            id="34660921"
            title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric"
            image="https://images-na.ssl-images-amazon.com/images/I/61b4qFTXRML._AC_SL1000_.jpg"
            rating={5}
            price={99.89}
          />
          <Product
            id="09678366"
            title="New Apple ipad Pro (12.0-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            image="https://images-na.ssl-images-amazon.com/images/I/81oFAZ9N6bL._SL1500_.jpg"
            rating={4}
            price={598.99}
          />
        </div>
        <div className="home_row">
          <Product
            id="76553313"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
            price={1094.98}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
