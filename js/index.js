var temp=new Date();
function f(){
	console.log(temp);
	if(false){
		var temp="hello world";
	}
}
f();
//const 命令
const PI=3.1415;
console.info(PI);
// PI=3; TypeError: Assignment to constant variable.
var [a,b,c]=[1,2,3];
console.log(a,b,c);