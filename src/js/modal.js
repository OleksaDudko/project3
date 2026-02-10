const closeBtn = document.querySelector('.Vector');
 const modal = document.querySelector('.start_modal');
 const formRef = document.querySelector(".modal_form_header")
 const userRef = document.querySelector(".user_name")

formRef.addEventListener("submit", (event) => {
    event.preventDefault()
    const value = event.currentTarget.elements.user.value
    if(value){
        userRef.textContent = value
        formRef.reset();
        modal.style.display = 'none';

    }
})

 closeBtn.addEventListener('click', () => {
     modal.style.display = 'none';
 });