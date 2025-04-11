import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <p className="logo">Featured </p>
        <span className="titleContainer">
          <h1 className="title">Featured Pharmacy Essentials</h1>
          <p className="description">
            Libero diam auctor tristique hendrerit in eu vel id.
            Nec leo amet suscipit nulla. Nullam vitae sit tempus diam.
          </p>
        </span>

        
      </div>
      

      <ProductList />
    </div>
  );
}

export default App;
