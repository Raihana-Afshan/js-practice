let student = {
    name:"Affu" ,
    age: 20,
    course: "Full Stack",
    isEnrolled: true
};

console.log("Name:" , student.name); //Dot notation
console.log("Course:" , student["course"]); //Bracket notation

//Adding a new property
student.country ="UK";

//Updating a property
student.age=22;

//Deleting a property
delete student.isEnrolled;


console.log("Updated student:" , student);

//Looping through keys and values
for (let key in student) {
console.log(`${key} --> ${student[key]}`);
}


//Nested object

let project = {
    title: "Task Tracker",
    tech: {
        frontend: "React",
        backend: "Spring Boot"
    }
};

console.log("Backend tech:" , project.tech.backend);