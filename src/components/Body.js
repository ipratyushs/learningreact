import { useEffect, useState } from "react";
import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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
  const onlineStatus = useOnlineStatus();
  const RestaurantVeg = withVegLabel(RestaurantCard);

  if (!onlineStatus) {
    return <div>You are offline</div>;
  } else {
    return !restaurants.length ? (
      <Shimmer />
    ) : (
      <div id="ctn" className="res-body">
        <div className="flex items-center">
          <div className="search m-4 p-4">
            <input
              type="search"
              className="border border-solid border-black"
              placeholder="Search your fav restaurant"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="px-4 py-1 bg-green-100 m-4 rounded-lg"
              onClick={() => {
                const filteredRrestaurants = restaurants.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setFilteredRestaurants(filteredRrestaurants);
              }}
            >
              Search
            </button>
          </div>
          <div className="search">
          <button
            className="px-4 py-1 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              restaurants = restaurants.filter((res) => res.info.avgRating > 3);
              setFilteredRestaurants(restaurants);
            }}
          >
            Top Rated Restaurants
          </button>
          </div>
          
        </div>

        <div className="flex flex-wrap">
          {filteredRestaurants.map((restaurant) => (
            <Link to={`/restaurants/${restaurant.info.id}`}>
              { restaurant.info.veg ? (<RestaurantVeg resData={restaurant}/>) : (<RestaurantCard key={restaurant.info.id} resData={restaurant} />)
              }
              
            </Link>
          ))}
        </div>
      </div>
    );
  }
};
