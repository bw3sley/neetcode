/**
 * @param {number[]} nums
 * @return {number[][]}
*/

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    
    const result = [];

    for (let index = 0; index < nums.length - 2; index++) {
        // Se o número atual é o mesmo que o anterior, pula para evitar duplicatas
        if (index > 0 && nums[index] === nums[index - 1]) continue;

        let left = index + 1
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[index] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[index], nums[left], nums[right]]);

                // Pula elementos duplicados para evitar trios repetidos
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--
            }

            else if (sum < 0) {
                left++; // Aumenta a soma movendo o ponteiro esquerdo para a direita
            }

            else {
                right--; // Diminui a soma movendo o ponteiro direito para a esquerda
            }
        }
    }

    return result;
}