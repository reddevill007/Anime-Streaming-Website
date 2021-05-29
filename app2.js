const social = document.getElementById("support-us");
const closingBtn = document.getElementById("close");
const supList = document.getElementById("sup");


closingBtn.onclick = () => {
    social.style.display = "none";
}

supList.onclick = () => {
    social.style.display = "flex";
}
