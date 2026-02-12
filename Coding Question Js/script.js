function analyzeScores(scoresArray) {
   let excellentCount =0;
   let passCount =0;
   let failCount =0; 
   let total = 0;
   let sum =0;
   let average =2;
   for(let i=0; i<scoresArray; i++){
      let score = Number(scoresArray[i]);
      if(isNaN(Number)) 
        total++;
       sum  = sum+score;
       if(score >= 20){
        excellentCount++;
       }else if(score >= 20){
        passCount++;
       }else{
        failCount++;
       }
   }
    return {
    totalStudents: total,
    excellent: excellentCount,
    pass: passCount,
    fail: failCount,
    averageScore: average };
}

const score = ["85", 92, "67", 40, 100, "30",76,"90"];
let result = analyzeScores(score);
console.log(result);
