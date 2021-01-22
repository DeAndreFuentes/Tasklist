var detailvisible = true;
var important = false;
var hideIcon = `<i class="far fa-eye-slash"></i>`;
var showIcon = `<i class="far fa-eye"></i>`;


function toggleDetails(){
    if(detailvisible) {
    $("#details").hide();

    $("#btnDetails")
     .html(showIcon = "show details")
     .removeClass("btn-secondary")
     .addClass("btn-primary");

    detailvisible = false;

} else {

    $("#details").show();

    $("btnDetails")
    .html(hideIcon + "Hide details")
    .removeClass("btn-primary")
    .addClass("btn-secondary");

    detailvisible = true;
}

}

function toggleImportant(){
    if(important){
        $("#iconImp").removeClass("fas").addClass("far");
        important = false;


    }
    else{
        $("#iconImp").removeClass("far").addClass("fas");
        important = true;
    }

}

function init(){
$("#btnDetails").click(toggleDetails);
$("#iconImp").click(toggleImportant);

}

window.onload = inti; 