

const form= document.querySelector('.add-form');
const liste= document.querySelector('.todos');
const arama= document.querySelector('.search input');

arama.addEventListener("keyup", e=>{
    e.preventDefault();
const ifade= arama.value.trim().toLowerCase();
filtreolustur(ifade);

})
const filtreolustur=(ifade)=>{
Array.from(liste.children).filter((yapilacak)=>{
  
    return !yapilacak.textContent.toLowerCase().includes(ifade);
     
}).forEach((yapilacak)=>{
    yapilacak.classList.add('filtered');

});
Array.from(liste.children).filter((yapilacak)=>{
  
    return yapilacak.textContent.toLowerCase().includes(ifade);
     
}).forEach((yapilacak)=>{
    yapilacak.classList.remove('filtered');

});
}

function ekleme(yapilacak) {

    let html =`
    <li class="list-group-item d-flex justify-content-between align-items-center">
<span> ${yapilacak}</span>
<i class="far fa-trash-alt delete"></i>
    </li>`;
    liste.innerHTML +=html;
}

form.addEventListener('submit',e=>{
    e.preventDefault();
    const yapilacak=form.add.value.trim().toLowerCase();


    if (yapilacak.length) {
        ekleme(yapilacak);
        form.reset();
    }
})

liste.addEventListener('click', e=> {
if(e.target.classList.contains('delete')){
   e.target.parentElement.remove();
}

})
