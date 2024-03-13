import { StarIcon } from "@heroicons/react/solid";
import Layout from "hocs/layouts/Layout";
import { useState } from "react";
import { create_review } from "../../redux/actions/reviews";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function ReviewsProductDetail({ create_review, }) {
  const navigate = useNavigate()
  const params = useParams();
  const productId = params.productId;

  const handleStarClick = (selectedRating) => {
    setReviewFormData({
      ...reviewFormData,
      rating: selectedRating,
    });
  };

  const [reviewFormData, setReviewFormData] = useState({
    rating: 5,
    comment: "",
  });

  const { rating, comment } = reviewFormData;

  const onChange = (e) =>
  setReviewFormData({
    ...reviewFormData,
    [e.target.name]: e.target.value,
  });

  const onReview = async (e) =>  {
    e.preventDefault()
    await create_review(productId, rating, comment)
    navigate(`/product/${productId}`)
  };
  return (
    <Layout>
      <div class="overflow-hidden py-12">
        <div class="px-4 sm:px-6 lg:px-20 xl:px-24">
          <div class="w-full max-w-xl mx-auto">
            <div>
              <h2 class="text-3xl font-extrabold text-neutral-600">
                Create review
              </h2>
            </div>
            <div>
              <div className="mt-4">
                <form onSubmit={(e)=>onReview(e)}>
                  <div className="mb-2">
                    <textarea
                      onChange={(e) => onChange(e)}
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform  rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      name="comment"
                      id="comment"
                      placeholder="Enter your message*"
                      rows="5"
                      style={{ resize: "none" }}
                      required
                      value={comment}
                    ></textarea>
                  </div>
                  <div className="mb-4 flex justify-end">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <StarIcon
                          key={star}
                          className={classNames(
                            rating >= star
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-7 w-7 flex-shrink-0 cursor-pointer"
                          )}
                          onClick={() => handleStarClick(star)}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="sr-only">
                    {rating + 1} out of 5 stars, Comment: {comment}
                  </p>
                  <div>
                    <button
                      type="submit"
                      class="mb-1 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-orange-standard rounded-xl hover:bg-black focus:outline-none focus:ring-offset-2 focus:ring-white focus:ring-0"
                    >
                      Add review
                    </button>
                  </div>
                  <span>(*) Required</span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


const mapStateToProps = (state) => ({
});
export default connect(mapStateToProps, {
  create_review,
})(ReviewsProductDetail);