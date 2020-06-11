import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from './employees.json'
import FilterBar from "./components/FilterBar";
import SortBar from "./components/SortBar";



class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    search: '',
    employees,
  };


  handleSort = event => {
    event.preventDefault();
    const sortName = this.state.employees.sort((employeesa, employeesb) => {
      var nameA = employeesa.name, nameB = employeesb.name
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
    });
    this.setState({ employees: sortName })

  }
  handleSortDepartmentA = event => {
    event.preventDefault();
    const sortName = this.state.employees.sort((employeesa, employeesb) => {
      var nameA = employeesa.department, nameB = employeesb.department
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
    });
    this.setState({ employees: sortName })

  }
  handleSortDepartmentD = event => {
    event.preventDefault();
    const sortName = this.state.employees.sort((employeesa, employeesb) => {
      var nameA = employeesa.department, nameB = employeesb.department
      if (nameA < nameB)
        return 1
      if (nameA > nameB)
        return -1
      return 0
    });
    this.setState({ employees: sortName })

  }
  handleClear = event => {
    event.preventDefault();
    this.setState({ employees: employees })
  }
  createDepartmentArray() {
    const departmentsArray = this.state.employees.map(a => a.department);
    this.setState({ departments: departmentsArray })
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };
  handleFilterSubmit = event => {
    event.preventDefault();
    // Filter this.state.employees for employees with an id not equal to the id being removed

    const employees = this.state.employees.filter(employee => employee.department === this.state.search);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees: employees });
  };

  // Map over this.state.employees and render a FriendCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <SortBar
          handleSort={this.handleSort}
          handleSortDepartmentA={this.handleSortDepartmentA}
          handleSortDepartmentD={this.handleSortDepartmentD}
          handleInputChange={this.handleInputChange}
          Clear={this.handleClear}
          employees={this.state.employees}
        ></SortBar>
        <FilterBar
          handleFormSubmit={this.handleFilterSubmit}
          handleInputChange={this.handleInputChange}
          Clear={this.handleClear}
          departments={this.state.employees}
        ></FilterBar>
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            role={employee.role}
            department={employee.department}
            location={employee.location}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
