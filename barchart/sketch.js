var data;
var margin;
var inner_width;
var inner_height;

/**
  Barchart sketch. 10 bars on the x-axis with randomly-generated values on
  the y-axis.
  @author Iain Dillingham
  @version 2015-05-17
**/
function setup() {
  createCanvas(400, 300)

  data = new Array(10);

  for (var i = 0; i < data.length; i++) {
    data[i] = random();
  }

  // The margin separates the chart area, which contains the bars, from
  // the canvas.
  margin = 15;
  inner_width = width - margin * 2;
  inner_height = height - margin * 2;

  textAlign(CENTER, BOTTOM);
  textFont("Source Sans Pro");
  textSize(12.5);
}

function draw() {
  background(255);

  noStroke();

  push();

  translate(margin, margin);

  for (var i = 0; i < data.length; i++) {
    var bar_width = inner_width / data.length;
    var bar_x = bar_width * i;
    var bar_height = map(data[i], 0, 1, 0, inner_height);
    var bar_y = map(data[i], 0, 1, inner_height, 0);

    // Draw the bar
    fill(192);

    rect(bar_x + 2, bar_y, bar_width - 4, bar_height);

    // Draw the x-axis label
    fill(128);

    text(i, bar_x + bar_width / 2, bar_y + bar_height + margin);
  }

  // Draw the y-axis ticks
  noFill();

  stroke(128);

  for (var i = 0; i < 10; i++) {
    var tick_x1 = -4;
    var tick_y1 = map(i, 0, 9, inner_height, 0);
    var tick_x2 = -2;
    var tick_y2 = tick_y1;

    line(tick_x1, tick_y1, tick_x2, tick_y2);
  }

  pop();
}
