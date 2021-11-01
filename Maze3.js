// Given a 10x10 maze,
// 1. Find a path "out" of the maze given a starting coordinate
//      Print the # of steps and the exit coordinate or "impossible" if there is no exit
// 2. Find the shortest path "out" of the maze given a starting coordinate
//      Print the # of steps and the exit coordinate or "impossible" if there is no exit 
// 3. Find the shortest path "out" of the maze given a starting coordinate
//      Return an array of coordinates that represent the path out of the maze
// 4. Return an array with all of the possible exit coordinates given a starting coordinate 

// Starting Coordinate: [4, 4]
// [2, 6]


var maze = [
    //0  1  2  3  4  5  6  7  8  9
/*0*/[0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
/*1*/[0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
/*2*/[0, 0, 1, 0, 0, 0, 0, 1, 1, 0],
/*3*/[0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
/*4*/[0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
/*5*/[0, 0, 0, 0, 0, 1, 1, 0, 1, 0],
/*6*/[0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
/*7*/[1, 1, 0, 0, 0, 0, 1, 0, 1, 0],
/*8*/[0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
/*9*/[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]



//Checks if you are at the edge of the maze
function atEdge(maze, coordinate){
    if(
        coordinate[0] == 0 || 
        coordinate[1] == 0 || 
        coordinate[0] == maze.length-1 || 
        coordinate[1] == maze.length-1
        ){
        return true
    }
    else return false
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
        if(this.arr[min].distance > this.arr[i].distance) {  
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
          if(this.arr[min].distance > this.arr[i].distance) {  
            min = i
          }
        }
        var node = this.arr[min]
        return node
      }
  }
  


function pathOut(maze, start){

    var current = 0;
    var visitNext = new PQ;

    var isEdge = atEdge(maze, start);

    var stepCounter = 1;

    //If you start at a zero return impossible
    if(maze[start[0]][start[1]] == 0 ){
        return "Impossible"
    }
    //If it's not a zero and it's at the edge return the coordinate
    else if(isEdge){
        return start
    }

    visitNext.insert({node: start, distance: 0, path: []});


    //As long as visit next is not out and contains something, keep looping
    //As long as you are not in the edge keep looping
    while(!visitNext.isEmpty() && !isEdge ){

        
        //Removes AND Assigns the shortest value of visitNext to current
        current = visitNext.removeMin();
        
        
        //Displays the steps that are occuring
        console.log( "Step " + stepCounter + ": " + current.node)

        //Sets current node to false so we don't visit it again
        maze[current.node[0]][current.node[1]] = false;

        
        //check top
        if(maze[current.node[0]][current.node[1]-1] != 0 || maze[current.node[0]][current.node[1]-1] ){
            visitNext.insert({
                node: [current.node[0],current.node[1]-1], 
                distance: current.distance + maze[current.node[0]][current.node[1]-1], 
                path: [
                    ...current.path,
                    current.node
                ]})

        }

        //check right
        if(maze[current.node[0]+1][current.node[1]] != 0 || maze[current.node[0]+1][current.node[1]] ){
            visitNext.insert({
                node: [current.node[0]+1,current.node[1]], 
                distance: current.distance + maze[current.node[0]+1][current.node[1]],  
                path: [
                    ...current.path,
                    current.node
                ] 
            })
        }

        //check bottom
        if(maze[current.node[0]][current.node[1]+1] != 0 || maze[current.node[0]][current.node[1]+1] ){
            visitNext.insert({
                node: [current.node[0],current.node[1]+1],
                distance: current.distance + maze[current.node[0]][current.node[1]+1], 
                path: [
                    ...current.path,
                    current.node
                ] 
            })
      
        }

        //check left
        if(maze[current.node[0]-1][current.node[1]] != 0 || maze[current.node[0]-1][current.node[1]] ){
            visitNext.insert({
                node: [current.node[0]-1,current.node[1]], 
                distance: current.distance + maze[current.node[0]-1][current.node[1]], 
                path: [
                    ...current.path,
                    current.node
                ]
            })
           
        }

        //Checks if what we are going to visit next
        //is at the edge and assigns it to isEdge
        isEdge = atEdge(maze, visitNext.checkMin().node);

        //For the console.log
        stepCounter++;
    }

    //If the loop broke because you found an out
    if(!visitNext.isEmpty()){
        return visitNext.checkMin()
    }
    //If the loop broke because it ran out of next
    else{
        return "Impossible"
    }

}

console.log(pathOut(maze, [4,6]))