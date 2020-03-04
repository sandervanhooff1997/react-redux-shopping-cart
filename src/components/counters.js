import React, { useContext } from "react";
import { Counter } from "components";
import { resetCounters } from "store/slices/counters";
import { connect } from "react-redux";

const Counters = ({ counters, dispatch }) => {
  //console.log(useContext(UserContext));

  return (
    <div>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => dispatch(resetCounters())}
      >
        Reset
      </button>
      {counters.map(counter => (
        <Counter key={counter.id} id={counter.id} value={counter.value} />
      ))}
    </div>
  );
};

export default connect()(Counters);
