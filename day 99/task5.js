function gradeStudent(scores, callback) {
    return scores.map(callback);
}

function assignGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}


const studentScores = [95, 85, 76, 65, 55];
const grades = gradeStudent(studentScores, assignGrade);
console.log(grades); 
