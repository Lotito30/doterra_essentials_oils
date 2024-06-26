import GetSrcPhoto from "components/photo/GetSrcPhoto";
import { Link } from "react-router-dom";

function Card({ data }) {
  const src = GetSrcPhoto(data?.photo)
  return (
    <div className="p-3 text-center">
      <Link to={`/product/${data?.id}`}>
        <img
          alt={data?.name}
          src={src}
          className="w-1/2 object-center object-fill md:w-5/6 lg:w-4/6 mx-auto"
        />
        <h5 className="text-2xl font-semibold tracking-tight mt-2 underline text-orange-standard">
          {data?.name}
        </h5>
      </Link>
      <div className="mt-5">
        <span className=" text-xl font-semibold text-gray-900 ">
          {data?.price} $
        </span>
      </div>
    </div>
  );
}

export default Card;
