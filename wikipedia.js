const dropdownButton = document.getElementById('dropdown-button');
const dropdownContainer = document.getElementById('dropdown-container');
const arrowDown = document.getElementById('arrow-down');
const lineThrough = document.getElementById('line-through');
const wrapper = document.getElementById('line-through-wrapper');
const userInput = document.getElementById('search-bar');
const lookUpBtn = document.getElementById('lookup-btn');
const languagesDropdown = document.getElementById('languages-dropdown');

const langArr = [
  "English",
  "EN",
  "Português",
  "Italiano",
  "Français",
  "Español",
  "日本語",
  "فارسی",
  "中文",
  "Deutsch",
  "Русский"
];

let langAdress = ['en'];

languagesDropdown.addEventListener("change", () => {
  const lang = languagesDropdown.value;
  
  switch (lang) {
    case langArr[0]:
    case langArr[1]:
      langAdress.push('en');
      break;
    case langArr[2]:
      langAdress.push('pt');
      break;
    case langArr[3]:
      langAdress.push('it');
      break;
    case langArr[4]:
      langAdress.push('fr');
      break;
    case langArr[5]:
      langAdress.push('es');
      break;
    case langArr[6]:
      langAdress.push('jp');
      break;
    case langArr[7]:
      langAdress.push('fa');
      break;
    case langArr[8]:
      langAdress.push('zh');
      break;
    case langArr[9]:
      langAdress.push('de');
      break;
    case langArr[10]:
      langAdress.push('ru');
      break;
  }
});

dropdownButton.addEventListener('click', () => {
  const percentageWidth = "79%";
  dropdownContainer.classList.toggle('expand');
  let hasExpand = dropdownContainer.classList.contains('expand');
  if (hasExpand) {
    arrowDown.style.transform = 'rotateZ(180deg)';
    lineThrough.style.maxWidth = percentageWidth;
    wrapper.style.maxWidth = '0px';
  } else {
    arrowDown.style.transform = 'rotateZ(0deg)';
    lineThrough.style.maxWidth = '460px';
    wrapper.style.maxWidth = '335px';
  }
});

const takeUserTo = (event) => {
  const userInputValue = userInput.value;
  const path = `https://${langAdress[langAdress.length-1]}.wikipedia.org/wiki/Special:Search?go=Go&search=${userInputValue}&ns0=1`;
  window.location.href = path;
};


userInput.addEventListener("keydown", (event) => {
  if(event.key === "Enter") {   // The if statement helps the submit works smoothly
    takeUserTo(event);// If you not use it, your input.value will not work properly when redirected
  }
});

lookUpBtn.addEventListener("click", takeUserTo);