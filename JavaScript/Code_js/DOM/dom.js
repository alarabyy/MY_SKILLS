//========================================================================================================
//========================================================================================================
//========================================================================================================
//========================================================================================================
//========================================================================================================
                                {/* <h1>DOM hierarcky</h1> */}
// <html >  // parent container

// <head>   // first child container
// </head>

//<div>                           // parent container
//   <h1>My First Heading</h1>    // first child container
//  <p>My first paragraph.</p>    // last child container
//</div> 


// <body>    // last child container
// </body>

// </html>

//========================================================================================================
//========================================================================================================
                                {/* <h1>DOM relations</h1> */}
                                
// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelectorAll();
// document.querySelector();


// getComputedStyle(); 

//===============================

function changecolor(){
    var elemnt = document.querySelectorAll(".inputs");
    for (var i = 0; i < elemnt.length; i++) {
        elemnt[i].style.backgroundColor = "red";
    }
}

//========================================================================================================
//========================================================================================================
                                {/* <h1>DOM innerhtml</h1> */}

document.getElementById("divone").innerHTML = "<strong>you are welcome </strong";

document.getElementById("divtwo").innerHTML = "<h1>welcome</h1>";

document.getElementById("divthree").innerText = "DOM innerhtml";

//======================================
function changecolor() {
document.getElementById("divone").classList.remove("divone");
document.getElementById("divone").classList.add("divone1");
}
//========================================================================================================
                                  {/* <h1>create DOM node </h1> */}
//========================================================================================================
//========================================================================================================
                                   {/* <h1>create DOM cookies</h1> */}
                                //    cookie as a text  file
// cookie persistent  = as expire time 
// cookie sesion = locken when  web as a close 

