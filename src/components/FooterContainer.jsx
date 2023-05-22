import React from "react";
import { ContactComponent } from "./ContactComponent";
import { InfoFooter } from "./InfoFooter";
import { FormFooter } from "./FormFooter";

export const FooterContainer = () => {
  return (
    <>
      <div className="container-fluid container-footer">
        <div className="row row-2">
          <div className="col-6">
            <InfoFooter />
          </div>
          <div className="col-6">
            <FormFooter />
          </div>
        </div>
      </div>
      <div className="row-4">
        <ContactComponent />
      </div>
    </>
  );
};
