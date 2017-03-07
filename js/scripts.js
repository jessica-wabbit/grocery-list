$(document).ready(function() {
  $("#shopping-list form").submit(function(event) {

    var items = ["item1", "item2", "item3", "item4", "item5", "item6"];

    //var upList = items.map(function(object) {
    //$ (object).toUpperCase();
    //});

    upList.forEach(function(item) {
      var userInput = $("input#" + item).val();
      $("." + item).text(userInput);
    })

    //still need to sort and toUpperCase items/grocery list...

    //var upList = gList.map(function(item) {
    //  return item.toUpperCase();
    //});

    //upList.sort()


    $("#shopping-list").hide();
    $("#a-list").show();


    event.preventDefault();
  });
});
