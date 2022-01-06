import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import $ from 'jquery'
import Todos from './Components/Todos'

class App extends React.Component {
  constructor(){
    super();
        this.state = {
            projects: [],
            todos: []
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state)
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err)
      }
    })
  }

  getProjects(){
    this.setState({projects: [
                {
                    id: uuidv4(),
                    title: 'Business Website',
                    category: 'Web Design',
                },
                {
                    id: uuidv4(),
                    title: 'Social App',
                    category: 'Mobile Development',
                },
                { 
                    id: uuidv4(),
                    title: 'Ecommerce Shopping Cart',
                    category: 'Web Development',
                }
            
    ]});
  }

  componentDidMount(){

  }

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }
  
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects})
  }

  render() { // required lifecycle method
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects}/>
        <hr />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
