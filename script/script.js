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


function CourseArray() {
  const courses = [];
  const articles = document.querySelectorAll("article");
  for (const article of articles) {
    const courseName = article.querySelector("h2").textContent;
    const courseDate = article.querySelector("p").textContent;
    const course = { code: courseName, date: courseDate };
    courses.push(course);
  }
  console.log(courses)
  return courses;
 
}

const course_list2 = CourseArray()

function findCourse(course_list2) {
 
  let found = false;
  for (const course of course_list2) {
    if (course.code.includes(userNumber)) {
      // If the course code includes the user number, change the background color to green
      const article = document.getElementById(userNumber);
      article.style.backgroundColor = "green";
      section.style.backgroundColor = "green"
      found = true;
    }
  }

  if (!found) {
    // If no course is found, add a new article element with the user number as the code and "N/A" as the description
    const newArticle = document.createElement("article");
    const newCode = `ACIT ${userNumber} `;
    const newDate = "Fall 2020";
    const newContent = `
      <a href="#"><h2>${newCode}</h2></a>
      <p>${newDate}</p>`
    const newsection = document.createElement("section")
    
    newArticle.innerHTML = newContent;
    document.querySelector("main").appendChild(newArticle);
    newArticle.classList.add("new_article")
    newsection.classList.add("new_section")

    newsection.textContent = "N/A"
    document.querySelector("main").appendChild(newsection)
  }
}



CourseArray()
findCourse(course_list2)