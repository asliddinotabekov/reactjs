import React from "react"

class Student extends React.Component {
  render() {
    const { name, age, id } = this.props.data
    console.log(name, age, id);
    return (
      <div>Hey Department Student  </div>
    )
  }
}
export { Student }