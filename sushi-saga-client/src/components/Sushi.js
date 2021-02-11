import React, { Fragment } from 'react'

const Sushi = (props) => {
  const { id, img_url, name, price, isEaten } = props
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=>isEaten(id, price)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          isEaten ?
          <img src={img_url } width="100%" />
          :
          null
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi