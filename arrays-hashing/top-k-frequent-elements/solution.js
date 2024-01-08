/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
*/

function topKFrequent(nums, k) {
    const frequencyMap = new Map();

    // Contar a frequência de cada número
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const buckets = Array(nums.length + 1).fill(null).map(() => []);

    // Criar buckets para armazenar números por frequência
    for (let [num, frequency] of frequencyMap.entries()) {
        buckets[frequency].push(num);
    }

    // Coletar os k elementos mais frequentes
    const result = [];

    // Percorrer os buckets de trás para frente (frequência mais alta primeiro)
    for (let index = buckets.length - 1; index >= 0 && result.length < k; index--) {
        if (buckets[index] !== null) {
            result.push(...buckets[index]);
        }
    }

    return result.slice(0, k); // Garantir que retornamos exatamente k elementos
}