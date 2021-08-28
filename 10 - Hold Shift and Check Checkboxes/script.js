let checkboxes = [...document.querySelectorAll('input[type="checkbox"]')];

checkboxes.forEach((item) => {
  item.addEventListener('click', handleCheck); //click fires even through keyboard use.
});

let lastChecked;

function handleCheck(e) {
  //check if they had the shift key down
  //And ckeck that they're checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //loop over every checkbox
    checkboxes.forEach((checkbox) => {
      //first clicked checkbox or last clicked checbox, toggle inbetween
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
