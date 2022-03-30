let laranjas;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)

}

function draw() {

	background(0)
	if(mouseY>=height/2 && mouseX<=width/2) {
	
		fill(93,155,155); //azul
	}	
else if (mouseY<height/2 && mouseX<=width/2) {

	fill (178,34,34); //vermelho
}
else if(mouseY<height/2 && mouseX>width/2) { 

	fill(119,221,119); //verde
} 
else{
	noFill();
}

	stroke(230);
	strokeWeight(2);
	circle(width / 2, height / 2, height / 2);


}