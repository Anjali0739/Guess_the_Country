let msg=document.querySelector(".msg");
let input=document.querySelector("input");
let btn=document.querySelector(".btn");




let countries=["Libya", "Lithuania", "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria", 
"Madagascar","Malaysia", "Maldives", "Mali", "Mauritius", "Mexico", "Monaco", "Mongolia", "Morocco", "Namibia", "Nepal",
"Netherlands", "New Zealand", "Nigeria", "Norway", "Bahamas", "Bahrain", "Bangladesh", "Belarus", "Belgium", "Bolivia", 
"Brazil", "Bulgaria", "Oman", "Cambodia", "Canada", "Chile", "China", "Colombia", "Cuba", "Qatar", "South Korea", "Congo", 
"Romania", "Denmark", "Ecuador", "Egypt", "Estonia", "Saudi Arabia", "Serbia", "Seychelles", "Singapore","Somalia", 
"South Africa", "Spain", "Sri Lanka", "Sudan", "Sweden","Switzerland", "Syria", "Fiji", "France", "Georgia", "Germany","Ghana", "Greece", "Hawaii", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel","Italy", "Uganda", "Ukraine", "Russia", "UAE", "UK", "Japan", "Jordan", "Venezuela", "Vietnam", "Kazakhstan", "Kenya", "Serbia", "Korea", "Kuwait", "Yemen", "Zambia", "Zimbabwe"]

function randomWord(){
    let random=Math.floor(Math.random()*countries.length);
    // console.log(countries.length)
    // console.log(random);
    console.log(countries[random]);
    return countries[random];
}

function shuffle(word){
   let a=word.split("");
    // console.log(a)
    for(let i=word.length-1; i>=0; i--){
        let temp=a[i];
        // console.log(a[i]);
        let j=Math.floor(Math.random()*(word.length));
        a[i]=a[j];
        a[j]=temp;
    }
    let newWord=a.join("");
    // console.log(newWord);
    return newWord;
}


let start=false;
let word="";
let newWord="";
input.value="";
btn.addEventListener("click", ()=>{
    if(!start){
        input.value="";
        start=true;
        btn.innerHTML="Guess";
        input.classList.toggle('hidden');
        word=randomWord();
        newWord=shuffle(word);
        msg.innerText=`Guess the Country Name: ${newWord}`;
        msg.style.color='black';
    }
    else{
        let guessedWord=input.value;
        if(guessedWord.toLowerCase()===word.toLowerCase()){
            msg.innerText=`AweSome! you gussed the right country: ${word}`;
            msg.style.color='green';
            input.classList.toggle('hidden');
            btn.innerHTML="Start Again";
            input.value="";
            start=false;
        }
        else{
            msg.innerText=`Opps! That was incorrect.
            Guess the Country Name: ${newWord}`;
            msg.style.color='red';
            btn.innerHTML="Try Again";
            input.value="";
        }
    }
})