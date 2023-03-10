class StackedChart {
constructor(
    {
      _bWidth,
      _bHeight,
      _posX, 
      _posY,
      _title = "covid cases", 
      _data,
      _NumberofTicks,
      _roundUp,
      _bMarge,
      _space,
      _thevalueX, 
      _thevalueY,
      _valueS,
      _valuet,  }) {
      this.barChartWidth = _bWidth;
      this.barChartHeight = _bHeight;
      this.titleName = _title;
      this.posX = _posX;
      this.posY = _posY;
      this.data = _data;
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

    push();
    translate(this.posX, this.posY);
    this.drawAxisH();
    this.drawAxisV();
    this.drawingBar();
    pop();
  }

  // draws the bars onto the screen
  drawingBar() {
    let numberofbars = this.data.getRowCount();
    let remainingWidth =
      this.barChartWidth - this.bMarge * 2 - (numberofbars - 1) * this.space;
    let barChartWidth = remainingWidth / numberofbars;
    let spaceofBar = barChartWidth + this.space;
    push();
    translate(this.bMarge, 0);
    for (let x = 0; x < numberofbars; x++) {
      let value = int(-this.data.rows[x].obj[this.thevalueY]);
      
      noStroke();
      fill(134, 87, 245);
      rect(x * spaceofBar, 0, barChartWidth, this.scaleUp(value),0,0,20,20);
    }
    for (let x = 0; x < numberofbars; x++) {
      let value = int(-this.data.rows[x].obj[this.valueS]);
      noStroke();
      fill(93, 167, 219);
      rect(x * spaceofBar, 0, barChartWidth, this.scaleUp(value));
    }
    for (let x = 0; x < numberofbars; x++) {
      let value = int(-this.data.rows[x].obj[this.valuet]);
      noStroke();
      fill(12, 0, 200);
      rect(x * spaceofBar, 0, barChartWidth, this.scaleUp(value));
    }
 
    pop();
  }

  // draws the horizontal line
  drawAxisH() {
    line(0, 0, this.barChartWidth, 0);
    let numberofbars = this.data.getRowCount();
    let remainingWidth =
      this.barChartWidth - this.bMarge * 2 - (numberofbars - 1) * this.space;
    let barChartWidth = remainingWidth / numberofbars;
    let spaceofBar = barChartWidth + this.space;
    push();
    translate(this.bMarge, 0);
    for (let x = 0; x < numberofbars; x++) {
      let value = int(-this.data.rows[x].obj[this.thevalueY]);
      noStroke();
      fill(125, 229, 237);
      rect(x * spaceofBar, 0, barChartWidth, this.scaleUp(value),0,0,20,20);
    }
    let labels = this.data.getColumn(this.thevalueX);
    for (let x = 0; x < labels.length; x++) {
      let value = labels[x];
      push();
      translate(x * spaceofBar + barChartWidth / 2, 5);
      rotate(45);
      fill(0);
      textSize(12);
      textAlign(LEFT, TOP);
      text(value, 0, 0);
      pop();
    }
    pop();
    textAlign(CENTER)
    fill(199,34,34)
    textSize(30)               
    text("2020-2021 june covid cases",this.barChartWidth/2,-this.barChartHeight-50)
  }


  // draws the vertical line
  drawAxisV() {
    line(0, 0, 0, -this.barChartHeight);
    for (let y = 1; y < this.NumberofTicks + 1; y++) {
      let spaceY = this.barChartHeight / this.NumberofTicks;

      stroke(50);
      fill(50);
      line(this.barChartWidth, -spaceY * y, -10, -spaceY * y);

      let spaceUnit = (this.MaximumNo / this.NumberofTicks).toFixed(2);
      noStroke();
      fill(50);
      textSize(12);
      textAlign(RIGHT, CENTER);
      text(y * spaceUnit, -15, -spaceY * y);
    }
  }

  //   calculates the maximum number in the data
  calMax() {
    let maximum = 0;
    for (let x = 0; x < this.data.getRowCount(); x++) {
      if (int(this.data.rows[x].obj[this.thevalueY]) > maximum) {
        maximum = int(this.data.rows[x].obj[this.thevalueY]);
      }
    }

    for (let x = maximum; x < 100000; x++) {
      if (x % this.NumberofTicks == 0 && x % this.roundUp == 0) {
        maximum = x;
        break;
      }
    }

    return maximum;
  }

  // map function, this makes it so the bars will scale up to any parameter I set such as the excel sheet
  // in data folder
  scaleUp(_no) {
    return map(_no, 0, this.MaximumNo, 0, this.barChartHeight);
  }
}
