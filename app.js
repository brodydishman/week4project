let You=0;
let Dragon=0;
let answer="";
let result;
let number=0;
let number2=0;
//for loop to add to number variable
for (let i=0;i<5; i++){
    number=Math.floor(Math.random() * 5)+1;
}

for (let i=0;i<10; i++){
    number2=Math.floor(Math.random() * 2)+1;
}

while(answer!=="1"&&answer!=="2"&&answer!=="3"&&answer!=="4"&&answer!=="5"){
    answer=prompt("How many attacks would you like to attempt?")
}

// if (number===5){
//     result="You have been slain by the dragon!"
// }
// if (number2===10){
//     result="You have defeated the dragon!"
// }

//while loop like a for loop
// while(start<10){
//     number=number+Math.floor(Math.random() * 5)+1;
//     start++;
// }
// while(start2<5){
//     number=number+Math.floor(Math.random() * 2)+1;
//     start++;
// }


document.body.innerHTML=number;