
function disCalc(a, b, c){

    let D = Math.pow(b, 2)- 4 * a * b;
    console.log("Delta = " + D);
    if(D < 0){
        console.log("aren't true value");
    }else if(D == 0){
        let x = -(b/2*a);
        console.log("x=" + x);
    }else if(D > 0){
        let x1 = -b + Math.sqrt(D) / 2 * a;
        let x2 = -b - Math.sqrt(D) / 2 * a;
        console.log("x1 = " + x1);
        console.log("x2= " + x2);
    }else{
        console.log("unknown value");   
    }

}

disCalc(6,-2,3);


