/*  
Starter JS
==========

Starter tempalte for JS projects

(Shaun A. Noordin || shaunanoordin.com || 20160509)
********************************************************************************
 */

//import {ImportExample} from "./importExample.js";

/*  Primary App Class
 */
//==============================================================================
class App {
  constructor() {
    this.html = {
      video: document.getElementById("live-video"),
      console: document.getElementById("console"),
    };
    
    navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then((stream) => {
      console.log("VIDEO OK", stream);
      this.print("VIDEO OK");
      
      this.html.video.srcObject = stream;
      this.html.video.onloadedmetadata = (e) => {
        this.html.video.play();
      };
    })
    .catch((err) => {
      console.error(err);
      this.print("VIDEO ERROR");
    });
  }
  
  print(msg) {
    const p = document.createElement("p");
    p.innerHTML = msg;
    this.html.console.appendChild(p);
  }
  
  clear() {
    this.html.console.innerHTML = "";
  }
}
//==============================================================================

/*  Initialisations
 */
//==============================================================================
var app;
window.onload = function() {
  window.app = new App();
};
//==============================================================================
