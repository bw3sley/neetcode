/**
 * @param {character[][]} board
 * @return {boolean}
*/

function isValidSudoku(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const columns = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let index = 0; index < 9; index++) {
        for (let _index = 0; _index < 9; _index++) {
            const num = board[index][_index];

            if (num !== ".") {
                const boxIndex = Math.floor(index / 3) * 3 + Math.floor(_index / 3);

                if (rows[index].has(num) || columns[_index].has(num) || boxes[boxIndex].has(num)) {
                    return false;
                }

                rows[index].add(num);
                columns[_index].add(num);
                boxes[boxIndex].add(num);
            }
        }
    }

    return true;
}