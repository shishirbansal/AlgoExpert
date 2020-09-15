function twoNumberSum(array, targetSum) {
// Write your code here.

	let sum = 0

	if(targetSum =='' || targetSum == null)
		return [];

	else{
		for(let i=0; i< array.length ; i++){
			
			
			if(array[i] >0 || array[i] ==0 ){
				if((targetSum == array[array.indexOf(targetSum - array[i])] + array[i]) && (array.indexOf(targetSum - array[i]) != i)){
								return [array[i] , array[array.indexOf(targetSum - array[i])] ]
					 }
			}
			else{
				if((targetSum == array[array.indexOf(targetSum + array[i])] + array[i]) && (array.indexOf(targetSum - array[i]) != i)){
								return [array[i] , array[array.indexOf(targetSum + array[i])] ]
					 }
				
			}

		}

		return []
	}

}	



// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
