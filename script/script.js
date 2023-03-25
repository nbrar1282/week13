const courseList = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies" },
    { code: "ACIT 1515", name: "Scripting for IT" },
    { code: "ACIT 1630", name: "Database Systems" },
  ];
  
  // Asking the user for a 4-digit number
  let userNumber = prompt("Enter a 4-digit number:");
  
  // Checking whether the number ids valid or not
  while (isNaN(userNumber) || userNumber.toString().length !== 4) {
    userNumber = prompt("Invalid input. Enter a 4-digit number:");
  }
  
  // Check if the provided number matches any code in the courseList array
  let courseFound = false;

for (let course of courseList) {
  if (course.code.includes(userNumber)) {
    console.log(`Yes, I am taking the course: ${course.code} - ${course.name}`);
    courseFound = true;
    break;
  }
}

if (!courseFound) {
  courseList.push({ code: `ACIT ${userNumber}`, name: null });
  console.log(`The course with code ACIT ${userNumber} has been added to the course list.`);
}



