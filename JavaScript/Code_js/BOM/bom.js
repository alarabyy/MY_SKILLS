//========================================================================================================
    var Win;
    
    function openNewWindow() {
        Win = window.open("./children.html", "", "width=50,height=10");

    }
    function closeNewWindow() {
        if (Win && !Win.closed) {
            Win.close();
        } else {
            alert("alredt closed");
        }
    }
    function ChangeBackeGround() {

        Win.document.body.style.background = "yellow"; 
        Win.focus();

        }
    
function movedby() {
    Win.moveBy(15, 25);
    Win.focus();    
}

function resizeby() {
    Win.resizeBy(100, 50);
    Win.focus();    
}
function scrollby() {

    Win.scrollBy(50);
    Win.focus();
}

//========================================================================================================
//========================================================================================================


var time;
function start_alert() {

    time = setInterval(function(){
        alert("hello");
    }, 100000);
}
function start_alert() {

    time = setTimeout(function(){
        alert("hello");
    }, 100000);
}
function stop_alert() {

    clearInterval(time);
}


//========================================================================================================
//========================================================================================================
                                {/* <h1>history object</h1> */}
history.length();
history.back = 0;
history.forward = 0;
history.backup = 0;
history.go = 0;


//========================================================================================================
//========================================================================================================
                                {/* <h1>location object</h1> */}

location.href();
location.protocol();
location.host();
location.path();
location.pathname();
location.search();
location.reload();

//========================================================================================================
//========================================================================================================
                                {/* <h1>navigator object</h1> */}   //inforamtion


navigator.cookieEnabled = true;
navigator.appVersion;
navigator.appName;
navigator.userAgent;
navigator.language;
navigator.onLine;
navigator.platform;
navigator.userAgent

//========================================================================================================
//========================================================================================================
