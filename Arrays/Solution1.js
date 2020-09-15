function twoNumberSum(array, targetSum) {
  // Write your code here.
	
	let sum = 0
	
	if(targetSum =='' || targetSum == null)
		return [];
	
	else{
		for(let i=0; i< array.length ; i++){
			for(let j=0 ; j<array.length;j++){
				if(i!=j){
					if((array[i]+array[j]) == targetSum){
						return [array[i], array[j]];
					}
				}
			}
		}
	}
	
	return []
	
	
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
