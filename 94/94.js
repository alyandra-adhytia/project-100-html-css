window.onscroll=()=>{
    let p=(window.scrollY/(document.body.scrollHeight-window.innerHeight)*100).toFixed(2)
    out.innerText=p+"%"
  }
  