export default RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData.info;
    return (
      <div className="res-card">
        <img
          className="rcc-img"
          src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId}
          alt={name}
        />
        <div className="rcc-details">
          <h3>{name}</h3>
          <p className="cuisines">{cuisines.join(",")}</p>
          <p>{avgRating} Stars</p>
          <p>{costForTwo}</p>
        </div>
      </div>
    );
  };