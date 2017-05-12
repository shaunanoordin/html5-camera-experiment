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
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then((stream) => {
      console.log("STREAM OK", stream);
      
      const htmlVideo = document.getElementById("live-video");
      htmlVideo.srcObject = stream;
      htmlVideo.onloadedmetadata = function(e) {
        htmlVideo.play();
      };
      
    })
    .catch((err) => {
      console.error(err);
    });
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
