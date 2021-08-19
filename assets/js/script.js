console.log("hello");
var liveTime = document.querySelector('.lead');





var timer = setInterval(function () {

    var currTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss");
    liveTime.textContent = currTime;

}, 1000); // 10000ms = 1s





//$(".lead").text(currTime);