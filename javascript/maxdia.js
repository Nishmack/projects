function maxFromBothDiagonals(matrix) {
    let numRows=matrix.length;
    let maxDia1=Number.NEGATIVE_INFINITY;
    let maxDia2=Number.NEGATIVE_INFINITY;
    for(let i=0;i<numRows;i++){
        maxDia1 = Math.max(maxDia1,matrix[i][i]);
        maxDia2 = Math.max(maxDia2,matrix[i][numRows-1-i]);
    }
    return[maxDia1,maxDia2];
};