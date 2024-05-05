const clean = document.getElementById('clear');
const search = document.getElementById('search');
const input = document.getElementById('input');

clean.addEventListener('click',() => {
    input.value = '';
});

window.addEventListener('keydown' , () => {
    if(input.value.length>0){
        clean.style.display = 'block';
    }
});

search.addEventListener('click' , () => {
    window.location.href = `https://www.google.com/search?q=${input.value}`;
});