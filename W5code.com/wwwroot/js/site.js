/*************************************
* Setup a server on port 3000
*************************************/
function addMessage(data) {
    var monthname = ['Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug', 'Sept',
        'Oct', 'Nov', 'Dec'];

    var date = new Date();
    var today = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var hour = date.getHours();
    var min = date.getMinutes();

    //    console.log(monthname[month]);
    $("#output").append(`<div class="row card-2 white padding">
                           <div class="col m2 text-center">
                              <img class="circle" src="images/user.png" style="width:96px;height:96px">
                            </div>
                             <div class="col m10 container ">
                             <h4> ${data.name} <span class="opacity medium"> ${monthname[month]},  ${year}, ${hour}:${min}</spa></h4>
                              <p>${data.message}</p><br>
                            </div>
                     </div><br>`);
}

function getMessage() {
    $.get("http://localhost:3000/clone-index.html", function (data) {
        //     data.forEach(addMessage);
    });
}

function postMessage(message) {
    $.post("http://localhost:3000/clone-index.html", message);
}


function longin() {
    var userName = $("#userName");
    var password = $("#password");
    var fbtn = $(".fbtn");
    var popupTxt = $("#popupTxt");

    fbtn.click(function () {
        if (userName.val() === "imak" && password.val() === "imaklogin") {
            $("#courses").css({ 'display': "block" });
            $("#signIn").hide();
            $("#popupTxt").hide();
            console.log("Success!");
        } else {
            popupTxt.css({ 'display': "block" });
            console.log("Erro!");
        }

        $(userName, password).keydown(function () {
            popupTxt.hide();
        })
    })

}

function cleanup() {
    document.querySelector("#name").value = "";
    document.querySelector("#message").value = "";
}


function feedback() {
    var submit = $("#submit");

    submit.click(function () {
        var message = { name: $("#name").val(), message: $("#message").val() };

        if ($("#name").val() === "") {
            $("#popupTxt2").css({ 'display': "block" });
        } else if ($("#message").val() === "") {
            $("#popupTxt2").css({ 'display': "block" });
        }

        else {
            addMessage(message);
            cleanup();
        }

        $("#name, #message").keydown(function () {
            $("#popupTxt2").hide();
            console.log("blur");
        })

    });

    $("#cancle").click(function () {
        $("#signIn").hide();
        $("#popupTxt").hide();
    })
}

$(function Main() {
    getMessage();
    longin();
    feedback();
    console.log("Loaded!");
})
