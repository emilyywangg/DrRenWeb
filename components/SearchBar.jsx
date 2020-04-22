import React , {Component} from "react";
import { MDBCol, MDBFormInline, MDBBtn, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";

export default class SearchBar extends Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     inputValue: ''
  //   };
  // }

    onSubmit(){
      const { allDisplays } = this.props.allDisplays2;
      console.error("App get value =", this.props.inputValue2);
    
        allDisplays = allDisplays.filter(data =>
              data.name.toUpperCase().includes(this.props.inputValue2.target.value.toUpperCase())
            );
        this.setState({ currentDisplays: allDisplays})
    }

    render(){
        return (
              
            <MDBCol md="6">
              <MDBFormInline className="md-form ">
                <input className="form-control form-control-sm ml-3 w-65" type="text" 
                    placeholder="Search" aria-label="Search" 
                    onChange={evt => this.props.onChange(evt)}
                    // value={this.state.inputValue}
                    // onChange={(e) => this.props.onChange(e)}
                    />
                <Link to="/search">
                <MDBBtn className = "search-button" color="unique" 
                  rounded size="sm" type="submit" className="mr-auto" 
                  onClick={event => this.props.onClick(event)}>
                     Search
                 </MDBBtn>
                 </Link>
              </MDBFormInline>
            </MDBCol>
          );
    }
}

