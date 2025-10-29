const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.innerText = "Clicked";
        console.log('clicked');
    });
});