const jokeBtn = document.querySelector('#js-jokeBtn');
let para = document.querySelector('.main-description');
const req = new XMLHttpRequest();

jokeBtn.addEventListener("click", ()=>{
  req.open("GET","https://icanhazdadjoke.com/");
  req.setRequestHeader('Accept', 'application/json');
  req.send();
});
req.onload = function(){
  if (req.status === 200) {
    const resText = req.responseText;
    const msg = JSON.parse(resText).joke;
    para.innerText = msg;
  } else {
    para.innerText = "No jokes available :(";
  }
}
req.onerror=function(e){
  console.log(e)
  para.innerText="No Jokes are available : (";
};

// async function addJoke(){
//   try{  
//     const response = await axios.get('https://icanhazdadjoke.com/',{
//       headers: {'Accept': 'application/json'}
//     });
//     const msg =response.data.joke;
//     para.innerText=msg;
//   }catch(e){
//     para.innerText="No Jokes are available :(";
//   }
// }









