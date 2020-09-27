import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {



  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1132312"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4}
          />

          <Product
            id="1213342"
            title="Animal Crossing: New Horizons - Nintendo Switch"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/710JXdscVsL._SY679_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3384034"
            title="Disney Pixar Toy Story Space Aliens Figures"
            price={12.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71j7DsCoJZL._AC_SL1500_.jpg"
            rating={5}
          />

          <Product
            id="58399384"
            title="
          Echo Dot (3rd Gen) - Smart speaker with Alexa"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            id="34329847"
            title="Hamilton (Original Broadway Cast Recording) (Explicit) (2CD)"
            price={18.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91mFYJU6lAL._SX522_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="2381984"
            title="TP-Link AC1750 Smart WiFi Router"
            price={79.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
