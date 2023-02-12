import { click } from "@testing-library/user-event/dist/click";
import React, { Component } from "react";
import axios from "axios";

var selectedId, selectedTask;
var thisId;

export class ProgramCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColor: "solid rgb(157, 157, 157)",
      backgroundColor: "rgb(157, 157, 157)",
      tasks: [],
      id: [],
      dataLength: "",
    };
  }

  componentDidMount = () => {
    fetch(`http://localhost:4001/tasks/`)
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          tasks: [...response],
          dataLength: `${response.length}`,
        });
        console.log(this.state.dataLength);
      });
  };

  cardActive = (id) => {
    console.log(thisId);
    this.setState({ id: id });
    // setTimeout(() => {
    //   this.setState({
    //     borderColor: "solid #008068",
    //     backgroundColor: "#bfd0cc",
    //   });
    // }, 100);
  };

  cardNotActive = () => {
    setTimeout(() => {
      this.setState({
        borderColor: "solid rgb(157, 157, 157)",
        backgroundColor: "rgb(157, 157, 157)",
      });
    }, 800);
  };

  taskSelect(id, program, institution, years, location) {
    console.log(program);
    selectedId = id;
    document.getElementById("program").value = program;
    document.getElementById("institution").value = institution;
    document.getElementById("years").value = years;
    document.getElementById("location").value = location;
  }

  taskUpdate = (id, e) => {
    id = selectedId;
    const degree = document.getElementById("program").value;
    const school = document.getElementById("institution").value;
    const time = document.getElementById("years").value;
    const place = document.getElementById("location").value;
    axios
      .put(`http://localhost:4001/tasks/${id}`, {
        updatedDegree: document.getElementById("program").value,
        updatedSchool: document.getElementById("institution").value,
        updatedTime: document.getElementById("years").value,
        updatedPlace: document.getElementById("location").value,
      })
      .then((response) => {
        const updatedIndex = this.state.tasks.findIndex((task) => {
          if (task.id === id) {
            this.setState({
              tasks: [...this.state.tasks],
            });
          }
        });
        // this.state.tasks[updatedIndex].program = degree;
        // this.state.tasks[updatedIndex].institution = school;
        // this.state.tasks[updatedIndex].years = time;
        // this.state.tasks[updatedIndex].location = place;
      });
  };

  taskDelete = (id, e) => {
    axios.delete(`http://localhost:4001/tasks/${id}`).then(() => {
      const updatedIndex = this.state.tasks.findIndex((task) => task.id === id);
      this.state.tasks[updatedIndex].deletedAt = new Date().toISOString();
      this.setState({
        tasks: [...this.state.tasks],
      });
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/tasks", {
        degree: e.target.program.value,
        school: e.target.institution.value,
        time: e.target.years.value,
        place: e.target.location.value,
      })
      .then((response) => {
        this.setState({
          tasks: [
            ...this.state.tasks,
            {
              program: e.target.program.value,
              institution: e.target.institution.value,
              years: e.target.years.value,
              location: e.target.location.value,
            },
          ],
        });
      });
    console.log(this.state.tasks);
  };

  render() {
    thisId = this.state.id;
    return (
      <>
        <div className="program-nav"></div>
        <div className="form">
          <form onSubmit={this.formSubmit}>
            <input
              name="program"
              type="text"
              id="program"
              className="input-form"
            />
            <input
              name="institution"
              type="text"
              id="institution"
              className="input-form"
            />
            <input name="years" type="text" id="years" className="input-form" />
            <input
              name="location"
              type="text"
              id="location"
              className="input-form"
            />
            <button type="submit">Add</button>
          </form>
          <button
            onClick={() => {
              this.taskUpdate();
            }}>
            Update
          </button>
        </div>
        <div className="program-container">
          <p>A list of {this.state.dataLength}</p>
          {this.state.tasks.map((task, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    border: `${this.state.borderColor}`,
                    backgroundColor: `${this.state.backgroundColor}`,
                  }}
                  onClick={() => {
                    this.cardActive(task.id);
                  }}
                  onMouseLeave={this.cardNotActive}
                  className="program-card">
                  <li>
                    <p>{task.program}</p>
                  </li>
                  <li>
                    <p>{task.institution}</p>
                  </li>
                  <li>
                    <span className="icon">
                      <ion-icon name="document-attach-outline"></ion-icon>
                    </span>
                    <p>{task.years}</p>
                  </li>
                  <li>
                    <span className="icon">
                      <ion-icon name="location-outline"></ion-icon>
                    </span>
                    <p>{task.location}</p>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        this.taskSelect(
                          task.id,
                          task.program,
                          task.institution,
                          task.years,
                          task.location
                        );
                      }}>
                      Edit
                    </button>

                    <button
                      onClick={() => {
                        this.taskDelete(task.id);
                      }}>
                      Delete
                    </button>
                  </li>
                </div>
              </div>
            );
          })}
        </div>
        <div className="program-desc"></div>
      </>
    );
  }
}

export default ProgramCard;
