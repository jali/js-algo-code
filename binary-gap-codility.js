function solution(N) {
    // given positive integer, find the maximum sequence of consecutive zeros that is surrounded by ones at both ends
    // in the binary representation of N
    // 100%
    // write your code in JavaScript (Node.js 8.9.4)

    const biStr = N.toString(2);
    console.log('binary string for', N, ':', biStr)
    let oneStart = false;
    let oneEnd = false;
    let biGapTemp = 0;
    let biGapMax = 0;
    const biArr = biStr.split('');
    for (i = 0; i < biArr.length; i++){
        if (!oneEnd && biArr[i] === '0') {
            biGapTemp++;
        }
        
        if (biArr[i] === '1') {
            if (oneStart && biGapTemp > 0){
                oneEnd = true;
            } else {
                oneStart = true;
                oneEnd = false;
            }
        }

        if (oneEnd) {
            if (biGapTemp > biGapMax) {
                biGapMax = biGapTemp;
            }
            biGapTemp = 0;
            oneEnd = false; 
        }
    }
    return biGapMax;
}
console.log('Result:', solution(7));
console.log('Result:', solution(561892));
console.log('Result:', solution(587910));
console.log('Result:', solution(1376796946));
console.log('Result:', solution(1073741825));
