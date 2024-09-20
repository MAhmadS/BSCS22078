const projectData = [
  {
    title: "Computer Science Awarness Program",
    date: "May 2024",
    role: "Logistics Team Member",
  },
  {
    title: "Charity Management Website",
    date: "June 2024",
    role: "Co-Creator",
  },
  {
    title: "Sqlite DB Reader (C++)",
    date: "June 2024",
    role: "Creator",
  },
  {
    title: "[BASIC VERSION] Facial Recognition System (Python)",
    date: "December 2023",
    role: "Creator",
  },
  {
    title: "Stopwatch (Assembly x86)",
    date: "April 2024",
    role: "Creator",
  },
  {
    title: "Chess & Ludo (C++ OOP)",
    date: "December 2022 and March 2023",
    role: "Creator",
  },
  {
    title: "Dice Counter (Digital Logic)",
    date: "December 2023",
    role: "Co-Creator",
  },
  {
    title: "Snake Game and Tictactoe (C++)",
    date: "January 2023 and November 2022",
    role: "Creator",
  },
];

const addList = (listData, index) => {
  /*<div class="list">
       <h5>1. Computer Science Awarness Program</h5>
          <h6>May 2024</h6>

          <p class="role">
            Role: <span class="role-text">Logistics Team Member</span>
          </p>
      </div>*/
  let listContainer = document.createElement("div");
  listContainer.classList.add("list");

  let title = document.createElement("h5");
  title.innerText = `${index + 1}. ${listData.title}`;
  listContainer.appendChild(title);

  let date = document.createElement("h6");
  date.innerText = listData.date;
  listContainer.appendChild(date);

  let role = document.createElement("p");
  role.classList.add("role");
  role.innerText = "Role: ";

  let span = document.createElement("span");
  span.classList.add("role-text");
  span.innerText = listData.role;

  role.appendChild(span);

  listContainer.appendChild(role);

  return listContainer;
};

let educationSection = document.getElementById("education");
projectData.forEach((project, index) => {
  educationSection.appendChild(addList(project, index));
});
