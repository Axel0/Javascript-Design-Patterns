$(document).ready(function(){
  var i=0;
  var j=0;
  var catName="joe";
  var secondName="jack";
  var $cat=$(".cat");
  var $second_cat=$(".second_cat");
  $cat.find("#name").append(catName.toUpperCase());
  $cat.find("#cat").click(function(){
    i++;
    $cat.find("#times").text("Cliks:" + i);

  })
  $second_cat.find("#name2").append(secondName.toUpperCase());
  $second_cat.find("#second_cat").click(function(){
    j++;
    $second_cat.find("#times2").text("Cliks:" + j);

  })

})
