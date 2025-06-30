let edit=null
function add(){
  if(edit){edit.innerText=it.value;edit=null}
  else{let li=document.createElement("li");li.innerText=it.value;li.onclick=()=>{it.value=li.innerText;edit=li};ul.appendChild(li)}
}