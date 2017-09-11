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
     showAdminView.hide();
     catView.render();

   },

   incrementClickCounter:function(){
     model.currentCat.clicks++;
     catView.render();
     showAdminView.render();
   },
   modifyCurrentCat:function(name,clicks,img){
    model.currentCat.name=name;
    model.currentCat.clicks=clicks;
    model.currentCat.src=img;
    showAdminView.hide();
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
    var adminButton="<hr/><button onClick='showAdminView.init()'>Admin</button><br/>"
    this.$view.html(name+clicks+image+adminButton);
  }

}

var showAdminView={
  init:function(){
    this.$adminArea=$("#adminArea");
    this.render();
    this.show();

  },
  show:function(){
    this.$adminArea.show();
  },
  hide:function(){
    this.$adminArea.hide();
  },
  render:function(){

    var currentCat=octopus.getCurrentCat();
    var name="<input type='text' id='name' size='60' name='Name' placeholder='"+currentCat.name+"'/>Name</input>";
    var image="<input id='image' type='url' size='60' name='Image' placeholder='"+currentCat.src+"'/>URL</input>";
    var clicks="<input id='clicks' type='number' size='60' name='clicks' placeholder='"+currentCat.clicks+"'/>Clicks</input>";

    var inputForm="<form>"+name+"<br/>"+image+"<br/>"+clicks+"<br/></form>";
    var buttons="<button id='cancel'>Cancel</button><br/><button id='save'>Save</Save>";
    this.$adminArea.html(inputForm+buttons);
    $("#cancel").click(function(){
      showAdminView.hide();
    });

    $("#save").click(function(){
      octopus.modifyCurrentCat($("#name").val(),$("#clicks").val(), $("#image").val());

    });




  }
}

/*Start*/

$(document).ready(function(){
  octopus.init();
})
