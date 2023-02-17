import React, { Component } from "react";

class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      list: [],
      anotherList: [],
    };
  }
  componentDidMount = () => {
    fetch("http://localhost:4001/tasks")
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          tasks: [...response],
        });
        console.log(response);
      });
  };

  render() {
    return (
      <div className="career">
        <input
          name="search"
          onChange={(e) => {
            this.setState({ list: e.target.value });
            console.log(this.state.list);
          }}
        />
        <input
          name="search"
          onChange={(e) => {
            this.setState({ anotherList: e.target.value });
            console.log(this.state.anotherList);
          }}
        />
        {this.state.tasks
          .filter((tasks) => {
            if (this.state.list === "") {
              return tasks;
            } else if (
              tasks.program
                .toString()
                .toLowerCase()
                .includes(this.state.list.toString().toLowerCase())
            ) {
              return tasks;
            }
          })
          .filter((tasks) => {
            if (this.state.anotherList === "") {
              return tasks;
            } else if (
              tasks.location
                .toString()
                .toLowerCase()
                .includes(this.state.anotherList.toString().toLowerCase())
            ) {
              return tasks;
            }
          })
          .map((tasks, index) => {
            return (
              <div key={index}>
                <p>{tasks.program}</p>
                <p>{tasks.location}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Career;
