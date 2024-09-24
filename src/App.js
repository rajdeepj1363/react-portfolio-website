import React from "react";
import MainContainer from "./Components/Main/MainContainer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js"></script>
      </Helmet>
      <MainContainer />
    </>
  );
}

export default App;
