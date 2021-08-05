class Form{
  constructor(){
      this.input=createInput("").attribute("placeholder","Enter youe name!");
      this.greeting=createElement("h3");
      this.button=createButton("Start!");
      this.start=createButton("start the game")
  }
   
  hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.start.hide()
  }
  
  display(){
  this.input.position(width/2-100,height-200);
  this.greeting.position(width/2-200,height-200);
  this.button.position(width/2-80,height-150);
  this.start.position(width-100,height-150);
  
  this.button.mousePressed(()=>{
      this.input.hide()
      this.button.hide()
   
      var message=this.input.value()
      this.greeting.html("hello"+message)
  
      background(background2Img)
  })
   this.start.mousePressed(()=>{
  background(background2Img)
  background2.visible=true
  background1.visible=false
  this.start.hide()
  this.greeting.hide()
  var p=createElement("h2")
  p.position(width-100,height-150)
  p.html("press r to make the lion run");
   })
  
  
  }
  
  }