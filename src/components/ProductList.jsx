import { useState, useEffect } from "react";
import "./ProductList.css";
import { FaCartPlus } from "react-icons/fa";
import img1 from '../assets/products/1.jpg'
import img2 from '../assets/products/2.jpg'
import img3 from '../assets/products/3.jpg'
import img4 from '../assets/products/4.jpg'
import img5 from '../assets/products/5.jpg'
import img6 from '../assets/products/6.jpg'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < products.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Acetaminophen Pills", oldPrice: 18, price: 12, image: img1 },
        { id: 2, name: "Throat Lozenges Syrup", oldPrice: 18, price: 12, image: img2 },
        { id: 3, name: "Multivitamin B6+", oldPrice: 18, price: 12, image: img3 },
        { id: 4, name: "Vitamin C Tablets", oldPrice: 20, price: 15, image: img4 },
        { id: 5, name: "Cough Syrup", oldPrice: 18, price: 14, image: img5 },
        { id: 6, name: "Omega 3 Capsules", oldPrice: 25, price: 18, image: img6 },
      ])
    }, 1000);
  }, []);

  return (
    <>
      <div className="product-list">
        {products.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          products.slice(currentIndex, currentIndex + itemsPerPage).map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>
                <span className="old-price">${product.oldPrice}</span>{" "}
                <span className="new-price">${product.price}</span>
              </p>
              <button
                onClick={() => alert(`Agregado ${product.name}`)}
                className="add-to-cart"
              >
                <FaCartPlus />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="slider-buttons">
        <button onClick={handlePrev} disabled={currentIndex === 0}>Prev</button>
        <button onClick={handleNext} disabled={currentIndex >= products.length - itemsPerPage}>Next</button>
      </div>
    </>
  );
};

export default ProductList;
