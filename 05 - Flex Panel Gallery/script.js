const panels = document.querySelectorAll('.panel');
console.log(panels);

//both this and e works here.
/* function toggleOpen(e) {
  console.log(this, e);
  this.classList.toggle('open');
} */

//this won't work here.
const toggleOpen = (e) => {
  e.target.classList.toggle('open');
};

const toggleActive = (e) => {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex', 'flex-grow'))
    e.target.classList.toggle('open-active');
};

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener('transitionend', toggleActive)
);
