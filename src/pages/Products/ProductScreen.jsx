import { useLocation } from 'react-router-dom';

export default function ProductScreen() {
  const { state: product } = useLocation();

  return (
    <section className='product--screen'>
        <div className="product--screen-container container">
            <div className="product--img">
                <img src={product.imgSrc} alt=""/>
            </div>
            <div className="product--content">
                <div className="product--content-title">
                    <h1>{product.productName}</h1>
                </div>
                <div className="product--content-paragraph">{product.productDescription}</div>
                <div className="product--content-table"></div>
            </div>
        </div>
    </section>
  );
}
