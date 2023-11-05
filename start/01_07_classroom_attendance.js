// Write your code here
function getStudents(classroom){
  let {hasTeachingAssistant, classList} = classroom;
  let teacher, teachingAssistant, students;

  if (hasTeachingAssistant){
    [teacher, teachingAssistant,...students] = classList;
  }else{
    [teacher,...students] = classList;
  }
  return teacher;
  // return teachingAssistant;
  // return students;
}

console.log(getStudents({hasTeachingAssistant: true, classList : ["Prasant", "Priyanka","Prisha",
"Jiwan","Misal","Maya"]}));