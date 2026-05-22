let Main = document.getElementsByClassName("Main")[0];
let notescontainer = document.getElementsByClassName("notes-container")[0];
let rightbtn = document.getElementsByClassName("right-btn")[0];
// let textarea = document.getElementsByClassName("text")[0];
let ADD = document.getElementsByClassName("ADD")[0];
 
let DELETE = document.getElementsByClassName("DELETE")[0];
function showNotes(){
    notescontainer.innerHTML  =    localStorage.getItem("text");
}
showNotes();

function updateNotes(){
    localStorage.setItem("text" , notescontainer.innerHTML);
}
ADD.addEventListener("click", ()=>{
    let textarea = document.createElement("textarea");
    textarea.className =  'text';
    textarea.setAttribute ("placeholder","write this ");
    // textarea.innerText = textarea.value;
    notescontainer.appendChild(textarea);
    updateNotes();

});
DELETE.addEventListener("click",(e)=>{
  let alltextarea = document.querySelectorAll(".text");
  if(alltextarea.length>0){
    alltextarea[alltextarea.length-1].remove();
  };
   console.log(e);
     updateNotes();
})

notescontainer.addEventListener("input", ()=>{

    updateNotes();

});