//Group Anagram

var groupAnagrams = function(strs) {

    var mapping={};

    for(let i = 0;i < strs.length; i++){
        var map=strs[i];
        var sorted = map.split('').sort().join('');

        if(!mapping[sorted]) {
            mapping[sorted]=[map];
        } else mapping[sorted].push(map);
    }

    var output = [];
    for (var arr in mapping) {
        output.push(mapping[arr]);
    }

    return output;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));


//3Sum Closest

var threeSumClosest = function(nums, target) {
    var min = Number.MAX_VALUE;
    var result=0;

    nums = nums.sort(function(a, b) {
		return a - b;
	});

    if(nums.length < 3 || nums === null) return [];
    for(let i = 0; i<nums.length; i++){
        var j = i+1;
        var k = nums.length-1;

        while(j < k){
            var sum = nums[i] + nums[j] + nums[k];
            var diff = Math.abs( sum - target );

             if(diff===0) return sum;
            if(diff < min){
              min = diff;
              result = sum;
            }

            if(sum <= target) {
                 j++;
             } else k--;
        }
    }
        return result;
};

console.log(threeSumClosest([-1,2,1,-4],1));
