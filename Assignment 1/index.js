
//data
const skillData = [
  {
    name: "Programming Languages",
    skills: [
      "C/C++",
      "Python",
      "HTML/CSS/Javascript",
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
          </div>
*/
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
