let addButton = document.querySelector("#add_button");
var noteTitle = document.getElementById("note-title");
let noteDetail = document.querySelector("#note_details");


noteTitle.addEventListener('click', function(){
    if(noteDetail.style.display === 'none'){
        noteDetail.style.display = 'block';
    }else{
       noteDetail.style.display = 'none'
    }


   
})
noteDetail.addEventListener('focusout', ()=>{
    setTimeout( function(){
        noteDetail.style.display = "none";
        //console.log("done");
      },200)
})




addButton.addEventListener('click' , function(e){
    e.preventDefault();
 if(noteTitle.value == "" && noteDetail.value == ""){
    alert("add note");
    return false
 }

    let notes = localStorage.getItem('notes');

    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes)
    }

    let obj = {
        title : noteTitle.value,
        detail : noteDetail.value
    }
    notesObj.push(obj);
    localStorage.setItem("notes" , JSON.stringify(notesObj))

    noteTitle.value = "";
    noteDetail.value = "";
    
    showNotes();
     
})


//displaying notes 

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }

    var html = " ";
    notesObj.forEach(function(element,index){

        html += `
        <div class="box" id="${index}">
            <h2>${element.title}</h2>
            <p>${element.detail}</p>
            <button id= "${index} type="button" onclick = "editNote(this.id)" class="box_edit"><i class="far fa-edit"></i></button>
            <button id="${index} type="button" onclick = "removeNote(this.id)" class="box_delete"><i class="fas fa-trash"></i></button>
           
            <div class="color_div">
            <span id= "span1" onclick = "color(${index},this)"   class= "col1" ></span>
            <span id= "span2"  onclick = "color(${index},this)" class= "col2" ></span>
            <span id= "span3"  onclick = "color(${index},this)" class= "col3" ></span>
            </div> 
           
          
         </div>
    
        `          
         
    })

    let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = ``;
  }

}


function color(c,d){
    var getC = getComputedStyle(d);
    var backcolor = getC.backgroundColor;
    var a = document.getElementById(c).style.backgroundColor = backcolor;

   
}







//delete note
function removeNote(index){
    let confirmDel = confirm("Delete this note?");
    if (confirmDel == true) {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }

        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
    }
}



// edit notes
function editNote(index) {
    let notes = localStorage.getItem("notes");
    if(noteTitle.value !== "" || noteDetail.value !== ""){
        return alert("clear form before editing");
    }
    if(notes == null)
   {
       notesObj = [];
   }else{
       notesObj = JSON.parse(notes);
   }
//    console.log(notesObj)

   notesObj.findIndex((element,index) =>{
    noteTitle.value = element.title;
    noteDetail.value = element.detail;
   })
   notesObj.splice(index, 1);
   localStorage.setItem("notes", JSON.stringify(notesObj));
   showNotes();
}








{/* <div class="box">
            <h2>${element.title}</h2>
            <p>${element.detail}</p>
            <button id= "${index}  onclick = "edit(this.id)" class="box_edit"><i class="material-icons">edit</i> </button>
            <button id="${index} onclick = "removeNote()" class="box_delete"><i class="fas fa-trash"></i></button>
          </div>
    </div> */}

    // <button  type="button" onclick = "showColor( ${index},this)" class="box_color"><i class="fas fa-palette"></i></i></button>