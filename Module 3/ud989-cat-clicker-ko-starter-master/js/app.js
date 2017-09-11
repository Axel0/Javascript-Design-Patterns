var initialCats=[
  {
    id:0,
    clickCount:0,
    name:"Tabby",
    imgSrc:"img/434164568_fea0ad4013_z.jpg",
    imgAttribution:'flickr',
    nicks:['Tabtab','T-Bone']
  },
  {
    id:1,
    clickCount:0,
    name:"Tiger",
    imgSrc:"img/22252709_010df3379e_z.jpg",
    imgAttribution:'flickr',
    nicks:['Tigger']
  },
  {
    id:2,
    clickCount:0,
    name:"Scaredy",
    imgSrc:"img/1413379559_412a540d29_z.jpg",
    imgAttribution:'flickr',
    nicks:['Casper']
  },
  {
    id:3,
    clickCount:0,
    name:"Shadow",
    imgSrc:"img/4154543904_6e2428c421_z.jpg",
    imgAttribution:'flickr',
    nicks:['Shooby']
  },
  {
    id:4,
    clickCount:0,
    name:"Sleepy",
    imgSrc:"img/9648464288_2516b35537_z.jpg",
    imgAttribution:'flickr',
    nicks:['Zzzzz']
  }
];

var Cat=function(data){
  this.clickCount=ko.observable(data.clickCount);
  this.name=ko.observable(data.name);
  this.imgSrc=ko.observable(data.imgSrc);
  this.imgAttribution=ko.observable(data.imgAttribution);
  this.nicks=ko.observableArray(data.nicks);



  this.level=ko.computed(function(){
    if (this.clickCount()<10){
      return "NewBorn";
    }
    else{
      return "Infant";
    }
  },this);

}

var ViewModel=function(){
  var self=this;

  this.catList=ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem));
  });

  this.currentCat=ko.observable(this.catList()[0]);

  this.incremeentCounter=function(){
    self.currentCat().clickCount(self.currentCat().clickCount()+1);

  };

  this.changeCurrent=function(clicked){
    self.currentCat(self.catList()[clicked.id])
  }
}

ko.applyBindings(new ViewModel());
