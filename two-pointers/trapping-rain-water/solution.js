/**
 * @param {number[]} height
 * @return {number}
*/

function trap(height) {
    const n = height.length;

    if (n === 0) return 0;

    let totalWater = 0;

    const maxLeft = new Array(n).fill(0);
    const maxRight = new Array(n).fill(0);

    // Preenche o array de máximos à esquerda
    maxLeft[0] = height[0];

    for (let index = 1; index < n; index++) {
        maxLeft[index] = Math.max(maxLeft[index - 1], height[index]);
    }

    // Preenche o array de máximos à direita
    maxRight[n - 1] = height[n - 1];

    for (let index = n - 2; index >= 0; index--) {
        maxRight[index] = Math.max(maxRight[index + 1], height[index]);
    }

    // Calcula a quantidade de água retida em cada posição
    for (let index = 0; index < n; index++) {
        totalWater += Math.min(maxLeft[index], maxRight[index]) - height[index];
    }

    return totalWater;
}