import React from "react";
import { ContactComponent } from "./ContactComponent";

export const FooterContainer = () => {
  return (
    <>
      <div className="container-fluid container-footer">
        <div className="row row-2">
          <div className="col-7"></div>
          <div className="col-5">
            <form class="form">
              <div class="title">Contact us</div>
              <input type="text" placeholder="Your email" class="input" />
              <textarea placeholder="Your message"></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="row-4">
        <ContactComponent />
      </div>
    </>
  );
};
