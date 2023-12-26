import { useLocation } from "react-router-dom"
import { useState } from "react";

export default function DislocatioScreen() {
    const {state: dislocation} = useLocation();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (productType) => {
        setSelectedProduct(productType);
    }

    return(
        <section className="locatescreen--section">
            <div className="locatescreen--section-container container">
                <div className="locatescreen--title">
                    <h1>{dislocation.place}</h1>
                    <p><b>Адрес: </b>{dislocation.subInfo.adress}</p>
                    <p><b>ОРТ: </b>{dislocation.subInfo.landmark}</p>
                    <p><b>Время работы: </b>{dislocation.subInfo.workingTime}</p>
                </div>
                <div className="locatescreen--contant">
                    <div className="locatescreen--contant-catalog">
                        {dislocation.categories.map((category) => (
                            <button key={category.typeOfProduct} onClick={() => handleProductClick(category.typeOfProduct)} className={selectedProduct === category.typeOfProduct ? "selected" : ""}>
                                {category.typeOfProduct}
                            </button>
                        ))}
                    </div>
                    <div className="locatescreen--contant-workers">
                        {selectedProduct && (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type of Work</th>
                                        <th>Project</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dislocation.categories
                                   .find((category) => category.typeOfProduct === selectedProduct)
                                   .listOfWorkers.map((worker, index) => (
                                        <tr key={index}>
                                            <td>{worker.name}</td>
                                            <td>{worker.typeWork}</td>
                                            <td>{worker.project}</td>
                                            <td>{worker.phone}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
