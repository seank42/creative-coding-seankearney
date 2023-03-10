class HorizontalChart {
 constructor({
    _bWidth,
    _bHeight,
    _posX,
    _posY,
    _title,
    _data,
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
    this.maximumNo = this.calMax();
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

  // draws the bars to screen
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
      fill(245, 172, 27);
      rect(0, y * -spaceofBar, -this.scaleUp(value), -barChartHeight,0,10,10,0);
    }
     pop();
  }


  drawAxisH() {
    line(0, 0, this.barChartWidth, 0);
    let numberofbars = this.data.getRowCount();
    let remainingHeight =this.barChartHeight - this.bMarge * 2 - (numberofbars - 1) * this.space;
    let barChartHeight = remainingHeight / numberofbars;
    let spaceofBar = barChartHeight + this.space + 10;
    push();
    translate(-this.bMarge );
   
    textAlign(CENTER);
    fill(199,34,34)
   
    textSize(25)
    text("non and prescription medicine sold past 2 weeks",this.barChartWidth/2,-this.barChartHeight-140);

    for(let y=0; y< this.NumberofTicks+1; y++){
      let spaceY = this.barChartWidth / this.NumberofTicks;

      stroke(50);
      line(spaceY * y ,9,spaceY*y,0);
      let spaceUnit = (this.maximumNo/this.NumberofTicks).toFixed(2);
      noStroke();
      fill(0);
      textSize(12);
      textAlign(RIGHT,CENTER);
      text(y * spaceUnit, spaceY* y, this.bMarge+10);
    }
   pop();
  }

  drawAxisV() {
    line(0, 0, 0, -this.barChartWidth);
    let numberofbars = this.data.getRowCount();
    let remainingWidth = this.barChartWidth - this.bMarge * 2 - (numberofbars - 1) * this.space;
    let barChartWidth = remainingWidth / numberofbars;
    let spaceofBar = barChartWidth + this.space;
    for (let x = 1; x < this.NumberofTicks + 1; x++) {
      

      stroke(50);

     
      noStroke();
      noFill(50);
      textSize(12);
      textAlign(LEFT,CENTER);
      let labels = this.data.getColumn(this.thevalueX);
      for (let x = 0; x < labels.length; x++) {
        let value = labels[x];
        push();
        translate(-200, -(x * (spaceofBar - 5) + barChartWidth / 2 + 5));
        fill(0);
        textSize(12);
        textAlign(LEFT,CENTER);
        
        text(value, 0, 0);
      
        pop();
      }
    }
  }

  //   calculates the maximum number in the data
  calMax() {
    let maximum = 0;
    for (let y = 0; y < this.data.getRowCount(); y++) {
      if (int(this.data.rows[y].obj[this.thevalueY]) > maximum) {
        maximum = int(this.data.rows[y].obj[this.thevalueY]);
      }
    }

    for (let y = maximum; y < 100000; y++) {
      if (y % this.NumberofTicks == 0 && y % this.roundUp == 0) {
        maximum = y;
        break;
      }
    }

    return maximum;
  }

  // map function, this makes it so the bars will scale  to any parameter  set such as the excel sheet in data folder
  
  scaleUp(_no) {
    return map(_no, 0, this.maximumNo, 0, this.barChartWidth);
  }
}

