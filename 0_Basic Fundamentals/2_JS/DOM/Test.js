const btn = document.querySelector("#close")



function hover() {
    btn.addEventListener('mousemove', function() {
        btn.textContent = "Don't Click";
    });

    btn.addEventListener('click', function() {
        window.close(); 
    });
}

hover()