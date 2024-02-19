import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");

    return (
      <div className="flex items-center justify-center p-10">
        <UserClass name={"First"} location={"karnataka"} />
      </div>
    );
  }
}

export default About;
