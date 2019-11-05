/**
 * Created by orlando on 5/12/17.
 */

//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Click On X To Delete Todos
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing new todos text from input
        var todoTxt = $(this).val();
        $(this).val("");
        //create a new li add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoTxt + "</li>");
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});