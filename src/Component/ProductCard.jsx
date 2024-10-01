import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

const ProductCard = ({ product }) => {
  const isSaling = product.variants.some(
    (variant) =>
      variant.compare_at_price && variant.compare_at_price > variant.price
  );
  const isMultiVariant = product.variants.length > 1;
  const minPrice = product.variants.reduce(
    (min, variant) => (variant.price < min ? variant.price : min),
    Infinity
  );
  const maxPrice = product.variants.reduce(
    (max, variant) => (variant.price > max ? variant.price : max),
    -Infinity
  );
  const defaultVariant = product.variants[0];

  const star = {
    fill: <i class="bi bi-star-fill"></i>,
    half: <i class="bi bi-star-half"></i>,
    empty: <i class="bi bi-star"></i>,
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {isSaling && (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        )}

        <div className="card-img-top">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%" }}
          />
        </div>
        <div className="card-body p-4">
          <div className="text-center">
            <div className="fw-bolder">{product.title}</div>

            {product.rating && (
              <div className="d-flex justify-content-center small text-warning mb-2">
                {star.fill}
                {star.fill}
                {star.fill}
                {star.fill}
                {star.fill}
              </div>
            )}

            {isMultiVariant ? (
              <div className="product-price">
                <span className="text-muted text-decoration-line-through">
                  ${minPrice}
                </span>
                <span>${maxPrice}</span>
              </div>
            ) : (
              <div className="product-price">
                {defaultVariant.compare_at_price && (
                  <span className="price--regular">
                    ${defaultVariant.compare_at_price}
                  </span>
                )}
                <span className="price">${defaultVariant.price}</span>
              </div>
            )}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">
              {product.button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
