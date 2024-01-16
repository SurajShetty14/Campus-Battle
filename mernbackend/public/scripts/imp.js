
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};




//profile
const image=document.querySelector("img"),
input= document.querySelector("input");
input.addEventListener("change",()=>{
    image.src=URL.createObjectURL(input.files[0]);
})
const editButton = document.querySelector('.edit-button');
const saveButton = document.querySelector('.save-button');

const profileInputs = document.querySelectorAll('.profile-input');

editButton.addEventListener('click', () => {
    profileInputs.forEach(input => input.removeAttribute('disabled'));
});

saveButton.addEventListener('click', () => {
    // Save profile information to server

    profileInputs.forEach(input => input.setAttribute('disabled', true));
});

const mainContent = document.getElementById("main-content");
function handleProfileClick()
{
  mainContent.innerHTML = profileCode;
}
