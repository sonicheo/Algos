// Given a N*N empty board with a knight placed on the first block (position 0,0).
// Write an algorithm that prints a board where each value represents the order in which the square was visited by the knight.
// Each square must be visited exactly once. The knight moves according to the rules of chess.

// Sample output for an 8x8 board
// 0  59  38  33  30  17   8  63
// 37  34  31  60   9  62  29  16
// 58   1  36  39  32  27  18   7
// 35  48  41  26  61  10  15  28
// 42  57   2  49  40  23   6  19
// 47  50  45  54  25  20  11  14
// 56  43  52   3  22  13  24   5
// 51  46  55  44  53   4  21  12


function alterBoard(board, node, moves){
   var tempArr = [];

   for(var i = 0; i < board.length-1; i++){
      tempArr[i] = board[i];
   }
   console.log(tempArr)
   console.log(node)
   console.log(moves)
   tempArr[node[0]][node[1]] = moves;

   return tempArr
}



//makes chessboard
function makeChessboard(size){
   var chessBoard = new Array(size);
   for(var i = 0; i < chessBoard.length; i++){
       chessBoard[i] = new Array(size);
   }
   return chessBoard;
}




//Dijkstras Priority Queue
function PQ() {
   this.arr = []
   this.isEmpty = function() {
     return this.arr.length ? false : true
   }
   this.insert = function(node) {
     this.arr.push(node)
   }
   this.removeMin = function() {
     var min = 0;
     for(var i = 0; i < this.arr.length; i++) {
       if(this.arr[min].moves > this.arr[i].moves) {  
         min = i
       }
     }
     var node = this.arr[min]
     this.arr.splice(min, 1)
     return node
   }
   this.checkMin = function() {
       var min = 0;
       for(var i = 0; i < this.arr.length; i++) {
         if(this.arr[min].moves > this.arr[i].moves) {  
           min = i
         }
       }
       var node = this.arr[min]
       return node
     }
 }


//Main
function knightPiece(chessBoard, start){

   //Keepts track of current node
   var current = 0;
   //Keeps track of what we will visit, along with other functions
   var visitNext = new PQ;

   //For my debugging
   var stepCounter = 0;

   var temp = 0;

   visitNext.insert({node: start, moves: 0, path: [], board: chessBoard})

   while(!visitNext.isEmpty() && visitNext.checkMin().moves <= Math.pow(chessBoard.length, 2)){
      //Removes and assigns shortest value
      current = visitNext.removeMin();

      //Displays the steps of the while loop
      //Mostly for debugging
      console.log("Step " + stepCounter + ": node: " + current.node + " moves: " + current.moves);
      //To not visit the same node twice
      console.log(current.board)

      //All the possible moves a knight can do

      //Up 2, Left 1
      //If it isn't going to past the board and isn't false
      if(
         current.node[0] > 1 && 
         current.node[1] > 0 &&
         current.board[current.node[0]-2][current.node[1]-1] == undefined
         ){
            visitNext.insert({
               node: [current.node[0]-2,current.node[1]-1],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               board: alterBoard(
                  current.board,
                  [current.node[0]-2,current.node[1]-1],
                  current.moves + 1
               )
            })
         }

      //Up 2, Right 1
      //If it isn't going to past the board and isn't false
      if(
         current.node[0] > 1 &&
         current.node[1] < chessBoard.length-1 &&
         current.board[current.node[0]-2][current.node[1]+1] == undefined
         ){
            visitNext.insert({
               node: [current.node[0]-2,current.node[1]+1],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               board: alterBoard(
                  current.board,
                  [current.node[0]-2,current.node[1]+1],
                  current.moves + 1
               )
            })
         }
      
      //Up 1, Left 2
      if(
         current.node[0] > 0 && 
         current.node[1] > 1 &&
         current.board[current.node[0]-1][current.node[1]-2] == undefined
         ){
            visitNext.insert({
               node: [current.node[0]-1,current.node[1]-2],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               board: alterBoard(
                  current.board,
                  [current.node[0]-1,current.node[1]-2],
                  current.moves + 1
               )
            })
         }

      if(
         current.node[0] > 0 && 
         current.node[1] < chessBoard.length-2 &&
         current.board[current.node[0]-1][current.node[1]+2] == undefined
         ){
         //Up 1, Right 2
            visitNext.insert({
               node: [current.node[0]-1,current.node[1]+2],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               board: alterBoard(
                  current.board,
                  [current.node[0]-1,current.node[1]+2],
                  current.moves + 1
               )
            })
         }     

      if(
         current.node[0] < chessBoard.length-2 && 
         current.node[1] > 0 &&
         current.board[current.node[0]+2][current.node[1]-1] == undefined
         ){
         //Down 2, Left 1
            visitNext.insert({
               node: [current.node[0]+2,current.node[1]-1],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               board: alterBoard(
                  current.board,
                  [current.node[0]+2,current.node[1]-1],
                  current.moves + 1
               )
            })
         }

      if(
         current.node[0] < chessBoard.length-2 && 
         current.node[1] < chessBoard.length-1 &&
         current.board[current.node[0]+2][current.node[1]+1] == undefined
         ){
         //Down 2, Right 1
            visitNext.insert({
               node: [current.node[0]+2,current.node[1]+1],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               board: alterBoard(
                  current.board,
                  [current.node[0]+2,current.node[1]+1],
                  current.moves + 1
               )
            })
         }

      if(
         current.node[0] < chessBoard.length-1 && 
         current.node[1] > 1 &&
         current.board[current.node[0]+1][current.node[1]-2] == undefined
         ){
         //Down 1, Left 2
            visitNext.insert({
               node: [current.node[0]+1,current.node[1]-2],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               board: alterBoard(
                  current.board,
                  [current.node[0]+1,current.node[1]-2],
                  current.moves + 1
               )
            })
         }

      if(
         current.node[0] < chessBoard.length-1 && 
         current.node[1] < chessBoard.length-2 &&
         current.board[current.node[0]+1][current.node[1]+2] == undefined
         ){
         //Down 1, Right 2
            visitNext.insert({
               node: [current.node[0]+1,current.node[1]+2],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               board: alterBoard(
                  current.board,
                  [current.node[0]+1,current.node[1]+2],
                  current.moves + 1
               )
            })
         }

      //For the console.log
      stepCounter++;
   }
   return visitNext.checkMin().board
}

console.log(knightPiece(makeChessboard(8), [0,0]))