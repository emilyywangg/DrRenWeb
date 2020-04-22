import React, { Component } from "react";
import "./index.css";
import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import CustomNavBar from "./components/CustomNavBar";
import CustomFooter from "./components/CustomFooter";
import Pagination from "./components/Pagination";
import DisplaySlide from "./components/DisplaySlide";
import ImageDisplay from "./components/ImageDisplay";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import data from "./components/data/data.js";
import FrontPageNav from "./components/FrontPageNav";
import SearchResultNav from "./components/SearchResultNav";

export default class App extends Component {
  state = {
    allDisplays: [],
    currentDisplays: [],
    searchDisplays: [],
    currentPage: null,
    totalPages: null,
    inputValue: "",
    error: null,
    isShuffle: true,
  };

  componentWillMount() {
    const { data: allDisplays } = { data };
    this.setState({ allDisplays });
    this.shuffleArray(allDisplays);
  }

  componentDidMount() {
    const { allDisplays } = this.state;
    fetch("http://beautifulplacestosee.com/api")
      .then((res) => res.json())
      .then(
        (result) => {
          var resultItems = result;
          resultItems.forEach((element) => {
            var displayData = allDisplays.find(
              (display) => display.id === element.id
            );
            if (displayData != undefined && displayData !== null) {
              displayData.likes = element.Likes;
              // console.log("find the id after call api!", element.id);
            } else {
              console.log("can't find, in client displayData js", element.id);
            }
          });
          this.setState({ allDisplays });
        },
        (error) => {
          console.error("getting error calling api ", error);
          // this.setState({
          //   // isLoaded: true,
          //   error
          // });
        }
      );
  }

  handleLikes = (e, data) => {
    const { allDisplays } = this.state;
    // console.error("handleLikes ", data);
    var displayData = allDisplays.find((display) => display.id === data.id);

    if (displayData != undefined && displayData !== null) {
      displayData.likes = data.likes + 1;
      console.log("added one, the like number is!", displayData);
    } else {
      console.log("can't find cliclked one");
    }
  //  var reqBody = {
  //    id: displayData.id,
  //    likes: displayData.likes
  //  }
//   var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
//   targetUrl = 'http://catfacts-api.appspot.com/api/facts?number=99'
//   fetch(proxyUrl + targetUrl)
//     .then(blob => blob.json())
//     .then(data => {
//   console.table(data);
//   document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
//   return data;
// })
// .catch(e => {
//   console.log(e);
//   return e;
// });


    
    const requestOptions = {  
      method: 'POST',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        id: displayData.id,
        likes: displayData.likes,
      })
    };

    fetch('http://beautifulplacestosee.com/post', requestOptions)
      .then(response => response.json())
      // .then(data => this.setState({ postId: data.id }));


  //  fetch('http://beautifulplacestosee.com/post', {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     id: displayData.id,
  //     likes: displayData.likes,
  //   })
  // })
    this.setState({
      isShuffle: false,
      allDisplays,
    });
  };

  onPageChanged = (data) => {
    const { allDisplays } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentDisplays = allDisplays.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentDisplays, totalPages });
  };

  appHandleClick(event) {
    const { allDisplays } = this.state;
    const { inputValue } = this.state;
    const { currentDisplays } = this.state;
    console.error("App get value =", inputValue);

    var copyInput = inputValue.repeat(1).split(" ").join("");
    console.error("App new value =", copyInput);
    // console.error("This is the copy ", copyInput);
    // var fixed = "Timothy Hill";
    // fixed = fixed.replace(/\s/g,'');
    // console.error(fixed);
    // console.error(copyInput.localeCompare(fixed));
    // console.error("Timothy Hill Overlook".includes(copyInput));

    // for (var c=0; c<copyInput.length; c++) {
    //   if (copyInput.charCodeAt(c) != fixed.charCodeAt(c)) {
    //       console.error('c:'+c+' '+copyInput.charCodeAt(c)+'!='+fixed.charCodeAt(c));
    //   }
    // }
  

    // console.error("before finding");
    // const tempData = allDisplays.find(e => e.id === 51);
    // console.error("Get temp value =", tempData.name);
    // console.error("Timothy Hill Overlook" === tempData.name);

    const searchDisplays = allDisplays.filter((data) => 
      data.name.toUpperCase().replace(/\s/g,'').includes(copyInput.toUpperCase())
    );
    console.error("before set state searchDisplays =", searchDisplays);
    this.setState({ searchDisplays });
    console.error("after setState searchDisplays =", this.state);
  }

  appHandleInputValue(evt) {
    console.log("Input Value is ", this.state.inputValue);
    this.setState({
      inputValue: evt.target.value,
    });
  }

  shuffleArray(array) {
    console.error("in shuffleArray() ", array);
    const { isShuffle } = this.state;
    if (isShuffle) {
      let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    return array;
  }

  onShuffle = (data) => {
    const { allDisplays } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentDisplays = allDisplays.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentDisplays, totalPages });
  };

  render() {
    const {
      allDisplays,
      currentDisplays,
      searchDisplays,
      likesNumber,
      error,
      isShuffle,
    } = this.state;
    const totalDisplays = allDisplays.length;

    if (totalDisplays === 0) return null;

    const shuffledPosts = this.shuffleArray(currentDisplays);

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <CustomNavBar
                handleInputValue={(event) => this.appHandleInputValue(event)}
                handleClick={(event) => this.appHandleClick(event)}
              />
              <FrontPageNav />
              <DisplaySlide />
              {shuffledPosts.map((imgD) => (
                <ImageDisplay
                  imageData={imgD}
                  likes={likesNumber}
                  handleLikes={(e, data) => this.handleLikes(e, data)}
                />
              ))}
              <Pagination
                totalRecords={totalDisplays}
                pageLimit={9}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}
              />
            </Route>
            <Route>
              <SearchResultNav />

              {searchDisplays.map((imgD) => (
                <ImageDisplay
                  imageData={imgD}
                  likes={likesNumber}
                  handleLikes={(e, data) => this.handleLikes(e, data)}
                />
              ))}
            </Route>
          </Switch>
          <CustomFooter />
        </div>
      </Router>
    );
  }
}
