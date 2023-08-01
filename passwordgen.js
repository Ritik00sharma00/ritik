const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet="abcdefghijklmnopqrstuvwxyz"
const numberSet="123456789"
const symbolSet="!@#$%^&*()_+=-"


const password=document.querySelector('#Password');
let numberCase=document.querySelector("#Number");
const lowerCase=document.getElementById("Text");
const upperCase=document.getElementById("UpperCase");
const  symbolCase=document.getElementById("Symbol");
const passwordLength=document.querySelector("#Passwordlen");
const generateBtn=document.querySelector("generate");
const copyButton=document.getElementById('copy');
let initialVal=5;


let genPassword="";
const randomData = (data)=>
{
  return  data[Math.floor(Math.random() * data.length)];
}

let allChars="";
function generate()
{
 
  allChars+=lowerCase.checked?lowerSet:"goof";
  return allChars;
}

function generate()
{
   console.log("genfunction");
   let passwordCharacters="";


   passwordCharacters+=lowerCase.checked?lowerSet:"";
   
   passwordCharacters+=upperCase.checked?upperSet:"";
   
   passwordCharacters+=symbolCase.checked?symbolSet:"";
   
   passwordCharacters+=numberCase.checked?numberSet:"";


   genPassword=passwordCharacters.charAt(Math.floor(Math.random()*passwordCharacters.length))
   
   return genPassword;
}
passwordLength.addEventListener('input',function()
{
   console.log("goal")
    password.value="";
   for(let i=0;i<passwordLength.value;i++)
   { 
   password.value+=generate();
   }
   

})

copyButton.addEventListener('click', async function start()
{
   console.log("hello")
   const copycommand=navigator.clipboard;
   copycommand.writeText(password.value);
   
   
})



