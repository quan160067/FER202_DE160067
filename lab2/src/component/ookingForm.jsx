export default function BookingForm() {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container text-center">
        <h2>Book Your Table</h2>
        <form className="mt-4">
          <div className="row g-3 mb-3">
            <div className="col-md-4"><input type="text" className="form-control" placeholder="Your Name" /></div>
            <div className="col-md-4"><input type="email" className="form-control" placeholder="Your Email" /></div>
            <div className="col-md-4">
              <select className="form-select">
                <option>Select a Service</option>
                <option>Dine-in</option>
                <option>Delivery</option>
              </select>
            </div>
          </div>
          <textarea className="form-control mb-3" rows="4" placeholder="Please write your comment"></textarea>
          <button className="btn btn-warning">Send Message</button>
        </form>
      </div>
    </div>
  );
}
