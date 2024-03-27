$("#write").click(function () {
  $("#message").append(
    " “Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.” "
  );
  $("#message").show();
});

$("#showhide").click(function () {
  $("html").toggle();
});
