import Carousel from "react-bootstrap/Carousel";
import Badge from "react-bootstrap/Badge";

function HomeCarousel() {
  const movies = [
    {
      title: "Inception",
      genre: "Sci-Fi",
      img: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1500_.jpg",
      caption: "A mind-bending thriller by Christopher Nolan.",
    },
    {
      title: "The Batman",
      genre: "Action",
      img: "https://m.media-amazon.com/images/I/71m5beyKHzL._AC_SL1500_.jpg",
      caption: "The legend of the dark knight returns.",
    },
    {
      title: "La La Land",
      genre: "Romance",
      img: "https://m.media-amazon.com/images/I/81aA7hEEykL._AC_SL1500_.jpg",
      caption: "A beautiful story of dreams and love in Hollywood.",
    },
  ];

  return (
    <Carousel fade interval={3000}>
      {movies.map((movie, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={movie.img}
            alt={movie.title}
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>
              {movie.title} <Badge bg="info">{movie.genre}</Badge>
            </h3>
            <p>{movie.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomeCarousel;
