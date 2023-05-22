export const FormFooter = () => {
  return (
    <>
      <form className="container">
        <h2 className="p-2">Send a Message</h2>
        <div className="row ">
          <div className="col-6">
            <input placeholder="First Name" type="text" />
          </div>
          <div className="col-6">
            <input placeholder="Last Name" type="text" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <input placeholder="Email" type="text" />
          </div>
          <div className="col-6">
            <input placeholder="Phone" type="text" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <textarea placeholder="Your message"></textarea>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};
