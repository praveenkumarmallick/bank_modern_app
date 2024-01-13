import React from "react";
import styles from "./style";
import { Navbar, Hero, Stats, Business, CTA, Clients, CardDeal, Footer, Billing, Testimonials } from "./components";



const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden ">

      <div className={`${styles.padding} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  );
};

export default App;
