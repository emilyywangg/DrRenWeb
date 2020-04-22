import React , {Component} from "react";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

export default class SearchResultNav extends Component{
    render(){
        return(
            <div className="search-container">
                
            <div className="row">
            
                <div className="col-12 search-header">
                <Link to ='/'>
            <Button variant="outline-secondary" 
                >Back</Button>
                </Link>
                    <div className="site-branding flex flex-column align-items-center">
                        
                        <h5 className="site-title">Search Results</h5>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}