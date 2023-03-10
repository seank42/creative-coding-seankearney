class HorizontalStackedChart {
<<<<<<< HEAD
   constructor({
    _bWidth,
    _bHeight,
=======
  //sets up variables and use the parameters
  constructor({
    _barWidth,
    _barHeight,
>>>>>>> ac5c161bd6bf244eddfc6da6c269b60d2846dbed
    _posX,
    _posY,
    _title,
    _data,
<<<<<<< HEAD
    _NumberofTicks,
    _roundUp,
    _bMarge,
    _space,
    _thevalueX,
    _thevalueY,
    _valueS,
    _valuet,
  }) {
    this.barChartWidth = _bWidth;
    this.barChartHeight = _bHeight;
=======
    _noTicks,
    _roundUp,
    _barMargin,
    _space,
    _valueX,
    _valueY,
    _valueE,
    _valueI,
  }) {
    this.barChartWidth = _barWidth;
    this.barChartHeight = _barHeight;
>>>>>>> ac5c161bd6bf244eddfc6da6c269b60d2846dbed
    this.titleName = _title;
    this.posX = _posX;
    this.posY = _posY;
    this.data = _data;
<<<<<<< HEAD
    this.NumberofTicks = _NumberofTicks;
    this.roundUp = _roundUp;
    this.thevalueX = _thevalueX;
    this.thevalueY = _thevalueY;
    this.valueS = _valueS;
    this.valuet = _valuet;
    this.MaximumNo = this.calMax();
    this.bMarge = _bMarge;
    this.space = _space;
  }

  render() {
    noFill();

=======
    this.noTicks = _noTicks;
    this.roundUp = _roundUp;
    this.valueX = _valueX;
    this.valueY = _valueY;
    this.valueE = _valueE;
    this.valueI = _valueI;
    this.MaximumNo = this.calMax();
    this.barMargin = _barMargin;
    this.space = _space;
  }
  render() {
    noFill();

>>>>>>> ac5c161bd6bf244eddfc6da6c269b60d2846dbed
    push();
    translate(this.posX, this.posY);
    this.drawAxisH();
    this.drawAxisV();
    this.drawingBar();
    pop();
  }

<<<<<<< HEAD
  // draws the bars onto the screen
  drawingBar() {
    let numberofbars = this.data.getRowCount();
    let remainingHeight =
      this.barChartHeight - this.bMarge * 2 - (numberofbars - 1) * this.space;
    let barChartHeight = remainingHeight / numberofbars;
    let spaceofBar = barChartHeight + this.space + 10;
    push();
    translate(0,-this.bMarge);
    for (let y = 0; y < numberofbars; y++) {
      let value = int(-this.data.rows[y].obj[this.thevalueY]);
      noStroke();
      fill(134, 87, 245);
      rect(0, y * -spaceofBar, -this.scaleUp(value), -barChartHeight);
    }
    for (let y = 0; y < numberofbars; y++) {
      let value = int(-this.data.rows[y].obj[this.valueS]); 
      noStroke();
      fill(93, 167, 219);
      rect(0, y * -spaceofBar, -this.scaleUp(value), -barChartHeight);
    }
    for (let y = 0; y < numberofbars; y++) {
      let value = int(-this.data.rows[y].obj[this.valuet]);
      noStroke();
      fill(88, 55, 208);
      rect(0, y * -spaceofBar, -this.scaleUp(value), -barChartHeight);
=======
  // draws the bars to screen
  drawingBar() {
    let barNo = this.data.getRowCount();
    let remainingHeight =
      this.barChartHeight - this.barMargin * 2 - (barNo - 1) * this.space;
    let barChartHeight = remainingHeight / barNo;
    let spaceBar = barChartHeight + this.space + 10;
    push();
    translate(0,-this.barMargin);
    for (let y = 0; y < barNo; y++) {
      let value = int(-this.data.rows[y].obj[this.valueY]);
      noStroke();
      fill(125, 229, 237);
      rect(0, y * -spaceBar, -this.scaleUp(value), -barChartHeight);
    }
    for (let y = 0; y < barNo; y++) {
      let value = int(-this.data.rows[y].obj[this.valueE]); 
      noStroke();
      fill(93, 167, 219);
      rect(0, y * -spaceBar, -this.scaleUp(value), -barChartHeight);
    }
    for (let y = 0; y < barNo; y++) {
      let value = int(-this.data.rows[y].obj[this.valueI]);
      noStroke();
      fill(88, 55, 208);
      rect(0, y * -spaceBar, -this.scaleUp(value), -barChartHeight);
>>>>>>> ac5c161bd6bf244eddfc6da6c269b60d2846dbed
    }

    pop();
  }

<<<<<<< HEAD
  // draws the horizontal line
  drawAxisH() {
    line(0, 0, this.barChartWidth, 0);
    let numberofbars = this.data.getRowCount();
    let remainingHeight =this.barChartHeight - this.bMarge * 2 - (numberofbars - 1) * this.space;
    let barChartHeight = remainingHeight / numberofbars;
    let spaceofBar = barChartHeight + this.space + 10;
    push();
    translate(-this.bMarge );
   
    let labels = this.data.getColumn(this.thevalueY);
    for (let y = 0; y < labels.length; y++) {
      let value = labels[y];
      push();
      translate(y * spaceofBar + this.barChartWidth / 5, 10);
=======

  drawAxisH() {
    line(0, 0, this.barChartWidth, 0);
    let barNo = this.data.getRowCount();
    let remainingHeight =this.barChartHeight - this.barMargin * 2 - (barNo - 1) * this.space;
    let barChartHeight = remainingHeight / barNo;
    let spaceBar = barChartHeight + this.space + 10;
    push();
    translate(this.barMargin - 10, 0);
   
    let labels = this.data.getColumn(this.valueY);
    for (let y = 0; y < labels.length; y++) {
      let value = labels[y];
      push();
      translate(y * spaceBar + this.barChartWidth / 5, 10);
>>>>>>> ac5c161bd6bf244eddfc6da6c269b60d2846dbed
      rotate(45);
      fill(0);
      textSize(12);
      textAlign(LEFT, TOP);
<<<<<<< HEAD
      text(int(y * spaceofBar), 0, 0);
      textFont('Helvetica');
=======
      text(value, 0, 0);
>>>>>>> ac5c161bd6bf244eddfc6da6c269b60d2846dbed
      pop();
    }
    pop();
    textAlign(CENTER)
<<<<<<< HEAD
    fill(199,34,34)
    textSize(25)               
    text("non and prescription medicine sold past 2 weeks",this.barChartWidth/2,-this.barChartHeight-140)
    textFont('Helvetica');

    for (let y = 1; y < this.NumberofTicks ; y++) {
      let spaceY = this.barChartWidth / this.NumberofTicks;
=======
    fill(0)
    textSize(25)               
    text("Horizontal Stacked Hospital Admissions",this.barChartWidth/2,-this.barChartHeight-140)


    for (let y = 1; y < this.noTicks + 1; y++) {
      let spaceY = this.barChartWidth / this.noTicks;
>>>>>>> ac5c161bd6bf244eddfc6da6c269b60d2846dbed

      stroke(50);
      line(spaceY * y ,9, spaceY * y,0);
      }
  }
<<<<<<< HEAD
  // draws the vertical line
  drawAxisV() {
    line(0, 0, 0, -this.barChartWidth);
    let numberofbars = this.data.getRowCount();
    let remainingWidth =
      this.barChartWidth - this.bMarge * 2 - (numberofbars - 1) * this.space;
    let barChartWidth = remainingWidth / numberofbars;
    let spaceofBar = barChartWidth + this.space;
    for (let x = 1; x < this.NumberofTicks + 1; x++) {
=======

  drawAxisV() {
    line(0, 0, 0, -this.barChartWidth);
    let barNo = this.data.getRowCount();
    let remainingWidth =
      this.barChartWidth - this.barMargin * 2 - (barNo - 1) * this.space;
    let barChartWidth = remainingWidth / barNo;
    let spaceBar = barChartWidth + this.space;
    for (let x = 1; x < this.noTicks + 1; x++) {
>>>>>>> ac5c161bd6bf244eddfc6da6c269b60d2846dbed
      

      stroke(50);

     
      noStroke();
      noFill(50);
      textSize(12);
      textAlign(LEFT);
<<<<<<< HEAD
      let labels = this.data.getColumn(this.thevalueX);
      for (let x = 0; x < labels.length; x++) {
        let value = labels[x];
        push();
        translate(-100, -(x * (spaceofBar) + barChartWidth / 2 + 5));
=======
      let labels = this.data.getColumn(this.valueX);
      for (let x = 0; x < labels.length; x++) {
        let value = labels[x];
        push();
        translate(-50, -(x * (spaceBar) + barChartWidth / 2 + 5));
>>>>>>> ac5c161bd6bf244eddfc6da6c269b60d2846dbed
        fill(0);
        textSize(12);
        textAlign(LEFT,CENTER);
        text(value, 0, 0);
        textFont('Helvetica');
        pop();
      }
    }
  }

  //   calculates the maximum number in the data
  calMax() {
    let maximum = 0;
    for (let y = 0; y < this.data.getRowCount(); y++) {
<<<<<<< HEAD
      if (int(this.data.rows[y].obj[this.thevalueY]) > maximum) {
        maximum = int(this.data.rows[y].obj[this.thevalueY]);
=======
      if (int(this.data.rows[y].obj[this.valueY]) > maximum) {
        maximum = int(this.data.rows[y].obj[this.valueY]);
>>>>>>> ac5c161bd6bf244eddfc6da6c269b60d2846dbed
      }
    }

    for (let y = maximum; y < 100000; y++) {
<<<<<<< HEAD
      if (y % this.NumberofTicks == 0 && y % this.roundUp == 0) {
=======
      if (y % this.noTicks == 0 && y % this.roundUp == 0) {
>>>>>>> ac5c161bd6bf244eddfc6da6c269b60d2846dbed
        maximum = y;
        break;
      }
    }

    return maximum;
  }

<<<<<<< HEAD
  // map function, this makes it so the bars will scale up to any parameter I set such as the excel sheet data folder
  scaleUp(_no) {
    return map(_no, 0, this.MaximumNo, 0, this.barChartWidth);
  }
}
=======
  // map function, this makes it so the bars will scale  to any parameter  set such as the excel sheet in data folder
  
  scaleUp(_no) {
    return map(_no, 0, this.MaximumNo, 0, this.barChartWidth);
  }
}
>>>>>>> ac5c161bd6bf244eddfc6da6c269b60d2846dbed
