import React from 'react'

export default function About(props) {

    let myStyle = {
        color: "black",
        backgroundColor: props.mode === "dark" ? "#b9c1c8" : "white"
    }

    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "#b9c1c8"
    // })
    // const [btnText, setBtnText] = useState("Enable Light Mode")


    // const toggleStyle = () => {
    //     console.log("toggle clicked");
    //     if(myStyle.backgroundColor === "white") {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "#b9c1c8",
    //         })
    //         setBtnText("Enable Light Mode")
    //     } else {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white",
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

  return (
    <>
    <div className='container my-3 py-1' style={myStyle}>
        <h1>About us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third aitem's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="contailer my-3 mx-3">
            <button type="button" onClick={toggleStyle} className="btn btn-dark">{btnText}</button>
        </div> */}
    </div>
    </>
  )
}
