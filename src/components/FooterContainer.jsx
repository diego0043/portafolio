import React from "react";

export const FooterContainer = () => {
  return (
    <>
      <div className="container container-footer">
        <div className="row row-1"></div>
        <div className="row row-2">
          <div className="col-6"></div>
          <div className="col-6">
            <form class="form">
              <div class="title">Contact us</div>
              <input type="text" placeholder="Your email" class="input" />
              <textarea placeholder="Your message"></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
        <div className="row row-3"></div>
      </div>
      <div className="row-4">contact</div>
    </>
  );
};
