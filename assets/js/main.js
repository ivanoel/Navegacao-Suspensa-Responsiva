const navegar = document.querySelector('.navegar');
document.querySelector('.alternar').onclick = function() {
    this.classList.toggle('ativo');
    navegar.classList.toggle('ativo');
}