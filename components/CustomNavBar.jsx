import React, { Component } from 'react';
import './CustomNavBar';
import SearchBar from './SearchBar';

export default class CustomNavBar extends Component{
    handleChange(event) {
        console.error('get value =',event.target.value)
      }

    render(){
        return(
            <header className="site-header">
            <div className="top-header-bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 flex align-items-center">
                            <div className="header-bar-text d-none d-lg-block">
                                <p>Summerville Dental Photography</p>
                            </div>

                            <div className="header-bar-email d-none d-lg-block">
                                <a href="#">info@summervilledental.ca</a>
                            </div>
                        </div>

                        <div
                            className="col-12 col-lg-6 flex justify-content-between justify-content-lg-end align-items-center">
                            
                            <SearchBar 
                                onChange = {evt => this.props.handleInputValue(evt)}
                                onClick = {evt => this.props.handleClick(evt)}
                                // allDisplays2={this.props.allDisplays}
                                // currentDisplays2={this.props.currentDisplays}
                                // inputValue2= {this.props.inputValue}
                                // onChange={(event) => this.props.handleChange(event)}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </header>
        )       
    }
}