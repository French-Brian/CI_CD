import React from "react";
import Footer from "../components/footer";
import CheckHeader from"../components/checkHeader";

export default function Services(){
    return (
    <div 
    className=""
    style={{paddingTop: "100px", backgroundColor: "white"}}>
      <CheckHeader />
      
        <div className="services-box">
            <div className="services-text">Services</div>
        <div className="services-options">
            <label>
            <input type="radio" name="services" value="haircut" />
            Haircut
          </label>
          <label>
            <input type="radio" name="services" value="shave" />
            Shave
          </label>
          <label>
            <input type="radio" name="services" value="color" />
            Hair Color
          </label>
          <label>
            <input type="radio" name="services" value="style" />
            Styling
          </label>
        </div>

        <button className="submit-button">Submit</button>
      </div>

      <Footer />
    </div>
    );
}
