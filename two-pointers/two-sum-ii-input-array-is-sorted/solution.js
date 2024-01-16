/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/

function twoSum(nums, target) {
    const numMap = new Map();

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if (numMap.has(complement)) {
            return [numMap.get(complement), index + 1];
        }

        numMap.set(nums[index], index);
    }

    return [];
}