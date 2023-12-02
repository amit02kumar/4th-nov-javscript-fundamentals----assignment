let principal = 10000;
let rate= 2.5;
let time = 1;
function calculteSimpleInterest(principal, rate, time) {
    let simpleInterest=(principal * rate * time)/100;
    return simpleInterest;
}
let result = calculteSimpleInterest(principal,rate,time);
console.log(`Principal amount : ${principal}`);
console.log(`Rate of Interest : ${rate}`);
console.log(`Time : ${time}`);
console.log(`Simple Interest : ${result}`);
