import React from "react";
import { NavBar, Counters } from "components";
import { connect } from "react-redux";
import { UserProvider } from "context/UserContext";

const mapStateToProps = function(state) {
  return {
    counters: state.counters
  };
};

// user is passed to component tree with react context
const user = { name: "sander 2" };

const App = ({ counters }) => {
  return (
    <UserProvider value={user}>
      <NavBar totalCounters={counters.filter(x => x.value > 0).length} />
      <main className="container">
        <Counters counters={counters} />
      </main>
    </UserProvider>
  );
};

export default connect(mapStateToProps)(App);
