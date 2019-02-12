var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        closeAll(i);
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        panel.classList.toggle("open");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function closeAll(atual) {
    for (let i = 0; i < acc.length; i++) {
        if (i != atual) {
            acc[i].classList.remove("active");
            let panel = acc[i].nextElementSibling;
            panel.classList.remove("open");
            panel.style.maxHeight = null;
        }
    }
}

acc[0].click();