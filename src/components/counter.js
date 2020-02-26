import React from "react";
import { connect } from "react-redux";
import { incrementCounter, deleteCounter } from "store/slices/counters";

const Counter = ({ id, value, dispatch }) => {
  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    return value === 0 ? "Zero" : value;
  };

  return (
    <>
      <div>
        <span className={getBadgeClasses()}>{formatCount()}</span>
        <button
          onClick={() => {
            dispatch(incrementCounter(id));
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(deleteCounter(id))}
          className="btn btn-danger btn-sm ml-2"
        >
          Delete
        </button>
      </div>
    </>
  );

  // componentDidMount() {
  //   console.log("mount");
  // }

  // componentWillUnmount() {
  //   console.log("unmount");
  // }
};

export default connect()(Counter);
