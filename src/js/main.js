import "./lib/lib";
import $ from "./lib/lib";

$("button").on("click", function () {
  $("div").eq(2).toggleClass("active");
});

/*$("div").click(function () {
  console.log($(this).index());
});*/

//console.log($("div").eq(2).find(".some"));

//console.log($("button").html("hello"));

//console.log($(".some").closest(".findmeq"));

//console.log($(".findme").siblings());

//$("button").fadeIn(1800);

$("#first").on("click", () => {
  $("div").eq(1).fadeToggle(800);
});

$('[data-count="second"]').on("click", () => {
  $("div").eq(2).fadeToggle(800);
});

$("button")
  .eq(2)
  .on("click", () => {
    $(".w-500").fadeToggle(800);
  });
