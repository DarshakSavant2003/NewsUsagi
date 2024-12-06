import React, { Component } from 'react'

 const Items =(props)=> {
  
    let {title,description,imageUrl,newsurl,author,time}=props
    return (
      <div>

        <div className="card" style={{marginBottom:"3rem"}}>
  <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2024/07/03/550x309/hathras_1720007546712_1720007546973.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small class="text-muted">by {!author?"unknown":author} on {new Date(time).toGMTString()}</small></p>
    <a href={newsurl} target="_blank" className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
export default Items
