import './Topbar.css';

function Topbar() {
  return (
    <div className="topbar">
        <div className="maparea">
			<div className="mapinfo">
				<span className="map_a last24h active">Last 24 hours</span>
				<span className="map_a last7d">Last 7 day</span>
				<span className="map_a last30d" >Last 30 day</span>
			</div>
			<div className="totalrow">
				<span className="total">0</span> record listed.
			</div>
			<div className="mapcoordinates"></div>
		</div>
    </div>
  );
}

export default Topbar;
