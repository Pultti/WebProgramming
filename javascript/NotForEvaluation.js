
// class GradeTable {
//   constructor(id) {
//     this.el = document.getElementById(id);
//   }

//   show() {
//     this.el.style.display = "block";
//   }

//   hide() {
//     this.el.style.display = "none";
//   }

//   slideIn() {
//     this.el.style.transform = "translateX(0%)";
//   }

//   slideOut() {
//     this.el.style.transform = "translateX(-100%)";
//   }

//   toggleColor() {
//     console.log("Toggle color in SchoolProjects");
//     this.el.style.backgroundColor = "lightGray";
//   }

  // highlight() {
    // For tables
    // const rows = this.el.querySelectorAll('table tbody tr');
    // rows.forEach(row => {
    //   const gradeCell = row.querySelector('td:nth-child(2)');
    //   if (gradeCell && gradeCell.textContent === '5') {
    //     row.style.backgroundColor = 'gold';
    //   }
    // });
    
    // For list items
//     const listItems = this.el.querySelectorAll('ul li');
//     listItems.forEach(li => {
//       const textContent = li.textContent;
//       const regex = /Grade 5|Passed/;
//       if (regex.test(textContent)) {
//         li.style.backgroundColor = 'gold';
//       }
//     });
//   }
// }

// class SchoolProjects extends GradeTable {
//   constructor(id) {
//     super(id);
    // this.ulElement = this.el.querySelector('ul'); // Get the ul element, faster way. Does not matter here, but good to know.
//     super.toggleColor();
//     super.highlight(); 
//   }
  
//   toggleColor() {
//     console.log("Toggle color in SchoolProjects");
//      const ulElement = this.el.querySelector('ul');
//      ulElement.classList.add('list-Color');
//   }
// }


// class MyProjects extends SchoolProjects {
//   constructor(id) {
//     super(id);
    // super.toggleColor(); // Call toggleColor method GradeTable and SchoolProjects
//   }

// }

// document.addEventListener('DOMContentLoaded', function() {
//   const gradeTableElement = new GradeTable('gradeTableSlide');
//   const schoolProjectsElement = new SchoolProjects('schoolProjectsSlide');
//   const myProjectsElement = new MyProjects('myProjectsSlide');

//   setClickListener('gradeTableHeader', gradeTableElement, [gradeTableElement]);
//   setClickListener('schoolProjectsHeader', schoolProjectsElement, [gradeTableElement, schoolProjectsElement]);
//   setClickListener('myProjectsHeader', myProjectsElement, [gradeTableElement, schoolProjectsElement, myProjectsElement]);
// });

// function setClickListener(id, element, _hierarchy) {
//   document.getElementById(id).addEventListener('click', function() {
//     if (element.el.style.display === "none" || element.el.style.display === "") {
//       element.show();
//       element.slideIn();
//       element.toggleColor();
//       element.highlight();
//     } else {
//       element.slideOut();
      
//       setTimeout(() => {
//         element.hide();
//       }, 500);
//     }
//   });
// }
