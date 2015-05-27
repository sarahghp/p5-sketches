var table;

function preload() {
  table = loadTable("data.csv", "header");
}

function setup() {
  print(table.getRowCount());
}

function draw() {

}
