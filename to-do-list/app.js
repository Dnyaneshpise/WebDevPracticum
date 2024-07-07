import './dom.js'
const date = document.querySelector(".date");

let  now = dayjs()
date.innerText=now.format("MMMM D, YYYY")