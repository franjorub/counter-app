import React from "react";
import Counter from "./counter";

const Counters = props => {
  return (
    <div>
      <button onClick={props.onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      <button onClick={props.onCreate} className="btn btn-primary btn-sm m-2">
        Add new
      </button>
      {props.counters.map(counter => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
        />
      ))}
    </div>
  );
};

export default Counters;
