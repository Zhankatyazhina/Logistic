const visit_btn = document.querySelector('button')
const become__client = document.querySelector('#becomeClientModal')

for(let i=0;i<visit_btn.length;i++){
    visit_btn[i].addEventListener("click" , function(){
        become__client.style.display = 'block'
    })
}
