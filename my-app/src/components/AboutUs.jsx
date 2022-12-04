// import React, {useState} from "react";
import React from "react";

function AboutUs(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
      color: props.mode ==='dark'?'white':'#252f49',
      backgroundColor: props.mode ==='dark'?'#252f49':'white'
    }



    // const [btntext, setBtntext] = useState("Enable Dark Mode")

    // const toggleStyle = () =>{
    //     if(myStyle.color == 'black'){
    //     setMyStyle({
    //         color: 'white',
    //         backgroundColor: 'black',
    //         border: '1px solid white'
    //     })
    //     setBtntext('Enable Light Mode')
    //   }
    //   else{
    //     setMyStyle({
    //         color: 'black',
    //         backgroundColor: 'white'
    //     })
    //     setBtntext("Enable Dark Mode");
    //   }    
    // }

  return (
    <div className="container" style={myStyle}>
        <h2>About Us</h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            <strong>React Js</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
            React Declarative. React makes it painless to create interactive UIs. Component-Based. Build encapsulated components that manage their own state,
            </div>
          </div>
        </div>
        <div class="accordion-item" >
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            <strong>Javascript</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
            JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            <strong>React Native</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
            React Native lets you create truly native apps and doesn't compromise your users' experiences. It provides a core set of platform agnostic native components
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
      <button onClick={toggleStyle} type="button" class="btn btn-primary">{btntext}</button>
      </div> */}
    </div>
  );
}
export default AboutUs;
