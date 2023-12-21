import data from '../../data/data.json'
import { TopRightArrow } from '../../icons/top-right-arrow';

const products = data?.products || [];
const lengthFourProduct = products.slice(0,4)

export default function OurProduct() {
    return(
        <section className="intro--product--section">
            <div className="section-title container">
                <h1>Наша продукция</h1>
                <button>Смотреть все</button>
            </div>
            <div className="intro--product--container container">
                {lengthFourProduct?.map((item, i) => (
                    <div key={i} className="intro--product--card">
                        <div className="card--title">
                            <h3>{item.productName}</h3>
                            <span>{item.productSubName}</span>
                        </div>
                        <div className="card--sub">
                            <TopRightArrow />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}