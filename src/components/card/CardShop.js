import GetSrcPhoto from "components/photo/GetSrcPhoto";
import { Link } from "react-router-dom";

function Card({ data }) {
  const srcPhoto = GetSrcPhoto(data.photo)
  return (
    <div className="p-3 text-center">
      <Link to={`/product/${data.id}`}>
        <img
          alt={data.name}
          src={srcPhoto}
          className="w-1/2 object-center object-fill md:w-full mx-auto"
        />
        <h5 className="text-2xl font-semibold tracking-tightmt-2 underline text-orange-standard">
          {data.name}
        </h5>
        <div className="mt-5">
          <span className=" text-xl font-semibold text-gray-900 ">
            {data.price} AED
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Card;
