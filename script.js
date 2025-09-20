
let divpara = document.querySelector(".divpara");
let paratext = document.querySelector(".paratext");
let btn1 =document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2")

btn1.addEventListener("click", ()=>{
   let char1 = String.fromCharCode(Math.floor(97+Math.random()*26));
   let char2 = String.fromCharCode(Math.floor(97+Math.random()*26));
   let char3 = String.fromCharCode(Math.floor(97+Math.random()*26));
   let char = `${char1}${char2}${char3}`

   let sp1 = String.fromCharCode(Math.floor(35+Math.random()*33));
   let sp2 = String.fromCharCode(Math.floor(35+Math.random()*33));
   let sp3 = String.fromCharCode(Math.floor(35+Math.random()*33));
   let sp = `${sp1}${sp2}${sp3}`

   let cap1 = String.fromCharCode(Math.floor(25+Math.random()*66));
   let cap2 = String.fromCharCode(Math.floor(25+Math.random()*66));
   let cap3 = String.fromCharCode(Math.floor(25+Math.random()*66));
   let cap = `${cap1}${cap2}${cap3}`

   let num = Math.floor(Math.random()*10000);


        paratext.innerText = `${sp}${char}${num}${cap}`;
});

btn2.addEventListener("click" , ()=>{
    paratext.innerText = "welcome for genrate password";
});



