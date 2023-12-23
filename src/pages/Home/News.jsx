import data from '../../data/data.json';

const news = data?.news || [];
const introNews = news.slice(0,6)

export default function News(){
    return(
        <section className="intro--news--section">
            <div className="intro--news--container container">
                <div className="section-title">
                    <h1>Новости</h1>
                    <button>Смотреть все</button>
                </div>
                <div className="news--cards">
                    {introNews?.map((item, i) => (
                        <div key={i} className="news--card">
                            <div className="news--card--img">
                                <img src={item.newsImg} alt="" />
                            </div>
                            <div className="news--card--content">
                                <h4>{item.newsTitle}</h4>
                                <button>Читать дальше</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}