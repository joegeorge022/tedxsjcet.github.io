function rotate() {
    // document.getElementById("l1").classList.toggle("rotate1");
    // document.getElementById("l2").classList.toggle("rotate2");
    document
        .getElementById("mob-nav")
        .classList.toggle("mobile-nav-active");
    document.getElementById("mob-nav-ul").classList.toggle("nav-ul-mob-toggle")
    // document.getElementById("main-sect-h1").classList.toggle("padding-nav")
    // document.getElementById("hero").classList.toggle("hero-nav")
}


const vid = document.getElementsByTagName('video')[0];


  function restartVideo(){
    vid.currentTime = 0.1; //setting to zero breaks iOS 3.2, the value won't update, values smaller than 0.1 was causing bug as well.
    vid.play();
    }
    
    //loop video
    vid.addEventListener('ended', restartVideo, false);