const calctempamplitudenew = function (t1, t2, t3){
    
    const temp = t1.concat(t2, t3);
    console.log(temp);
    let max = temp[0];
    let min = temp[0];
    for(i = 0; i < temp.length; i++){
        if(temp[i] > max) max = temp[i];
        if(temp[i] < min) min = temp[i];
        
    }
    console.log(max, min);
};
const amplitudenew = calctempamplitudenew ([3, 7, 4], [5, 8, 6], [11, 9, 10]);
console.log(amplitudenew);
 
