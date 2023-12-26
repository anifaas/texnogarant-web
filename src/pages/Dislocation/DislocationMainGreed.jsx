import data from '../../data/data.json'
import { TopRightArrow } from '../../icons/top-right-arrow'

export default function DislocationMaingreed() {
    return(
        <section className="dislocation--section">
            <div className="dislocation--section-container container">
                <div className="section-title">
                    <h1>Дислокация</h1>
                </div>
                <div className="dislocation--grid">
                    {data?.dislocation?.map((item, i) =>(
                        <button key={i} className="dislocation--card">
                            <h4>{item.place}</h4>
                            <TopRightArrow/>
                        </button>
                    ))}
                    
                </div>
            </div>
        </section>
    )
}