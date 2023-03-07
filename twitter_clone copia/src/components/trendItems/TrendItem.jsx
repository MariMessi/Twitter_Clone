import "./index.css";

const TrendItem = ({ trendList }) => {
    const { keywords, byline, title, abstract } = trendData;
    return (
        <div className="TrendITem">
            <p>{keywords}</p>
            <h4>{title}</h4>
            <p>{byline}</p>
            <p>{abstract}</p>

        </div>
    );
};

export default TrendItem;