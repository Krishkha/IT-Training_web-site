let showbtn = document.querySelector('.showbtn');
    let popupbox = document.querySelector('.popupbox');
    let hidebox = document.querySelector('.hidebox');

    showbtn.addEventListener('click', () =>{
        popupbox.style.display = 'block';
    } )
    hidebox.addEventListener('click', () =>{
        popupbox.style.display = 'none';
    } )