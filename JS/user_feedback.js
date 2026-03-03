console.log("---Part 1: Yes/No Question---")

let userAnswerMood="yes";
userAnswerMood=userAnswerMood.toLowerCase().trim();

if(userAnswerMood==="yes"){
    console.log("Great ! Glad to hear you're feeling well.");
}else if(userAnswerMood==="no"){
    console.log("Oh no ! I hope things get better soon.");
}else{
    console.log("Hmm, I didn't get it. Please answer 'yes' or 'no'");
}
console.log("\n");