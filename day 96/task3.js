const students = [
    { name: "ანნა", score: 85 },
    { name: "მიხეილი", score: 92 },
    { name: "სალომე", score: 78 }
];

students.push({ name: "გიორგი", score: 88 });

const topStudent = students.reduce((max, student) => (student.score > max.score ? student : max), students[0]);

const highScorers = students.filter(student => student.score > 80).map(student => student.name);

console.log(students);
console.log(topStudent);
console.log(highScorers);
