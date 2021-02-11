import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map((s) => (
          <Sushi {...s} isEaten={props.isEaten}/>
        ))}
        <MoreButton handleMore={props.handleMore} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
