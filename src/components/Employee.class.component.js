import React, { Component } from 'react'
import axios from 'axios';

class Employee extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            errMessage: ''
        }
    };
    componentDidMount(){
        document.title = "Employee Menagement";
        this.fetchEmployee();
    }

    fetchEmployee = () => {
        axios.get("http://localhost:3000/employees")
        .then(response => {
            this.setState({
                data: response.data
            });
        })
        .catch(error => {
            this.setState({
                errMessage: "No results found!"
            });
        })
    }
  render() {
    return (
    //   <div>Employee</div>
      <>
      <ul>
          {this.state.data.map((item) => (
              <li key={item.id}>
                {item.name}-{item.position}-{item.setting.theme}-
                {item.company.name}-
              {item.projects.map((pj) => (
              <>
              {pj.name}
                {"|"}
              </>
              ))}
              </li>
          ))}
      </ul>
      </>
    )
  }
};
export default Employee;