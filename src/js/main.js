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

$("#trigger").click(() => {
  $("#trigger").createModal({
    text: {
      title: "Modal title",
      body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Praesentium ea doloremque voluptatum fugit nulla amet iusto minus
      ipsam esse odit voluptatibus accusamus dolore blanditiis, magni
      asperiores cumque vero. Neque, eligendi.`,
    },
    btns: {
      count: 3,
      settings: [
        ["Close", ["btn-danger", "mr-10"], true],
        [
          "Save changes",
          ["btn-success"],
          false,
          () => {
            alert("Данные сохранены");
          },
        ],
        [
          "Another btn",
          ["btn-warning", "ml-10"],
          false,
          () => {
            alert("hello world");
          },
        ],
      ],
    },
  });
});
