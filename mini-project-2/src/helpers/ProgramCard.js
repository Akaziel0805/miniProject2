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
      backgroundColor: "#ffffff",
      tasks: [],
      id: [],
      dataLength: "",
      zIndex: -2,
      opacity: 0,
      list: [],
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

  addIndex = () => {
    this.setState({
      zIndex: 2,
      opacity: 1,
    });
  };

  exitIndex = () => {
    this.setState({
      zIndex: -2,
      opacity: 0,
    });
  };

  taskSelect(id, program, institution, years, location) {
    console.log(program);
    selectedId = id;
    document.getElementById("program").value = program;
    document.getElementById("institution").value = institution;
    document.getElementById("years").value = years;
    document.getElementById("location").value = location;
    this.setState({
      zIndex: 2,
      opacity: 1,
    });
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
        <div className="program-nav">
          <span onClick={this.addIndex} className="program-nav-add">
            <ion-icon name="add-circle"></ion-icon>
          </span>
          <p className="program-nav-index">ADD INDEX</p>
          <span className="program-nav-search">
            <span>
              <ion-icon name="search-outline"></ion-icon>
            </span>
            <input
              name="search"
              onChange={(e) => {
                this.setState({ list: e.target.value });
                console.log(this.state.list);
              }}
            />
          </span>
        </div>
        <div
          style={{
            zIndex: this.state.zIndex,
            opacity: this.state.opacity,
          }}
          className="form-container">
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
              <input
                name="years"
                type="text"
                id="years"
                className="input-form"
              />
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
            <span onClick={this.exitIndex}>
              <ion-icon name="exit-outline"></ion-icon>
            </span>
          </div>
        </div>
        <div className="program-container">
          <p className="notif">
            Showing a list of {this.state.dataLength} courses
          </p>
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
            .map((task, index) => {
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
                        EDIT
                      </button>

                      <button
                        onClick={() => {
                          this.taskDelete(task.id);
                        }}>
                        DELETE
                      </button>
                    </li>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="program-desc">
          <div className="program-desc-cards">
            <div className="prog">
              <p className="prog-course">BS in Mechanical Engineering</p>
            </div>

            <div className="prog-nav">
              <p>Description</p>
              <p>Career Path</p>
              <p>Syllabus</p>
            </div>
            <div className="prog-desc">
              <p>DESCRIPTION</p>
              <p className="prog-desc-desc">
                What Is Mechanical Engineering? Technically, mechanical
                engineering is the application of the principles and
                problem-solving techniques of engineering from design to
                manufacturing to the marketplace for any object. Mechanical
                engineers analyze their work using the principles of motion,
                energy, and force—ensuring that designs function safely,
                efficiently, and reliably, all at a competitive cost. Mechanical
                engineers make a difference. That's because mechanical
                engineering careers center on creating technologies to meet
                human needs. Virtually every product or service in modern life
                has probably been touched in some way by a mechanical engineer
                to help humankind. This includes solving today's problems and
                creating future solutions in health care, energy,
                transportation, world hunger, space exploration, climate change,
                and more. Being ingrained in many challenges and innovations
                across many fields means a mechanical engineering education is
                versatile. To meet this broad demand, mechanical engineers may
                design a component, a machine, a system, or a process. This
                ranges from the macro to the micro, from the largest systems
                like cars and satellites to the smallest components like sensors
                and switches. Anything that needs to be manufactured—indeed,
                anything with moving parts—needs the expertise of a mechanical
                engineer.
              </p>
            </div>
            <div className="prog-path">
              <p>CAREER PATH</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProgramCard;
