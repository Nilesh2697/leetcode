/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
        let res=new Array(img.length),cont,acc;
    for(let i=0;i<res.length;i++){
        res[i]=new Array(img[0].length)
    }

    for(let i=0;i<img.length;i++){
        for(let j=0;j<img[0].length;j++){
            cont=0;
            acc=0;
            if(i-1>=0){
                if(j-1>=0){
                    acc+=img[i-1][j-1]
                    cont++
                }
                acc+=img[i-1][j]
                cont++
                if(j+1<img[0].length){
                    acc+=img[i-1][j+1]
                    cont++
                }
            }
           

            if(j-1>=0){
                acc+=img[i][j-1]
                cont++
            }
            acc+=img[i][j]
            cont++
            if(j+1<img[0].length){
                acc+=img[i][j+1]
                cont++
            }
            if(i+1<img.length){
                if(j-1>=0){
                    acc+=img[i+1][j-1]
                    cont++
                }
                acc+=img[i+1][j]
                cont++
                
                if(j+1<img[0].length){
                    acc+=img[i+1][j+1]
                    cont++
                }
            }
           
            res[i][j]=Math.floor(acc/cont)
        }
    }
    return res
};