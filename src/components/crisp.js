import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispComponent extends Component {
  componentDidMount () {
    Crisp.configure("31493b56-f455-4e23-803b-9e8e659712a6");
  }

  render () {
    return null;
  }
}
export default CrispComponent;
