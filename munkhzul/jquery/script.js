$("#right").click(function () {
    $(".block").animate({
        "left": "+=300px"
    }, "slow");
});

$("#left").click(function () {
    $(".block").animate({
        "left": "-=300px"
    }, "slow");
});

$("#down").click(function () {
    $(".block").animate({
        "top": "+=300px"
    }, "slow");
});

$("#up").click(function () {
    $(".block").animate({
        "top": "-=300px"
    }, "slow");
});

