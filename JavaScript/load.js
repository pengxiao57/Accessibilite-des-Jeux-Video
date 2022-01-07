//window.onload = function() 
$(document).ready(function ()
{
	$("header").load("https://pengxiao57.github.io/Accessibilite-des-Jeux-Video/Template/header.html");
    $("nav").load("https://pengxiao57.github.io/Accessibilite-des-Jeux-Video/Template/nav.html");
    $("footer").load("https://pengxiao57.github.io/Accessibilite-des-Jeux-Video/Template/footer.html");

    $("#btn_stop").click(function()
    {
        var pause = $("#i_stop").attr("class").includes("pause");
        console.log(pause)

        if (pause)
        {
            $('#div_carousel').carousel("pause");
            $("#i_stop").attr("class", "fa fa-play-circle fa-2x");
        }
        else
        {
            $('#div_carousel').carousel("cycle");
            $("#i_stop").attr("class", "fa fa-pause-circle fa-2x");
        }
    });
});
