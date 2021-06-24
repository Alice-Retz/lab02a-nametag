console.log("hello!")

const topSection = document.getElementById('top-section');
//topSection.style.backgroundColor = "#ff218e";
const middleBackground = document.getElementById('middle');
//middleBackground.style.backgroundColor = "#fcd800";
const bottomSection = document.getElementById('bottom-section');
//bottomSection.style.backgroundColor = "#0194fc";

const defaultButton = document.getElementById('default');
defaultButton.addEventListener('click', ()=>{
topSection.style.backgroundColor = "red";
middleBackground.style.backgroundColor = "white";
middleBackground.style.color = "black";
bottomSection.style.backgroundColor = "red";
})

const pan = document.getElementById('pan');
pan.addEventListener('click', ()=>{
topSection.style.backgroundColor = "#ff218e";
middleBackground.style.backgroundColor = "#fcd800";
middleBackground.style.color = "black";
bottomSection.style.backgroundColor = "#0194fc";
})

const bi = document.getElementById('bi');
bi.addEventListener('click', ()=>{
topSection.style.backgroundColor = "#d60270";
middleBackground.style.backgroundColor = "#9a3fa1";
middleBackground.style.color = "#FFFFFF";
bottomSection.style.backgroundColor = "#0038a8";
})

const trans = document.getElementById('trans');
trans.addEventListener('click', ()=>{
topSection.style.backgroundColor = "#55CDFC"
middleBackground.style.backgroundColor = "#FFFFFF";
middleBackground.style.color = "black";
bottomSection.style.backgroundColor = "#F7A8B8";
})

const middleSection = document.getElementById('middle-section');
const submitName = document.getElementById('submit-name');
const nameInput = document.getElementById('name-input');
submitName.addEventListener('click', ()=>{
middleSection.textContent = nameInput.value;
})

const pronouns = document.getElementById('pronouns');
const submitPronouns = document.getElementById('submit-pronouns');
const pronounsInput = document.getElementById('pronouns-input');
submitPronouns.addEventListener('click', ()=>{
pronouns.textContent = pronounsInput.value;
})

const fontSelect = document.getElementById('font-select');
fontSelect.addEventListener('click', ()=>{
    middleSection.style.fontFamily = fontSelect.value;
    pronouns.style.fontFamily = fontSelect.value;
})
