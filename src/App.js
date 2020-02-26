import React from "react";
import { NavBar, Counters } from "components";
import { connect } from "react-redux";

const mapStateToProps = function(state) {
  return {
    counters: state.counters
  };
};

const App = ({ counters }) => {
  return (
    <>
      <NavBar totalCounters={counters.filter(x => x.value > 0).length} />
      <main className="container">
        <Counters counters={counters} />
      </main>
    </>
  );
};

export default connect(mapStateToProps)(App);
