import { useLocation } from "react-router-dom"
import data from '../../data/data.json'

export default function DislocatioScreen() {
    const {state: dislocation} = useLocation();
    return(
        <section className="locatescreen--section">
            <div className="locatescreen--section-container container">
                <div className="locatescreen--title">
                    <h1>{dislocation.place}</h1>
                    <p><b>Адрес: </b>{dislocation.subInfo.adress}</p>
                    <p><b>ОРТ: </b>{dislocation.subInfo.landmark}</p>
                    <p><b>Время работы: </b>{dislocation.subInfo.workingTime}</p>
                </div>
                
            </div>
        </section>
    )
}