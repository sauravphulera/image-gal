import './App.css';
import { useEffect, useState } from 'react';
import ImageGallery from './components/ImageGall';

function App() {

  let [products, setProducts] = useState(([]));

   useEffect(() => {
        fetch("https://dummyjson.com/products").then((res) => {
            return res.json()
        }).then((res) => {
            if(res) {
              products = res.products || [];
              setProducts([...products]);
            }
        })
   }, [])

  return (
    <div className="App">
       <ImageGallery  products={products}/>
    </div>
  );
}

export default App;
