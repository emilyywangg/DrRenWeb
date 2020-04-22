import React, { Component } from 'react'

export default class CustomFooter extends Component{
    render(){
        return(
            <footer className="sit-footer">
                <div className="col-12 col-md-6 col-xl-3">
                </div>
                <div className="footer-bar">
                    <div className="outer-container">
                        <div className="container-fluid">
                            <div className="footer-copyright">
                                <p>Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script> Summerville Dental
                                    Office Copyright. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
        