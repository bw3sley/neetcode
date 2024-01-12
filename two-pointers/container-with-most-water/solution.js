/**
 * @param {number[]} height
 * @return {number}
*/

function maxArea(height) {
    let maxArea = 0, left = 0, right = height.length - 1;
    
    while (left < right) {
        const currentArea = (right - left) * Math.min(height[left], height[right]);

        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        }

        else {
            right--;
        }
    }

    return maxArea;
}