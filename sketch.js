let data;
let table;
let table02;
let table03;
let table04;
let chart = [];

// takes the information from the excel sheet to be used
function preload() {
  table = loadTable(
    "data/Aids.csv",
    "csv",
    "header"
  );
  table02 = loadTable(
    "data/covid_cases.csv",
    "csv",
    "header"
  );
  table03 = loadTable(
    "data/marrage.csv",
    "csv",
    "header"
  );
  table04 = loadTable(
    "data/difficulties.csv",
    "csv",
    "header"
  );
}
// creates the canvas
function setup() {
  createCanvas(1500, 1500);
  background(255);
  pixelDensity(2);

  chart.push(
    new BarChart({
      _bWidth:400,
      _bHeight:200,
      _posX:150,
      _posY:400,
      _title:"Marrage",
      _data:table03,
      _NumberofTicks:10,
      _roundUp:1,
      _bMarge:10,
      _space:5    ,
      _thevalueX:"Form_of_Ceremony",
      _thevalueY:"total",
    })
  );

  chart.push(
    new StackedChart({
      _bWidth:400,
      _bHeight:200,
      _posX:150,
      _posY:800,
      _title:"covid cases",
      _data:table02,
      _NumberofTicks:10,
      _roundUp:1,
      _bMarge:10,
      _space:5,
      _thevalueX:"County",
      _thevalueY:"total",
      _valueS:"2021",
      _valuet:"2020",
    })
  );

  chart.push(
    new HorizontalChart({
      _bWidth:300,
      _bHeight:200,
      _posX:800,
      _posY:400,
      _title:"Difficulties",
      _data:table04,
      _NumberofTicks:10,
      _roundUp:1,
      _bMarge:10,
      _space:5,
      _thevalueX:"difficulty",
      _thevalueY:"total",
      _valueS:"perscribed",
      _valuet:"non_perscribed",
    })
  );

  chart.push(
    new HorizontalStackedChart({
      _bWidth:300,
      _bHeight:200,
      _posX:800,
      _posY:800,
      _title:"Aid's cases 2020",
      _data:table,
      _NumberofTicks:10,
      _roundUp:1,
      _bMarge:10,
      _space:1,
      _thevalueX:"Age_Group",
      _thevalueY:"total",
      _valueS:"female",
      _valuet:"male",
    })
  );
}

// draws out the charts
function draw() {
  chart[0].render();
  chart[1].render();
  chart[2].render();
  chart[3].render();
}
