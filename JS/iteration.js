const todoList=[
    "Learn JavaScript basics",
    "Practice control structures",
    "Understand loops",
    "Build a small project",
    "Take a break"
];


for(let i=0; i<todoList.length; i++){
    console.log(`${i+1}.${todoList[i]}`);
}
console.log("\n");

let taskToFind="Build a small project";
let found=false;
let index=0;

while(index<todoList.length && !found){
    if(todoList[index]===taskToFind){
        console.log(`Task "${taskToFind}" found at index ${index}.`);
        found=true;
    }
    index++;
}
if(!found){
    console.log(`Task "${taskToFind}" not found.`);
}
console.log("\n");

const colors=["red","green","blue"];

for (const color of colors){
    console.log(`Color:${color}`);
}

colors.forEach((color1, index)=>{
console.log(`Colors at index ${index}:${color1}`);
});



































