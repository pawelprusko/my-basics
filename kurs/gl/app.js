document.addEventListener("DOMContentLoaded", function () {
    function GameOfLife(width, height) {
       this.width = width;
       this.height = height;
       this.board = document.querySelector("#board");
       this.cells = this.board.getElementsByTagName("div");
       this.createBoard();
       this.futureState = [];
       this.firstGlider();
       this.play = document.querySelector("#play");
       this.pause = document.querySelector("#pause");
       var self = this;
       var interval;
       this.play.addEventListener("click", function(){
           interval = setInterval(function(){self.printNextGen()}, 250);
       });
        this.pause.addEventListener("click", function(){
           clearInterval(interval);
       });
    }
    GameOfLife.prototype.createBoard = function () {
       this.board.style.width = this.width * 10 + "px";
       this.board.style.height = this.height * 10 + "px";
       let cells = this.width * this.height;
       for (let i = 0; i < cells; i++) {
           var newCell = document.createElement("div");
           this.board.appendChild(newCell);
       }
       for (let el of this.cells) {
           el.addEventListener("click", function () {
               el.classList.toggle("live")
           })
       }
   };
    GameOfLife.prototype.coordinates = function (x, y) {
       let index = x * this.width + y;
       return this.cells[index];
   };
    GameOfLife.prototype.setCellState = function (x, y, state) {
       if (state === "live") {
           this.coordinates(x, y).classList.add("live")
       } else if (state === "dead") {
           this.coordinates(x, y).classList.remove("live")
       }
   };
    GameOfLife.prototype.firstGlider = function () {
       for (let i = 0; i <5; i++)
           this.setCellState(i,i, "live");
   };
    GameOfLife.prototype.computeCellNextState = function (x, y) {
       let currentCell = this.coordinates(x,y);
       let neighborsX = [x - 1, x, x + 1, x - 1, x + 1, x - 1, x, x + 1];
       let neighborsY = [y - 1, y - 1, y + 1, y, y, y + 1, y + 1, y - 1];
       let liveNeighbors = [];
        for (let i = 0; i < neighborsX.length; i++){
           let neighbor = this.coordinates(neighborsX[i],neighborsY[i]);
           if(typeof neighbor === "undefined") { /// dupa dupa dupa
               continue;
           }
           var state = neighbor.classList.contains("live");
           if (state === true){
               liveNeighbors.push(neighbor)
           }
        }
       let currentCellstate = currentCell.classList.contains("live");
       if (currentCellstate === true){
           if (liveNeighbors.length < 2 || liveNeighbors.length > 3) {
               return 0
           } else {
               return 1
           }
       } else {
           if (liveNeighbors.length === 3) {
               return 1
           } else {
               return 0
           }
       }
   };
    GameOfLife.prototype.computeNextGeneration = function () {
       this.futureState = [];
       for (let i = 0; i < this.height; i++) {
           for (let j = 0; j < this.width; j++) {
               let nextCellState = this.computeCellNextState(i, j);
               this.futureState.push(nextCellState);
           }
       } console.log(this.futureState);
   };
   
   GameOfLife.prototype.printNextGen = function () {
       this.computeNextGeneration();
       let futState = this.futureState;
       for (let i = 0; i < this.cells.length; i++) {
           if (futState[i] === 1) {
               this.cells[i].classList.add("live");
           } else if (futState[i] === 0) {
               this.cells[i].classList.remove("live")
           }
       }
   };
    var game = new GameOfLife(50, 50);
}); 