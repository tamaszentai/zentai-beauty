import React from "react";

const PriceListItem = (props) => {

  const priceListUpdateHandler = (event) => {
    event.preventDefault();
  };


  let updater;

  if(props.loggedIn){
    updater = (
      <form onSubmit={priceListUpdateHandler}>
      <input type="text" placeholder={props.item}></input>
      <input type="text" placeholder={props.price}></input>
      <button>Update</button>
      </form>
    )
  }

  return(
    <div>
      <h3>{updater}{props.item}{props.price}{props.updater}</h3>
    </div>
  )
}

export default PriceListItem;