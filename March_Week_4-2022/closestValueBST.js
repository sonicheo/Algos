

// BST Constructor
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Inputs values into the BST tree
function BSTInput(){
    const root = new BST(10);
    root.left = new BST(5);
    root.left.left = new BST(2);
    root.left.left.left = new BST(1);
    root.left.right = new BST(5);
    root.right = new BST(15);
    root.right.left = new BST(13);
    root.right.left.right = new BST(14);
    root.right.right = new BST(22);


    return root
}


function findClosestValueInBST(tree, target) {
    var currentNode = tree, closestNode = Infinity;


    while (currentNode) {
        
        // If the absolute value of the current node is less then set it as the closest node
        if(Math.abs(currentNode.value - target) < Math.abs(closestNode - target)) closestNode = currentNode.value;

        if(currentNode.value === target)  return currentNode.value

        // If the target value is greater go to the right of the tree
        if(target > currentNode.value){
            currentNode = currentNode.right;
        }
        // If the target value is less, go to the left of the tree
        else if(target < currentNode.value){
            currentNode = currentNode.left;
        }
        // If it's not possible to continue, return closestNode
        else{
            return closestNode
        }

    }
    return closestNode
}


console.log(findClosestValueInBST(BSTInput(), 12))