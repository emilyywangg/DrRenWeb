import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Details from './Details'

export default class ImageDisplay extends Component {
  handleClick = (e, data) => {
    // access to e.target here
    window.open(data, "Google Map", "height=500, width=900, top=200, left=200");
  };

  increaseCount = (e, id)=>{
    console.error("I like number ", id);
  }


  render() {
    return (
      <div className="content-wrap">
        <header>
          <h2 className="entry-title">{this.props.imageData.name}</h2>
        </header>

        <div className="entry-content">
          <p>{this.props.imageData.cardText} | Likes: {this.props.imageData.likes}</p>
        </div>

        <button
          type="button"
          className="map-btn btn btn-sm btn-outline-secondary"
          onClick={e => this.handleClick(e, this.props.imageData.googleMap)}
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Map
        </button>

        <Details name={this.props.imageData.name} nearestTown={this.props.imageData.nearestTown}/>

        <button type="button"
          className="map-btn btn btn-sm btn-outline-secondary btn-details"
          onClick = {e => this.props.handleLikes(e, this.props.imageData)}

          // {e=> this.increaseCount(e, this.props.imageData.id)}
          >
            <FontAwesomeIcon icon={faHeart} />  Like
          </button>

        <figure className="featured-image">
          <img src={this.props.imageData.imageURL}></img>
        </figure>
      </div>
    );
  }
}
