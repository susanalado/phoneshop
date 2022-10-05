import App from "./App";
import ProductDetail from "./ProductDetail";


export default [
    { path: "/", name: "", Component: App },
    { path: "/products/:productId", name: "Product", Component: ProductDetail },
    
  ];