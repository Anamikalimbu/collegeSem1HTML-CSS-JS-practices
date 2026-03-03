//function to calculate area
function calculateRectangleArea(width,height){
    if(typeof width!=='number'||typeof height!=='number'||width<0||height<0){
        return "Invalid input: Width and height must be non-negative numbers.";
    }
    let area=width*height;
    return area;
}
// function to calculate Simple interest 
const calculateSimpleInterest=(principal,rate,timeInYears)=>{<
    if(typeof principal!=='number'|| typeof rate!=='number'||typeof timeInYears!=='number'||principal<0||rate<0||timeInYears<0){
        return "Invalid input: Principal, rate, and time must be non-negative numbers."
    }
    let interest=(principal*rate*timeInYears)/100;
    return interest;
}

// Using the Functions
console.log("---Rectangle Area---");
let area1=calculateRectangleArea(10,5);
console.log(`Area of 10*5 rectangle: ${area1}`);

console.log("---Simple Interest---");
let interest1=calculateSimpleInterest(1000,5,2);
console.log("Simple interest for $1000 at 5% for 2 years: $" + interest1.toFixed(2));