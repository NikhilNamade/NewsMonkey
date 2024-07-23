import React, { Component } from 'react'

export class newcomponent extends Component {
  render() {
    let{title,discription,imageurl,newsurl,date,author,source,colour}= this.props
    return (
      <div>
          <div className="card my-2" >
          <img src={imageurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title my-5">{title}</h5>
            <p className="card-text">{discription}</p>
            <p className="card-text"><small className={`text-${colour}`}>By {author} on {date}</small></p>
            <a href={newsurl} target="_blank" rel="noreferrer"className={`btn btn-sm btn-${colour}`}>Read More</a>
            <span className={`position-absolute top-0 start-50 translate-middle badge rounded-pill bg-${colour}`}>{source}<span className="visually-hidden">unread messages</span></span>
          </div>
      </div>
    </div>
    )
  }
}

export default newcomponent