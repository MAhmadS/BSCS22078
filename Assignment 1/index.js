//skills
const skillData = [
  {
    name: "Programming Languages",
    skills: [
      "C/C++",
      "Python",
      "HTML/CSS/Javascript",
      "React/Express Basics",
      "SQL",
      "Assembly Language",
    ],
  },
  {
    name: "Graphic Designing",
    skills: [
      "Adobe Illustrator",
      "Adobe Premiere Pro",
      "Canva",
      "Wondershare Filmora",
    ],
  },
  { name: "Soft Skills", skills: ["Microsoft Word", "Microsoft PowerPoint"] },
];

let skillList = document.getElementById("skills-list");

for (let i = 0; i < skillData.length; i++) {
  /*<button class="accordion-btn"><!--Js will do manipulation here--></button>
    <div class="panel">
    <!--Js will do manipulation here-->
    </div>*/
  const newAccordionBtn = document.createElement("button");
  newAccordionBtn.textContent = skillData[i].name;
  newAccordionBtn.classList.add("accordion-btn");

  skillList.appendChild(newAccordionBtn);

  const panel = document.createElement("div");
  panel.classList.add("panel");

  for (let j = 0; j < skillData[i].skills.length; j++) {
    const newPTag = document.createElement("p");
    newPTag.innerText = skillData[i].skills[j];
    panel.appendChild(newPTag);
  }

  skillList.appendChild(panel);
}

//adding accordian functionality
let accordionBtns = document.getElementsByClassName("accordion-btn");

for (let i = 0; i < accordionBtns.length; i++) {
  accordionBtns[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//education
const educationData = [
  {
    title: "BSc. Computer Science",
    institute: "Information Technology University of The Punjab",
    tenuare: "2022-current",
  },
  {
    title: "FSc. Pre-Engineering",
    institute: "Govt. College University, Lahore",
    tenuare: "2020-2022",
  },
];

const addList = (listData) => {
  /*<div class="list">
    <h5><!--Js will do manipulation here--></h5>
    <p><!--Js will do manipulation here--></p>
    <h6><!--Js will do manipulation here--></h6>
    </div>*/
  let listContainer = document.createElement("div");
  listContainer.classList.add("list");

  let title = document.createElement("h5");
  title.innerText = listData.title;
  listContainer.appendChild(title);

  let institute = document.createElement("p");
  institute.innerText = listData.institute;
  listContainer.appendChild(institute);

  let tenuare = document.createElement("h6");
  tenuare.innerText = listData.tenuare;
  listContainer.appendChild(tenuare);

  return listContainer;
};

let educationSection = document.getElementById("education");
educationData.forEach((education) => {
  educationSection.appendChild(addList(education));
});
