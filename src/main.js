/*  
Starter JS
==========

Starter tempalte for JS projects

(Shaun A. Noordin || shaunanoordin.com || 20160509)
********************************************************************************
 */

/*  Primary App Class
 */
//==============================================================================
class App {
  constructor() {
    this.html = {
      video: document.getElementById("video"),
      canvas: document.getElementById("canvas"),
      console: document.getElementById("console"),
      captureButton: document.getElementById("capture-button"),
    };
    
    this.context = this.html.canvas.getContext("2d"),
    this.videoWidth = 0;
    this.videoHeight = 0;
    
    navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then((stream) => {
      console.log("VIDEO OK", stream);
      this.print("VIDEO OK");
      
      this.html.video.srcObject = stream;
      this.html.video.onloadedmetadata = (e) => {
        this.html.video.play();
        this.videoWidth = this.html.video.videoWidth;
        this.videoHeight = this.html.video.videoHeight;
        this.html.canvas.width = this.videoWidth;
        this.html.canvas.height = this.videoHeight;
        this.print('Video size is ' + this.videoWidth + 'x' + this.videoHeight);
      };
    })
    .catch((err) => {
      console.error(err);
      this.print("VIDEO ERROR");
    });
    
    this.html.captureButton.onclick = () => {
      this.captureImage();
      this.print("SNAPSHOT!");
    };
  }
  
  captureImage() {
    if (this.videoWidth > 0 && this.videoHeight > 0) {
      this.context.drawImage(this.html.video, 0, 0, this.videoWidth, this.videoHeight);
    }
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
