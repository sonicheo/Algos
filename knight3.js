//1.Given an NxN chess board, find the shortest number of moves to get from a 
//given starting position to an ending position using a knight.

//2. Modify your algorithm to include spaces that cannot be occupied by the knight because they are 
//currently occupied by one of your other pieces

//3. Further Modify your algorithm to include enemy pieces that can be 
//captured in addition to friendly pieces that cannot be captured/occupied.


//ChessBoard
var chessBoard = [
   //  0   1   2   3   4   5   6   7
/*0*/['W','B','W','B','W','B','W','B'],
/*1*/['B','A','B','W','E','A','B','W'],
/*2*/['W','E','A','B','W','A','E','B'],
/*3*/['B','W','E','E','B','W','B','W'],
/*4*/['E','B','W','B','A','B','E','B'],
/*5*/['B','E',"A",'W','B','A','B','W'],
/*6*/['W','B','W','E','W','B','W','B'],
/*7*/['B','W','B','W','B','W','B','W'],
]
//start [5,2] //endpoint [0,7]


//Compares two arrays
function compareNodes(node1, node2){
   if(node1.length != node2.length){
      return false
   }
   else if(node1[0] != node2[0] || node1[1] != node2[1]){
      return false
   }
   else return true
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
function knightPiece(chessBoard, start, end){

   //Keepts track of current node
   var current = 0;
   //Keeps track of what we will visit, along with other functions
   var visitNext = new PQ;
   var nodesEqual = compareNodes(start, end);

   //For my debugging
   var stepCounter = 1;

   var captured = 0;


   //If you are already at the end location
   if(nodesEqual){
      return "Number of Moves: 0"
   }

   visitNext.insert({node: start, moves: 0, path: [], captured: 0})

   while(!visitNext.isEmpty() && !nodesEqual){
      //Removes and assigns shortest value
      current = visitNext.removeMin();

      //Displays the steps of the while loop
      //Mostly for debugging
      console.log("Step " + stepCounter + ": node: " + current.node + " path: " + current.path + "captured: " + current.captured);
      //To not visit the same node twice
      chessBoard[current.node[0]][current.node[1]] = false;

      //All the possible moves a knight can do

      //Up 2, Left 1
      //If it isn't going to past the board and isn't false
      if(
         current.node[0] > 1 && 
         current.node[1] > 0 &&
         chessBoard[current.node[0]-2][current.node[1]-1] &&
         chessBoard[current.node[0]-2][current.node[1]-1] != "A"
         ){
            //If an enemy is on the node add one to the captured
            if(chessBoard[current.node[0]-2][current.node[1]-1] == "E"){
               captured = current.captured + 1
            }
            else{
               captured = current.captured
            }

            chessBoard[current.node[0]-2][current.node[1]-1] = false
            visitNext.insert({
               node: [current.node[0]-2,current.node[1]-1],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               captured: captured
            })
         }

      //Up 2, Right 1
      //If it isn't going to past the board and isn't false
      if(
         current.node[0] > 1 &&
         current.node[1] < chessBoard.length-1 &&
         chessBoard[current.node[0]-2][current.node[1]+1] &&
         chessBoard[current.node[0]-2][current.node[1]+1] != "A"
         ){
            //If an enemy is on the node add one to the captured
            if(chessBoard[current.node[0]-2][current.node[1]+1] == "E"){
               captured = current.captured + 1
            }
            else{
               captured = current.captured
            }

            chessBoard[current.node[0]-2][current.node[1]+1] = false
            visitNext.insert({
               node: [current.node[0]-2,current.node[1]+1],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               captured: captured
            })
         }
      
      //Up 1, Left 2
      if(
         current.node[0] > 0 && 
         current.node[1] > 1 &&
         chessBoard[current.node[0]-1][current.node[1]-2] &&
         chessBoard[current.node[0]-1][current.node[1]-2] != "A"
         ){
            //If an enemy is on the node add one to the captured
            if(chessBoard[current.node[0]-1][current.node[1]-2] == "E"){
               captured = current.captured + 1
            }
            else{
               captured = current.captured
            }

            chessBoard[current.node[0]-1][current.node[1]-2] = false
            visitNext.insert({
               node: [current.node[0]-1,current.node[1]-2],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               captured: captured
            })
         }

      //Up 1, Right 2        
      if(
         current.node[0] > 0 && 
         current.node[1] < chessBoard.length-2 &&
         chessBoard[current.node[0]-1][current.node[1]+2] &&
         chessBoard[current.node[0]-1][current.node[1]+2] != "A"
         ){
            //If an enemy is on the node add one to the captured
            if(chessBoard[current.node[0]-1][current.node[1]+2] == "E"){
               captured = current.captured + 1
            }
            else{
               captured = current.captured
            }

            chessBoard[current.node[0]-1][current.node[1]+2] = false
            visitNext.insert({
               node: [current.node[0]-1,current.node[1]+2],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               captured: captured
            })
         }     

      //Down 2, Left 1         
      if(
         current.node[0] < chessBoard.length-2 && 
         current.node[1] > 0 &&
         chessBoard[current.node[0]+2][current.node[1]-1] &&
         chessBoard[current.node[0]+2][current.node[1]-1] != "A"
         ){
            //If an enemy is on the node add one to the captured
            if(chessBoard[current.node[0]+2][current.node[1]-1] == "E"){
               captured = current.captured + 1
            }
            else{
               captured = current.captured
            }

            chessBoard[current.node[0]+2][current.node[1]-1] = false
            visitNext.insert({
               node: [current.node[0]+2,current.node[1]-1],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               captured: captured
            })
         }

      //Down 2, Right 1
      if(
         current.node[0] < chessBoard.length-2 && 
         current.node[1] < chessBoard.length-1 &&
         chessBoard[current.node[0]+2][current.node[1]+1] &&
         chessBoard[current.node[0]+2][current.node[1]+1] != "A"
         ){
            //If an enemy is on the node add one to the captured
            if(chessBoard[current.node[0]+2][current.node[1]+1] == "E"){
               captured = current.captured + 1
            }
            else{
               captured = current.captured
            }

            chessBoard[current.node[0]+2][current.node[1]+1] = false
            visitNext.insert({
               node: [current.node[0]+2,current.node[1]+1],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               captured: captured
            })
         }

      //Down 1, Left 2
      if(
         current.node[0] < chessBoard.length-1 && 
         current.node[1] > 1 &&
         chessBoard[current.node[0]+1][current.node[1]-2] &&
         chessBoard[current.node[0]+1][current.node[1]-2] != "A"
         ){
            //If an enemy is on the node add one to the captured
            if(chessBoard[current.node[0]+1][current.node[1]-2] == "E"){
               captured = current.captured + 1
            }
            else{
               captured = current.captured
            }

            chessBoard[current.node[0]+1][current.node[1]-2] = false
            visitNext.insert({
               node: [current.node[0]+1,current.node[1]-2],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               captured: captured
            })
         }
      
      //Down 1, Right 2
      if(
         current.node[0] < chessBoard.length-1 && 
         current.node[1] < chessBoard.length-2 &&
         chessBoard[current.node[0]+1][current.node[1]+2] &&
         chessBoard[current.node[0]+1][current.node[1]+2] != "A"
         ){
            //If an enemy is on the node add one to the captured
            if(chessBoard[current.node[0]+1][current.node[1]+2] == "E"){
               captured = current.captured + 1
            }
            else{
               captured = current.captured
            }

            chessBoard[current.node[0]+1][current.node[1]+2] = false
            visitNext.insert({
               node: [current.node[0]+1,current.node[1]+2],
               moves: current.moves + 1,
               path: [
                  ...current.path,
                  current.node
               ],
               captured: captured
            })
         }

      //Checks if you are the end node
      if(!visitNext.isEmpty()){
         nodesEqual = compareNodes(visitNext.checkMin().node, end)
      }
      //For the console.log
      stepCounter++;
   }
   if(visitNext.isEmpty()){
      return "Impossible"
   }
   else{
      return visitNext.checkMin()
   }
}

console.log(knightPiece(chessBoard, [7,0], [0,7]))