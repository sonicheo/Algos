adjList = [
    [1,2],
    [3],
    [3,5],
    [4],
    [5],
    [3]
]

adjList2 = [
    [1],
    [2,3,6],
    [5],
    [4],
    [],
    [],
    []
]

// BFS uses a Queue -- First in First out
// DFS uses a Stack -- Last in First out

// Create a Breadth first Search that takes in an adjacency
// list and a start index and end index and traverses
// the graph from start to end
// The function should exit when it finds end or should return
// false if not path from start to end exists

function Queue() {
    this.arr = []
    this.enqueue = function(val) {
        this.arr.push(val)
    }
    this.dequeue = function(val) {
        return this.arr.shift()
    }
    this.length = function() {
        return this.arr.length
    }
}
function BFS(adjList, start, end) {
    // 1. Find something to help us keep track of what
    // we're going to visit next
    var visitNext = new Queue()
    visitNext.enqueue(start)
    // 2. Keep track of what we have visited
    var visited = []
    // 3. Create a variable that will hold our current node index
    var current;

    while(visitNext.length() != 0) { 
        // First set current to the next value in visitNext
        current = visitNext.dequeue()
        // Set visited at current index to be true so that we don't 
        // double count or get into an infinite loop
        visited[current] = true

        // Check if current is the end
        if(current == end) {
            return true
        }

        // Loop through all edges of our current node
        for(var i = 0; i < adjList[current].length; i++) {
            // If not then add the edge to the queue to visit in the future
            if(visited[adjList[current][i]] != true) {
                visitNext.enqueue(adjList[current][i])
            }  
        }
        console.log(visitNext);
    }
    return false;
}

function DFS(adjList, start, end) {
    // 1. Find something to help us keep track of what
    // we're going to visit next
    var visitNext = [start]
    // 2. Keep track of what we have visited
    var visited = []
    // 3. Create a variable that will hold our current node index
    var current;

    while(visitNext.length != 0) { 
        // First set current to the next value in visitNext
        current = visitNext[0]
        // Next remove that value from visitNext
        visitNext.shift();
        // Set visited at current index to be true so that we don't 
        // double count or get into an infinite loop
        visited[current] = true

        // Check if current is the end
        if(current == end) {
            return true
        }

        // Loop through all edges of our current node
        for(var i = 0; i < adjList[current].length; i++) {
            // If not then add the edge to the queue to visit in the future
            if(visited[adjList[current][i]] != true) {
                // This is where we push edges to visitNext
                visitNext.unshift(adjList[current][i])
            }  
        }
        console.log(visitNext);
    }
    return false;
}

console.log(BFS(adjList2, 0, 6)) 
// return true
console.log(DFS(adjList2, 0, 6))