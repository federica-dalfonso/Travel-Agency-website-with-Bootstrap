/*collapse button*/

function collapseFunction () {
    let btn = document.querySelectorAll("button.button-close");
    let sect = document.querySelectorAll(".section-to-collapse");
    
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener ("click", () => {
            if (sect[i].style.display === "flex") {
                btn[i].innerText = "open this section";
                sect[i].style.display = "none";
            } else {
                sect[i].style.display = "flex";
                btn[i].innerText = "collapse this section";
            }
        })
    }
}

collapseFunction ();