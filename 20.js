
//hoisting 

gho();
add(2,3);

function add(a,b){
    console.log(a+b);
}


function shu(){
    console.log("shu");

}

function heo(){
    console.log("heo");
}

function leo(){
    console.log("leo");
}

function some(){
    console.log("some")
}

some();

function gho(){
    console.log("gho");
    
}

//recurssion function - 
// base condition - function will stop 
// recurssive condition - function call itself 

function fact(n){
    if(n===0) return 1;
    else return n*fact(n-1);
}

// fact(5)
// 5*fact(4)
// 5*4*fact(3)
// 5*4*3*fact(2)
// 5*4*3*2*fact(1)
// 5*4*3*2*1*fact(0)
// 5*4*3*2*1*1 = 120 


const data = new Set([1,2,3,3,4,4,5]);
console.log(data);

for(let i of data){
    console.log(i);
}

console.log(data.delete(4));
console.log(data);
