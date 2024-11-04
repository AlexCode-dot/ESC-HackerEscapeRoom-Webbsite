const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener(
    "click",
    () => {
        menu.classList.add("display");
        const menuRemoveBtn = document.createElement("button");
        menuRemoveBtn.setAttribute("class", "menu__close-btn");
        menu.appendChild(menuRemoveBtn);
        menu.insertBefore(menuRemoveBtn, menu.children[0]);

        menuRemoveBtn.addEventListener(
            "click",
            () => {
                menu.classList.remove("display");
                menu.removeChild(menuRemoveBtn);
            }
        )
    });


