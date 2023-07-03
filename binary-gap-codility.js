function solution(N) {
    // given positive integer, find the maximum sequence of consecutive zeros that is surrounded by ones at both ends
    // in the binary representation of N
    // 100%
    // write your code in JavaScript (Node.js 8.9.4)

    const binStr = N.toString(2);

    let oneStart = false;
    let oneEnd = false;
    let binGapTemp = 0;
    let binGapMax = 0;
    
    const binArr = binStr.split('');

    for (i=0; i<binArr.length; i++){
            
        if(!oneEnd && binArr[i] === '0') {
            binGapTemp++;
        }
        
        if(binArr[i] === '1') {
            if (oneStart && binGapTemp > 0){
                oneEnd = true;
            } else {
                oneStart = true;
                oneEnd = false;
            }
        }

        if(oneEnd) {
            if(binGapTemp > binGapMax) {
                binGapMax = binGapTemp;
            }
            binGapTemp = 0;
            oneEnd = false; 
        }
    }
    return binGapMax;
}
console.log(solution(587910));

// test numbers 561892 74901729 1376796946 1073741825