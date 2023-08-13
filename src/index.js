// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        i % 2 === 0 ? null : matrix[i].reverse();
    }
    return (a = matrix.reduce((acum, item) => acum.concat(item), []));
};
