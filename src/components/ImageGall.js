import { useEffect, useRef, useState } from "react";
import '../App.css';

function ImageGallery(props) {

  const [products, setProducts] = useState([...props.products]);

  const ImageGalEl = useRef();
   

	const getImages = (products) => {
			return props?.products.map((product, i) => {
				return <img src={product.thumbnail} />
			})		
	}

	const showNextImage = () => {
		
	}

	const showPrevImage = () => {

	}
  return (
	  <div className="flex">
		  <div><button onClick={showPrevImage()}>Prev</button></div>
		  <div className="imageGallery" ref={ImageGalEl}>{getImages(products)}</div>
		  <div><button onClick={showNextImage()}>Next</button></div>
	  </div>
  );
}

export default ImageGallery;