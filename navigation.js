//! Revisar si funciona bien
document.oncontextmenu = function(){return false}

// Configuracion navegacion
let newWidth, newHeight;
const BOX_SIZE = 30;
let offsetWidth = 0.0;
let offsetHeight = 0.0;
let PRESSED = false;
const ELLIPSE_SIZE = 500;
const BACKGROUND_COLOR = 100;
const TEXT_COLOR = 0;

// Configuracion texto
const TEXT_X = 150;
const TEXT_Y = 40;
const TEXT_SIZE = 150;
const RANDOM_VALUE = 150;
const TEXT_FOOTER_SIZE = 12;
const TEXT_CENTER = 18;
const TEXT_NODOS = 15;
const INITIAL_TEXT = '-';

const BACKGROUND_MAX_SIZE = 500;
let backgroundSize = 250;
let imageBackgroundState = false;

const isLoading = true;
const isActiveSound = true;

let backgroundSemilla;
let backgroundSound;
let gifBrus;
let mapPin;
             
function setup() {
  createCanvas(windowWidth, windowHeight);
  newWidth = width / 2.0;
  newHeight = height / 2.0;
  rectMode(CENTER);
  strokeWeight(1);
  
  textAlign(CENTER);
  
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(BACKGROUND_COLOR);
  noFill();
  noStroke();

  // Centro de espacio virtual - pregunta
  text(INITIAL_TEXT, newWidth, newHeight, TEXT_SIZE, TEXT_SIZE);
  
  // Color de los textos
  fill(TEXT_COLOR);

  // Centro de espacio virtual - pregunta
  textStyle(BOLD);
  textSize(TEXT_CENTER)
  text(INITIAL_TEXT, newWidth, newHeight, TEXT_SIZE + 180, TEXT_SIZE)
}

function mousePressed() {
  PRESSED = true;
  offsetWidth = mouseX - newWidth;
  offsetHeight = mouseY - newHeight;
  cursor(MOVE);
}


function mouseDragged() {
  if (PRESSED) {
    newWidth = mouseX - offsetWidth;
    newHeight = mouseY - offsetHeight;
  }
}

function mouseReleased() {
  PRESSED = false;
  cursor(ARROW);
}

function keyPressed(){  // Reset / poner un boton para volver al centro con algun tipo de delay, mas fluido
  //resetMap()
}

function resetMap(){
  newWidth = width / 2.0;
  newHeight = height / 2.0;
}

document.oncontextmenu = function() {
  return false
}
