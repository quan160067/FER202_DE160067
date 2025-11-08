import HomeCarousel from "../component/Carousel/HomeCarousel";
import MovieCard from "../component/Movie/MovieCard";


export default function HomePage() {
  return (
    <div>
     <HomeCarousel />
      <div className="mt-4 text-center">
        <h4>Featured Movies Collections</h4>
        <p className="text-secondary">
          Thêm thông tin về các bộ sưu tập phim nổi bật ở đây.
        </p>
      </div>
      <MovieCard />
    </div>
  );
}
