function cyclicrotation(numberofTurns){
    while(numberofTurns>0){
       
       number=`${number%10}${parseInt(number/10)}`;
    }
    return Number(number)
    }
    console.log(cyclicrotation(1234,2));