console.log("hello");

//Storing HTML Elements to Variables//
var modalB = $("#modalB");
var closeM = $(".close");

//Onclick Event to Show Modal//
modalB.on("click", openModal);
closeM.on("click", closeModal);

//Function to Show Modal//
function openModal(){
    $(function () {
        $('#modalOne').modal("show");
    });
}

//Function to Exit out of Modal//
function closeModal(){
    $(function () {
        $('#modalOne').modal("hide");
    });
}
