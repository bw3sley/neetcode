/**
 * @param {number[]} nums
 * @return {number}
*/

function longestConsecutive(nums) {
    const numSet = new Set(nums);

    let longestStreak = 0;

    for (const num of numSet) {
        // Verifica se é o início de uma sequência
        if (!numSet.has(num - 1)) {
            let currentNum = num, currentStreak = 1;
            
            // Conta enquanto os números consecutivos existirem no conjunto
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}