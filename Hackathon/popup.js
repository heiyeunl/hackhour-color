//let widthInput = document.getElementsByTagName('div')[0].getElementsByClassName('inputtext')[0]

window.onload = function () {
function setup() {
	console.log('hi')
	noCanvas();
	input = createInput();
  	input.position(20, 65);
  	button = createButton('submit');
  	button.position(input.x + input.width, 65);
  	button.mousePressed(console.log('hi'));

}
}
