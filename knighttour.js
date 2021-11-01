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


//makes chessboard
function makeChessboard(size){
    var chessBoard = new Array(size);
    for(var i = 0; i < chessBoard.length; i++){
        chessBoard[i] = new Array(size);
    }
    return chessBoard;
}

function knightPiece(chessBoard, start){
    var current = 0;

    var visitNext = [];
    var stepNumber = 0;

    visitNext.push(start)
    
    while(visitNext.length){
        
        current = visitNext[0];
        
        
        console.log("Step: " + stepNumber + " Node: " + current)
        chessBoard[current[0]][current[1]] = stepNumber;
        
        visitNext.splice(0,1);

        stepNumber++;

        //Up 2, Left 1
        //else If it isn't going to past the board and isn't false
        if(
            current[0] > 1 && 
            current[1] > 0 &&
            chessBoard[current[0]-2][current[1]-1] == undefined
            ){
                visitNext.push([current[0]-2,current[1]-1])
            }

        //Up 2, Right 1
        //else If it isn't going to past the board and isn't false
        else if(
            current[0] > 1 &&
            current[1] < chessBoard.length-1 &&
            chessBoard[current[0]-2][current[1]+1] == undefined
            ){
                visitNext.push([current[0]-2,current[1]+1])
            }
        
        //Up 1, Left 2
        else if(
            current[0] > 0 && 
            current[1] > 1 &&
            chessBoard[current[0]-1][current[1]-2] == undefined
            ){
                visitNext.push([current[0]-1,current[1]-2])
            }

        else if(
            current[0] > 0 && 
            current[1] < chessBoard.length-2 &&
            chessBoard[current[0]-1][current[1]+2] == undefined
            ){
            //Up 1, Right 2
                visitNext.push([current[0]-1,current[1]+2])
            }     

        else if(
            current[0] < chessBoard.length-2 && 
            current[1] > 0 &&
            chessBoard[current[0]+2][current[1]-1] == undefined
            ){
            //Down 2, Left 1
                visitNext.push([current[0]+2,current[1]-1])
            }

        else if(
            current[0] < chessBoard.length-2 && 
            current[1] < chessBoard.length-1 &&
            chessBoard[current[0]+2][current[1]+1] == undefined
            ){
            //Down 2, Right 1
                visitNext.push([current[0]+2,current[1]+1])
            }

        else if(
            current[0] < chessBoard.length-1 && 
            current[1] > 1 &&
            chessBoard[current[0]+1][current[1]-2] == undefined
            ){
            //Down 1, Left 2
                visitNext.push([current[0]+1,current[1]-2])
            }

        else if(
            current[0] < chessBoard.length-1 && 
            current[1] < chessBoard.length-2 &&
            chessBoard[current[0]+1][current[1]+2] == undefined
            ){
            //Down 1, Right 2
                visitNext.push([current[0]+1,current[1]+2])
            }
        else{
            console.log("no move")
        }
    }

    for(var i = 0; i < chessBoard.length; i++){
        console.log(chessBoard[i]);
    }

}

knightPiece(makeChessboard(8),[0,0])