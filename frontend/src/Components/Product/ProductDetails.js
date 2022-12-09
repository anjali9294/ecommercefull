import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProductDetails } from "../../Actions/productAction";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
// import { productDetailsReducer } from "../../Reducers/productReducer";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js";
import Loder from "../Layout/Loader/Loader";
import Swal from "sweetalert2";
import Metadata from "../Layout/Metadata";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
    readOnlu: true,
  };

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "warning",
        title: error,
      }).then(() => {
        window.location.reload();
      });
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error]);
  return (
    <>
      {loading ? (
        <Loder />
      ) : (
        <>
          <Metadata title={`${product.name} -- Myntra`} />
          <div className="productDetails">
            <div className="images">
              <Carousel showThumbs={false} infiniteLoop={true}>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarousalImages"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span>({product.numOfReviews} reviews)</span>{" "}
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button>-</button>
                    <input value={product.stock} type="number" />
                    <button>+</button>
                  </div>
                  <button>Add to Cart</button>
                </div>
                <p>
                  Status:{" "}
                  <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                    {product.stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>
              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>
              <button className="submitReview"> Submit Review</button>
            </div>
          </div>
          <h3 className="reviewsHeading">REVIEWS</h3>
          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
