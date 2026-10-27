(() => {
const welcome=document.getElementById("welcome"), button=document.getElementById("openEnvelope"),
instruction=document.getElementById("instruction"), invitation=document.getElementById("invitation"),
replay=document.getElementById("replay"), reduced=matchMedia("(prefers-reduced-motion: reduce)");
let opened=false,timer=null;
function openInvitation(){
 if(opened){invitation.scrollIntoView({behavior:reduced.matches?"auto":"smooth",block:"start"});return}
 opened=true;button.disabled=true;welcome.classList.add("opening");instruction.textContent="आमंत्रण खुल रहा है…";
 timer=setTimeout(()=>{welcome.classList.remove("opening");welcome.classList.add("opened");invitation.hidden=false;button.disabled=false;invitation.setAttribute("tabindex","-1");invitation.scrollIntoView({behavior:reduced.matches?"auto":"smooth",block:"start"})},reduced.matches?30:1350)
}
function reset(){if(timer)clearTimeout(timer);opened=false;invitation.hidden=true;welcome.classList.remove("opening","opened");instruction.textContent="आमंत्रण खोलने के लिए लिफाफे पर स्पर्श करें";button.disabled=false;welcome.scrollIntoView({behavior:reduced.matches?"auto":"smooth",block:"start"});button.focus({preventScroll:true})}
button.addEventListener("click",openInvitation);replay.addEventListener("click",reset);
})();