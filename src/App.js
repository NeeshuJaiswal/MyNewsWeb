import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  pageSize=6;
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
           />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={'in'} category={'general'}/>}></Route>
            <Route exact path="/Home" element={<News setProgress={this.setProgress} key="general1" pageSize={this.pageSize} country={'in'} category={'general'}/>}></Route>
            <Route path="/Science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country={'in'} category={'science'}/>}></Route>
            <Route path="/Technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country={'in'} category={'technology'}/>}></Route>
            <Route path="/Entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country={'in'} category={'entertainment'}/>}></Route>
            <Route path="/Business" element={<News setProgress={this.setProgress} key="business"pageSize={this.pageSize} country={'in'} category={'business'}/>}></Route>
            <Route path="/Health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country={'in'} category={'health'}/>}></Route>
            <Route path="/Sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country={'in'} category={'sports'}/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

