export default function Exercise5() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Exercise 5: Bootstrap 5</h2>

      {/* 1️⃣ Test Grid */}
      <section className="mb-5">
        <div className="p-3 mb-3 bg-light text-center fs-3">
          Let's test the grid!
        </div>
        <div className="row text-center">
          <div className="col border p-3">First col</div>
          <div className="col border p-3">Second col</div>
        </div>
        <div className="row text-center">
          <div className="col border p-3">col</div>
          <div className="col border p-3">col</div>
          <div className="col border p-3">col</div>
        </div>
        <div className="row text-center">
          <div className="col border p-3">col</div>
          <div className="col border p-3">col</div>
          <div className="col border p-3">col</div>
        </div>
        <div className="p-3 bg-secondary text-white text-center mt-3">
          Created by ABC!
        </div>
      </section>

      {/* 2️⃣ My First Bootstrap Page */}
      <section className="mb-5 text-center">
        <div className="p-3 bg-light fs-3 fw-bold">
          My First Bootstrap Page
        </div>
        <div className="d-flex justify-content-center gap-4 mt-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/62/HTML5_logo_and_wordmark.svg"
            width="100"
            alt="HTML"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            width="100"
            alt="CSS"
          />
          <img
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            width="100"
            alt="Bootstrap"
          />
        </div>
      </section>

      {/* 3️⃣ Grid + Nav */}
      <section className="mb-5">
        <div className="p-3 mb-3 bg-light text-center fs-3">
          Let's test the grid!
        </div>
        <ul className="nav justify-content-center mb-3">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <div className="row text-center">
          <div className="col border p-3">First col</div>
          <div className="col border p-3">Second col</div>
        </div>
        <div className="row text-center">
          <div className="col border p-3">col</div>
          <div className="col border p-3">col</div>
          <div className="col border p-3">col</div>
        </div>
        <div className="p-3 bg-secondary text-white text-center mt-3">
          Created by ABC!
        </div>
      </section>

      {/* 4️⃣ FPT University Website */}
      <section className="text-center">
        <div className="text-center p-4" style={{ backgroundColor: "#e98b2a" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/39/FPT_Education_logo.svg"
            width="250"
            alt="FPT University"
          />
          <nav className="mt-2">
            <a href="#" className="text-white mx-2 text-decoration-none">
              Home
            </a>
            <a href="#" className="text-white mx-2 text-decoration-none">
              About
            </a>
            <a href="#" className="text-white mx-2 text-decoration-none">
              Contact
            </a>
          </nav>
        </div>
        <div className="container text-center my-5">
          <h3>About</h3>
          <p>This is the about section of the website.</p>
          <h3>Contact</h3>
          <p>
            For any inquiries, please contact us at example@example.com.
          </p>
        </div>
        <footer
          className="text-center py-3 text-white"
          style={{ backgroundColor: "#f5c56a" }}
        >
          © 2023 Website. All rights reserved.
        </footer>
      </section>
    </div>
  );
}
