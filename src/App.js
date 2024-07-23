import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from  "react-router-dom";

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API;
 state = {
  progress:0
 }
 setProgress = (progress)=>{
  this.setState({progress:progress})
 }
  render() {
    return (
      <>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="general"  colour="primary"  pagesize = {6} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="business"  colour="secondary"  pagesize = {6} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="entertainment"  colour="success"  pagesize = {6} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="general"  colour="danger"  pagesize = {6} country="in" category="general"/>}></Route>
          <Route exact path="/health" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="health"  colour="warning"  pagesize = {6} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="science"  colour="info"  pagesize = {6} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="sports"  colour="dark"  pagesize = {6} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="technology"  colour="dark"  pagesize = {6} country="in" category="technology"/>}></Route>
        </Routes>
      </Router>
      </>
    )
  }
}


