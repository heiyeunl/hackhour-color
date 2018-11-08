//console.log('hi')
let penColor = 0
let penWidth = 4;


  function setup() {
// put setup code here
// code sets up canvas
    console.log('sketch started')
    let c = createCanvas(windowWidth,document.body.clientHeight);
    c.style = ('pointer-events', 'none')
    c.position(0,0);
  //  let newCanvas = createCanvas(document.body.clientWidth, document.body.clientHeight);
  //  newCanvas.style = ('pointer-events', 'none')
  //  newCanvas.position(0,0);
  //  clear();
    Width = createElement('h4', 'width');
    Width.position(170, 5);

    WSlider = createSlider(1,3,8);
    WSlider.position(20,20);


    red = createElement('h4', 'red');
    red.position(170,35)
    rSlider = createSlider(0, 255, 100);
    rSlider.position(20, 50);
    blue = createElement('h4', 'blue');
    blue.position(170,75)
    bSlider = createSlider(0, 255, 255);
    bSlider.position(20, 90);
    green = createElement('h4', 'green');
    green.position(170,105)
    gSlider = createSlider(0, 255, 0);
    gSlider.position(20, 120);

    button1 = createButton('clear');
    button1.position(20, 150);
    button1.mousePressed(reset);


  }

  function draw() {

    stroke(rSlider.value(),gSlider.value(),bSlider.value());
    strokeWeight(WSlider.value());
         if (mouseIsPressed) {
         line(mouseX, mouseY, pmouseX, pmouseY);
   }
// put drawing code here
  }

//code for screenshotting

  function reset() {
    clear();
  }

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message);
}

//chrome.tabs.captureVisibleTab(null, {}, function (image) {
   // You can add that image HTML5 canvas, or Element.
//});