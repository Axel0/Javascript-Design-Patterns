var clicks={
  "john":0,
  "miao":0,
  "joe":0,
  "james":0
};
$(document).ready(function(){
  var $body=$("body");
  var cats={
    "john":"http://www.eticamente.net/wp-content/uploads/2016/11/gatto-1024x768.png",
    "miao":"http://www.focus.it/site_stored/imgs/0004/022/wjvandeneijkhof.900x600.jpg",
    "joe":"https://static.fanpage.it/wp-content/uploads/sites/5/2017/01/gatti-australia-638x425.jpg",
    "james":"https://www.bergamonews.it/photogallery_new/images/2016/12/gatto-560506.660x368.jpg"
  };

  var elements=Object.keys(cats);

  for (var i=0; i<elements.length; i++){
    var element="<center><p>"+elements[i].toUpperCase()+"</p>"+"<img onClick='aclick("+i+")' src='"+cats[elements[i]]+"'/><p id="+elements[i]+">"+clicks[elements[i]]+"</p><hr/></center>";

    $body.append(element);

  }


})

function aclick(index){
  var current=Object.keys(clicks)[index];
  clicks[current]=clicks[current]+1;
  var toUpdate="#"+(current);
  $(toUpdate).text(clicks[current]);

}
