$(document).ready(function () {
    $(".works").hide();

    //try switch case
    $("#react").click(function () {
        $("#soundstock").show();
        $("#shareposts").hide();
        $("#lemon").hide();
        $("#bamazon").hide();
        $("#default-img").hide();
    })

    $("#php").click(function () {
        $("#shareposts").show();
        $("#soundstock").hide();
        $("#lemon").hide();
        $("#bamazon").hide();
        $("#default-img").hide();
    })

    $("#javascript").click(function () {
        $("#lemon").show();
        $("#shareposts").hide();
        $("#soundstock").hide();
        $("#default-img").hide();
        $("#bamazon").hide();
    })

    $("#node").click(function () {
        $("#bamazon").show();
        $("#shareposts").hide();
        $("#soundstock").hide();
        $("#default-img").hide();
        $("#lemon").hide();
    })

    // var projArr = ["#bamazon", "#shareposts", "#soundstock", "#default-image", "#lemon"];
    // var lang ;
    // var proj = $(lang).click(function () {
    //     projArr.forEach(function (element) {
    //             $(lang).show();
    //             $(element).hide();
    //     })
    // })
    // switch (proj) {
    //     case "#react":
    //         lang = "#react";
    //         break;
    //     case "#php":
    //         lang = "#php";
    //         break;
    //     case "#javascript":
    //         lang = "#javascript";
    //         break;
    //     case "#node":
    //         lang = "#node";
    //         break;
    //     default:
    //         lang = "#default-img"
    // }


})