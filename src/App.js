import React from "react";

class Student extends React.Component {

  render() {
    const { name, age, id } = this.props.data
    console.log(name, age, id);
    return (
      <div>My name is {name} and {age} years old. My id number is {id}  </div>
    )
  }
}
export { Student }
