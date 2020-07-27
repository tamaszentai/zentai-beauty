import React, { useState } from "react";

import PriceListItem from '../Components/PriceListItem';

const Pricelist = (props) => {
  const [priceList, setPriceList] = useState([
    { item: "makeup", price: 50 },
    { item: "tattoo", price: 30 },
  ]);

  
  return (
    <div>
    <h1>Árjegyzék</h1>
      <ul className="price-list">
        {priceList.map(item=> (
          <PriceListItem loggedIn={props.loggedIn} key={item.index} item={item.item}
          price={item.price} />
        ))}
        
      </ul>
    </div>
  );
};

export default Pricelist;
