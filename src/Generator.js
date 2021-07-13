import React from 'react';

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nGen: 0
    };
    this.dimension = 5;
    this.squareSize = 12;
    this.spacing = this.squareSize * this.dimension + 20;
    this.glyphsPerRow = 11;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  genRandomNumber(n) {
    return Math.floor((Math.random() * n) + 1);
  }

  handleChange(event) {
    this.setState({ nGen: event.target.value });
  }

  fillCell(context, boardTopx, boardTopy, i, j) {
    context.fillStyle = "black";
    let xOffset = boardTopx + j * this.squareSize;
    let yOffset = boardTopy + i * this.squareSize;
    context.fillRect(xOffset, yOffset, this.squareSize, this.squareSize);
  }

  fillUpperLeft(val, context, boardTopx, boardTopy) {
    this.fillCell(context, boardTopx, boardTopy, 0, 0);
    switch (val) {
      case 1:
        this.fillCell(context, boardTopx, boardTopy, 0, 1);
        this.fillCell(context, boardTopx, boardTopy, 0, 2);
        break;
      case 2:
        this.fillCell(context, boardTopx, boardTopy, 1, 0);
        this.fillCell(context, boardTopx, boardTopy, 2, 0);
        break;
      case 3:
        this.fillCell(context, boardTopx, boardTopy, 0, 1);
        this.fillCell(context, boardTopx, boardTopy, 0, 2);
        this.fillCell(context, boardTopx, boardTopy, 1, 0);
        this.fillCell(context, boardTopx, boardTopy, 2, 0);
        break;
      default:
    }
  }

  fillUpperRight(val, context, boardTopx, boardTopy) {
    this.fillCell(context, boardTopx, boardTopy, 0, 4);
    switch (val) {
      case 1:
        this.fillCell(context, boardTopx, boardTopy, 0, 3);
        this.fillCell(context, boardTopx, boardTopy, 0, 2);
        break;
      case 2:
        this.fillCell(context, boardTopx, boardTopy, 1, 4);
        this.fillCell(context, boardTopx, boardTopy, 2, 4);
        break;
      case 3:
        this.fillCell(context, boardTopx, boardTopy, 0, 3);
        this.fillCell(context, boardTopx, boardTopy, 0, 2);
        this.fillCell(context, boardTopx, boardTopy, 1, 4);
        this.fillCell(context, boardTopx, boardTopy, 2, 4);
        break;
      default:
    }
  }

  fillLowerLeft(val, context, boardTopx, boardTopy) {
    this.fillCell(context, boardTopx, boardTopy, 4, 0);
    switch (val) {
      case 1:
        this.fillCell(context, boardTopx, boardTopy, 4, 1);
        this.fillCell(context, boardTopx, boardTopy, 4, 2);
        break;
      case 2:
        this.fillCell(context, boardTopx, boardTopy, 3, 0);
        this.fillCell(context, boardTopx, boardTopy, 2, 0);
        break;
      case 3:
        this.fillCell(context, boardTopx, boardTopy, 4, 1);
        this.fillCell(context, boardTopx, boardTopy, 4, 2);
        this.fillCell(context, boardTopx, boardTopy, 3, 0);
        this.fillCell(context, boardTopx, boardTopy, 2, 0);
        break;
      default:
    }
  }

  fillLowerRight(val, context, boardTopx, boardTopy) {
    this.fillCell(context, boardTopx, boardTopy, 4, 4);
    switch (val) {
      case 1:
        this.fillCell(context, boardTopx, boardTopy, 4, 3);
        this.fillCell(context, boardTopx, boardTopy, 4, 2);
        break;
      case 2:
        this.fillCell(context, boardTopx, boardTopy, 3, 4);
        this.fillCell(context, boardTopx, boardTopy, 2, 4);
        break;
      case 3:
        this.fillCell(context, boardTopx, boardTopy, 4, 3);
        this.fillCell(context, boardTopx, boardTopy, 4, 2);
        this.fillCell(context, boardTopx, boardTopy, 3, 4);
        this.fillCell(context, boardTopx, boardTopy, 2, 4);
        break;
      default:
    }
  }

  fillCrossUp(val, context, boardTopx, boardTopy) {
    if (val === 2) {
      this.fillCell(context, boardTopx, boardTopy, 0, 2);
      this.fillCell(context, boardTopx, boardTopy, 1, 2);
      this.fillCell(context, boardTopx, boardTopy, 2, 2);
    }
  }

  fillCrossRight(val, context, boardTopx, boardTopy) {
    if (val === 2) {
      this.fillCell(context, boardTopx, boardTopy, 2, 4);
      this.fillCell(context, boardTopx, boardTopy, 2, 3);
      this.fillCell(context, boardTopx, boardTopy, 2, 2);
    }
  }

  fillCrossDown(val, context, boardTopx, boardTopy) {
    if (val === 2) {
      this.fillCell(context, boardTopx, boardTopy, 4, 2);
      this.fillCell(context, boardTopx, boardTopy, 3, 2);
      this.fillCell(context, boardTopx, boardTopy, 2, 2);
    }
  }

  fillCrossLeft(val, context, boardTopx, boardTopy) {
    if (val === 2) {
      this.fillCell(context, boardTopx, boardTopy, 2, 0);
      this.fillCell(context, boardTopx, boardTopy, 2, 1);
      this.fillCell(context, boardTopx, boardTopy, 2, 2);
    }
  }

  generateGlyph(context, boardTopx, boardTopy) {
    //each corner
    this.fillUpperLeft(this.genRandomNumber(3), context, boardTopx, boardTopy);
    this.fillUpperRight(this.genRandomNumber(3), context, boardTopx, boardTopy);
    this.fillLowerLeft(this.genRandomNumber(3), context, boardTopx, boardTopy);
    this.fillLowerRight(this.genRandomNumber(3), context, boardTopx, boardTopy);

    //each arm of the middle cross
    this.fillCrossUp(this.genRandomNumber(2), context, boardTopx, boardTopy);
    this.fillCrossRight(this.genRandomNumber(2), context, boardTopx, boardTopy);
    this.fillCrossDown(this.genRandomNumber(2), context, boardTopx, boardTopy);
    this.fillCrossLeft(this.genRandomNumber(2), context, boardTopx, boardTopy);
  }

  handleSubmit(event) {
    let boardTopx = 0;
    let boardTopy = 0;

    let canvas = document.getElementById("canvasChessboard");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let n = 0; n < this.state.nGen; n++) {
      boardTopx = (n % this.glyphsPerRow) * this.spacing;
      boardTopy = Math.floor(n / this.glyphsPerRow) * this.spacing;
      this.generateGlyph(context, boardTopx, boardTopy);
    }

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Glyph Generating Idea (Adapted from user Oshimimers)</h3>
        <h4><a href="https://www.reddit.com/r/neography/comments/caev1r/i_programmed_my_calculator_to_generate_random/"
          target="_blank" rel="noreferrer">(Link to original reddit post)</a></h4>
        
        <form onSubmit={this.handleSubmit}>
          <label>
            Number of Glyphs:
            <input type="number" value={this.state.nGen} min={0} max={407} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Generate!" />
        </form>
        <br></br>
        <canvas id="canvasChessboard" width="900px" height="3000px"></canvas>
      </div>
    );
  }
}

export default Generator;