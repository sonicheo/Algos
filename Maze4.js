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


function pathOut(maze, start){

    var current = 0;
    var visitNext = [];
    var possibleExits = [];

    var isEdge = atEdge(maze, start);

    var stepCounter = 1;

    //If you start at a zero return impossible
    if(maze[start[0]][start[1]] == 0 ){
        return "No exits"
    }
    //If it's an edge then it's an exit
    //Add it to the possibleExits
    else if(isEdge){
        possibleExits.push(start);
    }

    visitNext.push(start);


    //As long as visit next is not out and contains something, keep looping
    while(visitNext.length){
        
        //Assigns the top of visitNext to current
        current = visitNext[0];
        
        //Displays the steps that are occuring
        console.log( "Step " + stepCounter + ": " + current)

        //Sets current node to false so we don't visit it again
        maze[current[0]][current[1]] = false;

        //Removes front element from visitNext
        visitNext.splice(0,1);


        //If it's not the left edge
        if(current[1] > 0){
            //check left
            if(maze[current[0]][current[1]-1] != 0 || maze[current[0]][current[1]-1] ){
                visitNext.push([current[0],current[1]-1])
            }
        }
        
        //If it's not the bottom edge
        if(current[0] < maze.length-1){
            //check bottom
            if(maze[current[0]+1][current[1]]  != 0 || maze[current[0]+1][current[1]] ){
                visitNext.push([current[0]+1,current[1]])
            }
        }

        //If it's not the right edge
        if(current[1] < maze.length-1 ){
            //check right
            if(maze[current[0]][current[1]+1]  != 0 || maze[current[0]][current[1]+1] ){
                visitNext.push([current[0],current[1]+1])
            }
        }

        //If it's not the top edge
        if(current[0] > 0){
            //check top
            if(maze[current[0]-1][current[1]]  != 0 || maze[current[0]-1][current[1]]  ){
                visitNext.push([current[0]-1,current[1]])
            }
        }
        
        //As long as visitnext has something do it
        //Breaks otherwise
        if(visitNext.length){
            //Checks if what we are going to visit next
            //is at the edge and assigns it to isEdge
            isEdge = atEdge(maze, visitNext[0]);

            //If it is the edge it's an exit
            //Push out to possibleExits then remove
            if(isEdge){
                possibleExits.push(visitNext[0]);
                visitNext.splice(0,1);
            }

        }
        //For the console.log
        stepCounter++;
    }

    if(possibleExits.length){
        return possibleExits
    }
    else{
        return "No exits"
    }
    
}

console.log(pathOut(maze, [0,2]))