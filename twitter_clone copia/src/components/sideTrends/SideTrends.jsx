import trendList from "../../trendsList/trendsList";
import TrendItem from "../trendItems";
import "./index.css";

const SideTrends = () => {
    return (
        <div className="SideTrends">
            {trendList.map((trend) => (
                <TrendItem trendData = {trend} />
            ))}
        </div>
    );
};

export default SideTrends;