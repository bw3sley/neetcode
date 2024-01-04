/**
 * @param {number[]} nums
 * @return {number[]}
*/

function productExceptSelf(nums) {
    const numbersLength = nums.length;
    
    const answer = new Array(numbersLength).fill(1);

    let prefixProduct = 1, suffixProduct = 1;

    for (let index = 0; index < numbersLength; index++) {
        answer[index] = prefixProduct;

        prefixProduct *= nums[index];
    }

    for (let index = numbersLength - 1; index >= 0; i--) {
        answer[index] *= suffixProduct;

        suffixProduct *= nums[index];
    }

    return answer;
}