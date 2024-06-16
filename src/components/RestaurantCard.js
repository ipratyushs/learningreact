export default RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData.info;
    return (
      <div className="m-4 p-4 w-[200px] bg-violet-100 h-auto rounded-lg hover:scale-105">
        <img
          className="rounded-lg"
          src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId}
          alt={name}
        />
        <div className="whitespace-nowrap overflow-hidden">
          <h3 className="font-bold py-4 text-sm">{name}</h3>
          <p className="whitespace-nowrap overflow-hidden">{cuisines.join(",")}</p>
          <p>{avgRating} Stars</p>
          <p>{costForTwo}</p>
        </div>
      </div>
    );
  };
  export const withVegLabel =(RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute bg-green-600 text-white m-2 p-2 rounded-lg">Veg</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  } 
