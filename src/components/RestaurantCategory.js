import { useState } from "react";
import ResItemList from "./ResItemList";

export default RestaurantCategory = (props) => {
  const { data } = props;
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "⬇️" : "⬆️"}</span>
        </div>

        {showItems && <ResItemList items={data.itemCards} />}
      </div>
      {/* Accordion */}
    </div>
  );
};
