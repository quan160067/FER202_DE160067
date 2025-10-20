import pizzaBanner from '../assets/pizza1.jpg';

export default function Banner() {
  return (
    <div className="text-white text-center bg-dark">
      <img src={pizzaBanner} alt="Pizza" className="w-100" style={{ height: '400px', objectFit: 'cover' }} />
      <div className="p-4 bg-dark bg-opacity-75 position-absolute top-50 start-50 translate-middle rounded">
        <h1 className="display-5 fw-bold">Neapolitan Pizza</h1>
        <p>If you are looking for traditional Italian pizza, this is the best option!</p>
      </div>
    </div>
  );
}
