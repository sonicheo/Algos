// Challenge 0
// Given an NxN matrix create a "fill" algorithm that takes in a coordinate and a value. 
// The fill algorithm should change the coordinate's value to the parameter value as well as
// propogate that value to all adjacent coordinates that have the same original value
// this propogation should continue multiple degrees until all adjacent coordinates with the same
// original value are changed to the new value
// Sample starting 8x8 matrix
var grid = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 3, 0],
    [0, 1, 1, 1, 1, 0, 3, 0],
    [0, 0, 1, 1, 1, 3, 3, 0],
    [0, 0, 2, 2, 2, 2, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
]
// Sample completed algorithm: fill([3,2], 4)
// [
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 4, 0, 3, 0],
//     [0, 4, 4, 4, 4, 0, 3, 0],
//     [0, 0, 4, 4, 4, 3, 3, 0],
//     [0, 0, 2, 2, 2, 2, 0, 0],
//     [0, 0, 0, 0, 0, 1, 1, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0],
// ]

//Challenge 0:


function colorFill(grid, node, value){

    var current;
    var visitNext = [];
    var nodeValue = grid[node[0]][node[1]]

    visitNext.push(node);

    while(visitNext.length){

        current = visitNext[0];
        visitNext.splice(0,1);
        
        grid[current[0]][current[1]] = value;


        //If it's not the left edge
        if(current[1] > 0){
            //check left
            if(grid[current[0]][current[1]-1] == nodeValue && grid[current[0]][current[1]-1] != value ){
                visitNext.push([current[0],current[1]-1])
            }
        }
        
        //If it's not the bottom edge
        if(current[0] < grid.length-1){
            //check bottom
            if(grid[current[0]+1][current[1]]  == nodeValue && grid[current[0]+1][current[1]] != value  ){
                visitNext.push([current[0]+1,current[1]])
            }
        }

        //If it's not the right edge
        if(current[1] < grid.length-1 ){
            //check right
            if(grid[current[0]][current[1]+1]  == nodeValue && grid[current[0]][current[1]+1] != value  ){
                visitNext.push([current[0],current[1]+1])
            }
        }

        //If it's not the top edge
        if(current[0] > 0){
            //check top
            if(grid[current[0]-1][current[1]]  == nodeValue && grid[current[0]-1][current[1]] != value  ){
                visitNext.push([current[0]-1,current[1]])
            }
        }
        
    }
    return grid;
}

colorFill(grid, [3,1], 5)


// Challenge 1
// Create an HTML page with a 100 x 100 grid with each square represented as a 10px x 10px square
// Create 3 color pickers at the bottom of the screen one for blue, green, and red
// Upon clicking a color picker the color picker should be "selected"
// With a color picker selected clicking a square within the grid should change the color of that square to the selected color
// With a color picker selected shift-clicking a square within the grid should apply the fill algorithm to that square

// Challenge 2
// Complete 3 or more of the following additional features
// Add other colors & expand the grid
// Add a random color selector
// Add the ability to have a modified fill that only fills the clicked square and immediately adjacent squares
// Add animation to the fill algorithm
// Add click and drag functionality similar to using a pencil