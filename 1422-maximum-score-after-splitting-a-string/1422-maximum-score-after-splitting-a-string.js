/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let res =0;
    for(let i=1;i<s.length;i++){
        let left= s.slice(0,i);
        let right=s.slice(i);
        let leftCount=0;
        let rightCount=0;
        for(let j=0;j<left.length;j++){
            if(left[j]==="0")leftCount++
        }
        for(let j=0;j<right.length;j++){
            if(right[j]==="1")rightCount++
        }
        res=Math.max(res,leftCount+rightCount)
    }
    return res
};