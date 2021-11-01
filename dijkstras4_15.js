

adjList = [
  [{node: 6, weight: 1}],                                             // 0
  [{node: 2, weight: 2}, {node: 3, weight: 1}, {node: 6, weight: 2}], // 1
  [{node: 5, weight: 3}],                                             // 2
  [{node: 1, weight: 1}, {node: 4, weight: 1}],                       // 3
  [{node: 3, weight: 1}, {node: 7, weight: 1}],                       // 4
  [{node: 7, weight: 4}],                                             // 5
  [{node: 5, weight: 8}, {node: 8, weight: 6}, {node: 1, weight: 2}], // 6
  [{node: 8, weight: 2}],                                             // 7
  [{node: 7, weight: 2}],                                             // 8
]

//A Priority Queue helper class
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
}


function ShortestPaths(adjList, source) {
  //Goal is to find minimum distance between the source node and all other nodes using a weighted graph

  //Keep track of where we currently are
  var current = source;

  var visited = [];
  //TODO: Keep track of visited

  //Use Array to store distance values between source node and all other nodes
  var DistanceArr = [];

  //Keep track of where we are going next
  //TODO: Turn this into a Priority Queue
  var visitNext = new PQ()
  visitNext.insert({node: source, distance: 0})

  //initialize the value of each index in the distance array to 0. In the event of an unreachable node, the distance will be 0
  for (var k = 0; k < adjList.length; k++) {
      DistanceArr[k] = Infinity; // Infinity / Unreachable
  }

  DistanceArr[source] = 0;

  //While loop continues as long as there is something in visitNext
  while (!visitNext.isEmpty()) {
      //Pull the next node to visit from the visitNext structure
      current = visitNext.removeMin()
   
      console.log(current)


      //Loop through all of current's edges
      for (var i = 0; i < adjList[current.node].length; i++) {

          var distanceToNext = DistanceArr[current.node] + adjList[current.node][i].weight;
          // Only update DistanceArr if the distance is less than what is already in there
          if(distanceToNext < DistanceArr[adjList[current.node][i].node] ){
              DistanceArr[adjList[current.node][i].node] = distanceToNext;
              visitNext.insert({node: adjList[current.node][i].node, distance: DistanceArr[adjList[current.node][i].node]}); //*
          }
        //}
      }
    
  }
  return DistanceArr;

}

console.log(ShortestPaths(adjList, 6))