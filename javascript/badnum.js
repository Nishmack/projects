function sumOfDig(number){
    let sum=0;
    while(number>0){
        sum += number%10;
        number = Math.floor(number/10);

    }
    return sum;
   
}
function isBadNum(number){
    const sum = sumOfDig(number);
    return number%sum===0;
}
function Bad_Number(n){
   const badNumbers=[];
   let currentNum = 10;
   while(badNumbers.length<n){
    if(isBadNum(currentNum)){
        badNumbers.push(currentNum)
    }
    currentNum++;
   }
   return badNumbers;

}