import { click } from "@testing-library/user-event/dist/click";
import React, { Component } from "react";
import axios from "axios";
import syllabus from "../pictures/syllabus.jpg";

var selectedId, selectedTask;
var thisId;

export class ProgramCard extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      borderColor: "solid rgb(157, 157, 157)",
      backgroundColor: "#ffffff",
      tasks: [],
      id: [""],
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
      });
  };

  getId(id) {
    this.setState({
      id: id,
    });
    console.log(id);
  }

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

  taskSelect(
    id,
    program,
    institution,
    years,
    location,
    description,
    college,
    career
  ) {
    selectedId = id;
    document.getElementById("program").value = program;
    document.getElementById("institution").value = institution;
    document.getElementById("years").value = years;
    document.getElementById("location").value = location;
    document.getElementById("descriptions").value = description;
    document.getElementById("college").value = college;
    document.getElementById("career").value = career;

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
        updatedDesc: document.getElementById("descriptions").value,
        updatedCol: document.getElementById("college").value,
        updatedCar: document.getElementById("career").value,
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
    this.setState({
      id: [""],
    });
    const userId = document.cookie.split(";")[0].split("=")[1];
    axios
      .post("http://localhost:4001/tasks", {
        degree: e.target.program.value,
        school: e.target.institution.value,
        time: e.target.years.value,
        place: e.target.location.value,
        desc: e.target.descriptions.value,
        col: e.target.college.value,
        car: e.target.career.value,
        user: userId,
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
              description: e.target.descriptions.value,
              college: e.target.college.value,
              career: e.target.career.value,
            },
          ],
        });
      });
  };
  executeScroll = (e) => this.myRef.current.scrollIntoView({});
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
            <select>
              <option>Surigao del Norte</option>
              <option>Lanao del Norte</option>
              <option>Lanao del Sur</option>
            </select>
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
                className="input-form1"
                placeholder="Enter program"
              />
              <input
                name="institution"
                type="text"
                id="institution"
                className="input-form2"
                placeholder="Enter institution"
              />
              <input
                name="years"
                type="text"
                id="years"
                className="input-form3"
                placeholder="Enter years to finish"
              />
              <input
                name="location"
                type="text"
                id="location"
                className="input-form4"
                placeholder="Enter address"
              />
              <input
                name="descriptions"
                type="text"
                id="descriptions"
                className="input-form5"
                placeholder="Enter program description"
              />
              <input
                name="college"
                type="text"
                id="college"
                className="input-form6"
                placeholder="Enter college department"
              />
              <input
                name="career"
                type="text"
                id="career"
                className="input-form7"
                placeholder="Enter career path"
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
                      this.getId(task.id);
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
                            task.location,
                            task.description,
                            task.college,
                            task.career
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
          {this.state.tasks
            .filter((task) => {
              if (this.state.id.toString() === "") {
                return task;
              } else if (
                task.id.toString().includes(this.state.id.toString())
              ) {
                return task;
              }
            })
            .map((task, index) => {
              return (
                <div key={index} className="program-desc-cards">
                  <div className="prog">
                    <p className="prog-course">{task.program}</p>
                    <p className="prog-college">{task.college}</p>
                  </div>

                  <div className="prog-nav">
                    <p>Description</p>
                    <p>Career Path</p>
                    <p onClick={this.executeScroll}>Syllabus</p>
                  </div>
                  <div className="prog-desc">
                    <p>DESCRIPTION</p>
                    <p className="prog-desc-desc">{task.description}</p>

                    <p>CAREER PATH</p>
                    <p>{task.career}</p>
                    <p>SYLLABUS</p>
                    <img ref={this.myRef} src={syllabus} />
                    <p></p>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

export default ProgramCard;
