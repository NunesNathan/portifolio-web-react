const landpage = {
  presentation: 'Olá, me chamo Nathan Nunes!',
  text: 'Sou web developer Front end junior, apaixonado por tecnologia e meus olhos brilham por desenvolvimento web & mobile!',
  finishedProjects: 18,
  groupProjects: 4,
}

const rightArrow = ['fas fa-arrow-right', 'fas fa-caret-right', 'far fa-caret-square-right', 'fas fa-caret-square-right', 'fas fa-play', 'fas fa-angle-double-right', 'fas fa-angle-right', 'fas fa-chevron-circle-right', 'fas fa-chevron-right', 'fas fa-long-arrow-alt-right', 'far fa-arrow-alt-circle-right', 'fas fa-arrow-alt-circle-right', 'fas fa-arrow-circle-right' ]

export const randomRightArrow = () => rightArrow[Math.floor(Math.random() * 13)];

export default landpage;
