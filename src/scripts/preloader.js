function display() {
    const myTimeout = setTimeout(() => {
        document.querySelector('.preloader').classList.add('d-none');
        document.querySelector('.main').classList.remove('d-none');
    }, 2000);
}