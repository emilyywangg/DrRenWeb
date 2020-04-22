import React , {Component} from "react";

export default class FrontPageNav extends Component{
    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="site-branding flex flex-column align-items-center">
                        <h1 className="site-title">Beautiful Places to See</h1>
                        <p className="description">
                            Welcome to our photo gallery! Take a look at all the beautiful places we've traveled
                            worldwide.
                            Feel free to email your own pictures to info@summervilledental.ca and you'll see them
                            featured on this page!
                        </p>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}