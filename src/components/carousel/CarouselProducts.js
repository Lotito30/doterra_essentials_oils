import Card from "components/card/CardShop";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselProducts({ title, description, data }) {
  const settings = {
    dots: true,
    infinite: false,
    // speed: 3000,
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div class="mx-auto max-w-2xl py-10 px-4 md:max-w-7xl lg:px-8">
      <header className="pt-4">
        <h2 className="font-bold text-gray-900 text-4xl">{title}</h2>

        <p className="mt-4 max-w-xl text-gray-700">{description}</p>
      </header>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8 slider-container shadow-card relative">
        <Slider {...settings}>
          {/* CARD */}
          {data &&
            data.map((product) => <Card key={product.id} data={product} />)}
            <Link
              to={"/shop"}
              className="text-md font-semibold text-orange-standard hover:text-orange-600 text-center mt-36"
            >
              See more products<span aria-hidden="true"> &rarr;</span>
            </Link>
        </Slider>
          
      </div>
    </div>
  );
}
