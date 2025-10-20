import pizza1 from '../assets/pizza1.jpg';
import pizza2 from '../assets/pizza2.jpg';
import pizza3 from '../assets/pizza3.jpg';
import pizza4 from '../assets/pizza4.jpg';

export default function Menu() {
  const items = [
    { name: "Margherita Pizza", price: 24, oldPrice: 40, img: pizza1, tag: "SALE" },
    { name: "Mushroom Pizza", price: 25, img: pizza2 },
    { name: "Hawaiian Pizza", price: 30, img: pizza3, tag: "NEW" },
    { name: "Pesto Pizza", price: 30, oldPrice: 50, img: pizza4, tag: "SALE" }
  ];

  return (
    <div className="bg-dark text-white py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Menu</h2>
        <div className="row g-4">
          {items.map((p, i) => (
            <div key={i} className="col-md-3">
              <div className="card">
                <img src={p.img} className="card-img-top" alt={p.name} />
                {p.tag && <span className="badge bg-warning position-absolute m-2">{p.tag}</span>}
                <div className="card-body text-dark">
                  <h5>{p.name}</h5>
                  {p.oldPrice && <span className="text-decoration-line-through text-secondary">${p.oldPrice}</span>}
                  <p className="fw-bold">${p.price}</p>
                  <button className="btn btn-dark w-100">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
