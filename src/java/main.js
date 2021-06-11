///import
/* import * as reset from './reset.js' */



//creer 2div calculette
let div1=document.createElement("div");
let div2=document.createElement("div");
let body=document.getElementsByTagName("body")[0];
div1.style.backgroundColor="silver";
div1.style.height="600px";
div2.style.width="30%";
div2.style.backgroundColor="blue";
div2.style.height="400px";
div1.classList.add("div1");
div2.classList.add("div2");
div1.append(div2);
body.append(div1);

/////creer input
let input1=document.createElement("input");
input1.classList.add("input1");
input1.setAttribute("style",'float:right');
div2.append(input1);

//////create buttonNumbers
let tabButtonNumbers=[];
for(let i=0;i<10;i++){
    let bouton=document.createElement("button");
    bouton.textContent=i;
    bouton.classList.add("Numbers");
    tabButtonNumbers.push(bouton);
}
console.log(tabButtonNumbers);
let div1ereLigne=document.createElement("div");
div1ereLigne.classList.add("divLigne");
div1ereLigne.append(tabButtonNumbers[9],tabButtonNumbers[8],tabButtonNumbers[7]);
div2.append(div1ereLigne);

let div2emeLigne=document.createElement("div");
div2emeLigne.classList.add("divLigne");
div2emeLigne.append(tabButtonNumbers[6],tabButtonNumbers[5],tabButtonNumbers[4]);
div2.append(div2emeLigne);

let div3emeLigne=document.createElement("div");
div3emeLigne.classList.add("divLigne");
div3emeLigne.append(tabButtonNumbers[3],tabButtonNumbers[2],tabButtonNumbers[1]);
div2.append(div3emeLigne);

////creer operateur
let tabOperateur=[];
    for (let i = 0; i < 4; i++) {
        let boutonOperateur=document.createElement("button");
        if(i==0){
            boutonOperateur.textContent="+";
        }
        else if(i==1){
            boutonOperateur.textContent="-";
        }
        else if(i==2){
            boutonOperateur.textContent="*";
        }
        else if(i==3){
            boutonOperateur.textContent="/";
        }
        boutonOperateur.classList.add("Operateurs");
        tabOperateur.push(boutonOperateur);
    }

div1ereLigne.append(tabOperateur[0]);
div2emeLigne.append(tabOperateur[1]);
div3emeLigne.append(tabOperateur[2]);

///////4eme ligne
let div4emeLigne=document.createElement("div");
div4emeLigne.classList.add("divLigne");
let boutonC=document.createElement("button");
let boutonVirgule=document.createElement("button");
boutonC.textContent="C";
boutonVirgule.textContent=".";
div4emeLigne.append(boutonC,tabButtonNumbers[0],boutonVirgule,tabOperateur[3]);
div2.append(div4emeLigne);

/////////=
let div5emeLigne=document.createElement("div");
div5emeLigne.classList.add("divLigne");
let boutonEgal=document.createElement("button");
boutonEgal.classList.add("egal");
boutonEgal.textContent="=";
div5emeLigne.append(boutonEgal);
div2.append(div5emeLigne);

///////////////////////////////CA COMMENCE MNT////////////////////////////////
//creation des variable de calcul

let  nombre1="";
let nombre2="";

let openMid=true;

//on selectionne loperateur et on passe au 2eme chiffre
tabOperateur[0].addEventListener("click",()=>{
   operatorChoisi=`plus`;
   console.log(input1.innerText);
   openMid=false;
});
tabOperateur[1].addEventListener("click",()=>{
  operatorChoisi='moins';
  openMid=false;
});
tabOperateur[2].addEventListener("click",()=>{
    operatorChoisi='fois';
    openMid=false;
});
tabOperateur[3].addEventListener("click",()=>{
    operatorChoisi='divise';
    openMid=false;
});


//le chiffre saffiche sur le input 
body.addEventListener("click",(e)=>{
    if(e.target.getAttribute("class")=="Numbers" &&openMid==true){
        nombre1+=(e.target.innerText);
        input1.value=nombre1;
        console.log((Number(nombre1)));
        
    }
    else if(e.target.getAttribute("class")=="Numbers" &&openMid==false){
        
        nombre2+=(e.target.innerText);
            input1.value=nombre2;
        console.log((Number(nombre2)));
    }
        
          
  
   
})

///////////clavier
let chiff2=false;
let operateur;
if(openMid==true){
    input1.addEventListener("keypress",(e)=>{
        if(chiff2==false){
        
            nombre1+=e.key;
            console.log(e.key);
        
            
        }
        
        if(chiff2==true ){
            nombre2+=e.key;
            console.log(e.key);
        }
        if((e.key=="+" || e.key=="-" || e.key=="*" || e.key=="/") && chiff2==false){
            operateur=e.key;
            nombre1=nombre1.substring(0,nombre1.length-1);
            chiff2=true;
            
        }
        else if(e.key=="=" ||e.key=="Enter"){
            if(e.key=="Enter"){
                nombre2=nombre2.substring(0,nombre2.length-5);
            }
            else{
                nombre2=nombre2.substring(0,nombre2.length-1);
            }
            
            console.log(nombre1);
            console.log(nombre2);
            if(operateur=="+"){
                input1.value=Math.round(Number(nombre1)+Number(nombre2));
            }
            else if(operateur=="-"){
                input1.value=Math.round(Number(nombre1)-Number(nombre2));
            }
            else if(operateur=="*"){
                input1.value=Math.round(Number(nombre1)*Number(nombre2));
            }
            else if(operateur=="/"){
                input1.value=Math.round(Number(nombre1)/Number(nombre2));
            }
            nombre1="";
            nombre2="";
            chiff2=false;
            
        }
    });
}





///reset avec le bouton c
boutonC.addEventListener("click",()=>{
    input1.value="0";
    nombre1="";
    nombre2="";
    openMid=true;
})



boutonEgal.addEventListener("click",()=>{
   if(operatorChoisi==`plus`){
       input1.value=Math.round(Number(nombre1)+Number(nombre2));
   }
    else if(operatorChoisi==`moins`){
        input1.value=Math.round(Number(nombre1)-Number(nombre2));
       
    }  
    else if(operatorChoisi==`fois`){
        input1.value=Math.round(Number(nombre1)*Number(nombre2));
    }  
    else if(operatorChoisi==`divise`){
        input1.value=Math.floor(Number(nombre1)/Number(nombre2));
    }  
  
   openMid=true;
   nombre1="";
   nombre2="";
}
)

 