import React from "react";

import "./App.css";
import ProductCard from "./Component/ProductCard";

const products = [
  {
    title: "Essence Mascara Lash Princess",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    rating: {
      count: 3,
      rate: 4.94,
    },
    variants: [
      {
        price: 9.99,
        compare_at_price: 12.99,
      },
    ],
    button: "View options",
  },
  {
    title: "Eyeshadow Palette with Mirror",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
    rating: {
      count: 10,
      rate: 2.51,
    },
    variants: [
      {
        price: 19.99,
        compare_at_price: 29.99,
      },
    ],
    button: "Add to cart",
  },
  {
    title: "Powder Canister",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    variants: [
      {
        price: 16.99,
      },
    ],
    button: "Add to cart",
  },
  {
    title: "Red Lipstick",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
    rating: {
      count: 10,
      rate: 3.28,
    },
    variants: [
      {
        price: 12.99,
        compare_at_price: 29.99,
      },
    ],
    button: "Add to cart",
  },
  {
    title: "Red Nail Polish",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
    rating: {
      count: 10,
      rate: 3.91,
    },
    variants: [
      {
        price: 8.99,
        compare_at_price: 18.99,
      },
    ],
    button: "Add to cart",
  },
  {
    title: "Calvin Klein CK One",
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
    rating: {
      count: 10,
      rate: 4.85,
    },
    variants: [
      {
        price: 49.99,
        compare_at_price: 59.99,
      },
    ],
    button: "View options",
  },
  {
    title: "Chanel Coco Noir Eau De",
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
    rating: {
      count: 10,
      rate: 2.76,
    },
    variants: [
      {
        price: 129.99,
        compare_at_price: 139.99,
      },
    ],
    button: "Add to cart",
  },
  {
    title: "Dior J'adore",
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
    rating: {
      count: 10,
      rate: 3.31,
    },
    variants: [
      {
        price: 89.99,
        compare_at_price: 99.99,
      },
    ],
    button: "Add to cart",
  },
];

function App() {
  const productCards = products.map((product) => (
    // Có thể chuyển toàn bộ object
    // hoặc các thuộc tính riêng với cú pháp spread props
    <ProductCard product={product} />
  ));

  return (
    <div className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {productCards}
        </div>
      </div>
    </div>
  );
}

export default App;
