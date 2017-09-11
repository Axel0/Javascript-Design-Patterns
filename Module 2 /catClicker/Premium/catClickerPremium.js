/* Model */
var model={
    currentCat:null,
    cats:[
      {
        clicks:0,
        name:"Joe",
        src:"http://www.eticamente.net/wp-content/uploads/2016/11/gatto-1024x768.png",


      },
      {
      clicks:0,
      name:"John",
      src:"http://www.focus.it/site_stored/imgs/0004/022/wjvandeneijkhof.900x600.jpg"
    },
    {
      clicks:0,
      name:"Jack",
      src:"https://static.fanpage.it/wp-content/uploads/sites/5/2017/01/gatti-australia-638x425.jpg"
    }
    ]
};



/*Octopus*/
var octopus={
  init:function(){
    model.currentCat=model.cats[0];
    listView.init();
    catView.init();
    console.log("Init");
  },

   getCurrentCat:function(){
     return model.currentCat;
   },

   getAllCats:function(){
     return model.cats;
   },


   setCurrentCat:function(cat){
     model.currentCat=cat;
     catView.render();
   },

   incrementClickCounter:function(){
     model.currentCat.clicks++;
     catView.render();
   }


}

/*Views*/

var listView={

  init:function(){
    this.$list=$("#list");
    this.render();
  },
  render:function(){
    var cats=octopus.getAllCats();

    this.$list.append("<ul>");
    for (var i=0; i<cats.length; i++){

      var current=cats[i];
      this.$list.append("<li><a id='a"+i+"' href='#')>"+cats[i].name+"</a></li>");
      $("#a"+i).click((function(cat){
        return function(){
          octopus.setCurrentCat(cat);
        }
      })(current))
    }

   this.$list.append("</ul>");
  }


}


var catView={
  init:function(){
    this.$view=$("#currentCat");
    this.render();
  },
  render:function(){
    var current=octopus.getCurrentCat();
    var name="<p>"+current.name+"</p>";
    var clicks="<p>Clicks:"+current.clicks+"</p>";
    var image="<img src='"+current.src+"' onClick='octopus.incrementClickCounter()' />";
    this.$view.html(name+clicks+image);
  }
}

/*Start*/

$(document).ready(function(){
  octopus.init();
})
