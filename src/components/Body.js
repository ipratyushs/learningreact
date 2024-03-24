import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
export default Body = () => {
  let [restaurants, setResList] = useState([]);
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchRestaurants();
  }, []);
  const fetchRestaurants = async () => {
    // fetch restaurants from an API
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    const resList =
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(resList);
    setResList(resList);
    setFilteredRestaurants(resList);
  };
  return !restaurants.length ? (
    <Shimmer />
  ) : (
    <div id="ctn" className="res-body">
      <div className="tools">
        <div className="searchCtn">
          <input
            type="search"
            className="res-search"
            placeholder="Search your fav restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="searchBtn"
            onClick={() => {
              const filteredRrestaurants = restaurants.filter((res)=> {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
              });
              setFilteredRestaurants(filteredRrestaurants);
            }}
          >Search</button>
        </div>
        <button
          className="top-rated-btn"
          onClick={() => {
            restaurants = restaurants.filter((res) => res.info.avgRating > 4);
            setFilteredRestaurants(restaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-ctn">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
