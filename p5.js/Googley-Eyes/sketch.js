function setup() {
  createCanvas(720, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(230);
  fill(237, 34, 93);
  var angle1 = Math.atan2(mouseY - height/2,mouseX - width / 4);
  var angle2 = Math.atan2(mouseY - height/2,mouseX - width * 3 / 4);
  var dist1 = Math.sqrt(Math.pow(mouseY - height/2,2)+Math.pow(mouseX - width / 4,2));
  var dist2 = Math.sqrt(Math.pow(mouseY - height/2,2)+Math.pow(mouseX - width * 3 / 4,2));
  rect(width / 4 + 100 * Math.cos(angle1), height / 2 + 100 * Math.sin(angle1), 10 * (1 + Math.log(dist1) + 2 * Math.abs(Math.sin(angle1))), 10 * (1 + Math.log(dist1) + 2 * Math.abs(Math.cos(angle1))));
  fill(237, 34, 93);
  rect(width * 3 / 4 + 100 * Math.cos(angle2), height / 2 + 100 * Math.sin(angle2), 10 * (1 + Math.log(dist2) + 2 * Math.abs(Math.sin(angle2))), 10 * (1 + Math.log(dist2) + 2 * Math.abs(Math.cos(angle2))));
}

