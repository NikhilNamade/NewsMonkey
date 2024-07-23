import React, { Component } from 'react'
import News from './Newsitem'
// import Spinner from './spinner'
import PropTypes from 'prop-types';
export class New extends Component {
  static defaultProps = {
    pagesize : 8,
    country:"in",
    category:"sport"
  }
  static propTypes = {
    pagesize:PropTypes.number,
    category:PropTypes.string,
    country:PropTypes.string
  }
  capital = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  article  = []
  constructor(props){
    super(props)
    this.state = {
      article:[],
      loading:false,
      page:1,
      
    }
    document.title = `${this.capital(this.props.category)}-News Monkey`;
  }
  async updateNew () {
    // {this.props.setProgress(10)}
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    // {this.setState({loading : true})}
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      article:parseData.articles, 
      totalResults:parseData.totalResults,
      loading :false
    })
    // {this.props.setProgress(100)}
  }
  async componentDidMount(){
    this.updateNew();
  }
  handlenext = async()=>{
    this.setState({page:this.state.page+1});
    this.updateNew();
  }
  handleprevious = async() =>{
    this.setState({page:this.state.page0-1});
    this.updateNew();
  }
  render() {
   
    return (
     <div className="container my3">
       <h1 className='text-center  my-3'>NewMonky-Top {this.capital(this.props.category)} HeadLines  </h1>
      {/* { this.state.loading && <Spinner/>} */}
      <div className='row'>
     
      {!this.state.loading && this.state.article.map((element)=>{
         
       return <div className="col-md-4" key={element.url}>
       <News title={element.title?element.title:"404"} colour={this.props.colour}discription = {element.description?element.description:"404"} source = {element.source.name?element.source.name:""}date = {element.publishedAt?element.publishedAt.slice(0,10):""} author={element.author?element.author:""} imageurl={!element.urlToImage?"https://sitechecker.pro/wp-content/uploads/2017/12/404.png":element.urlToImage} newsurl={element.url}/>
      </div>
    })}
  
 
      </div>
        <div className="container d-flex justify-content-between my-3" >
        <button type="button" disabled = {this.state.page <=1} className="btn btn-dark" onClick={this.handleprevious}>Previous</button>
        <button type="button" disabled ={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)} className="btn btn-dark" onClick={this.handlenext}>Next</button>
        </div>
     </div>
    )
  }
}

export default New