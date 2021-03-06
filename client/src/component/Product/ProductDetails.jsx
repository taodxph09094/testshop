import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
} from "../../actions/productAction";
import ReviewCard from "./ReviewCard";
import { useAlert } from "react-alert";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import Loader from './../layouts/Loader/Loader';
import { addItemsToCart } from './../../actions/cartAction';

const ProductDetails = ({match}) => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { product, loading, error } = useSelector(
        (state) => state.productDetails
      );

      const [quantity, setQuantity] = useState(1);

      const increaseQuantity = () => {
        if (product.Stock <= quantity) return;

        const qty = quantity + 1;
        setQuantity(qty);
      };

      const decreaseQuantity = () => {
        if (1 >= quantity) return;

        const qty = quantity - 1;
        setQuantity(qty);
      };

      const addToCartHandler = () => {
        dispatch(addItemsToCart(match.params.id, quantity));
        alert.success("Item Added To Cart");
      };
    useEffect(()=> {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
          }

        dispatch(getProductDetails(match.params.id))
    }, [dispatch, match.params.id, error, alert]);

    const options = {
        size: "large",
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
      };
    return (
        <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
                <div className="ProductDetails">
                    <div>
                        <Carousel>
                        {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
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
                <Rating {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`$${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input  readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler} >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>
              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>
              <button className="submitReview">
                Submit Review
              </button>
            </div>
                </div>
                <h3 className="reviewsHeading">REVIEWS</h3>
                <Dialog
            aria-labelledby="simple-dialog-title">
                     <DialogTitle>Submit Review</DialogTitle>
          <DialogContent className="submitDialog">
              <Rating
                value="5"
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value="ahihi"
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button  color="secondary">
                Cancel
              </Button>
              <Button color="primary">
                Submit
              </Button>
            </DialogActions>
            </Dialog>
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
        </Fragment>
          )}
          </Fragment>
    )
}

export default ProductDetails
