var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
  recognition.start();
}
recognition.onresult= function run(event){
    console.log(event);
    var Content= event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    if (Content == "take my selfie"){
      console.log("taking selfie");
      speak();
    }
    
}

function speak() {
  var synth= window.speechSynthesis;
  speak_data= "Taking Selfie In 5 Seconds";
  var utterThis= new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  Webcam.attach(camera);
  setTimeout(function(){
    take_Snapshot();
    save();
  },5000);
}

Webcam.set({
  width: 350,
 height: 270,
 image_format: 'png',
 png_quality: 0
});
camera= document.getElementById("camera");



function take_Snapshot(){
Webcam.snap(function(data_uri) {
  document.getElementById("result").innerHTML= "<img id='selfie_img' src= " + data_uri +" >";
});
}

function save() {
  link= document.getElementById("link");
  image= document.getElementById("selfie_img").src;
  link.href=image;
  link.click();
}
