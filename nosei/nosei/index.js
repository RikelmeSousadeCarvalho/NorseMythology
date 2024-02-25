= function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let logoImage = document.querySelector('.logo img'); 
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu_white_36dp.svg";
        logoImage.style.display = 'block'; 
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "close_white_36dp.svg";
        logoImage.style.display = 'none';
    }
}

function toggleDropdown() {
    var dropdownMenu = document.querySelector(".dropdown-menu");
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}

function showDropdown() {
    var dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.style.display = "block";
}

function hideDropdown() {
    var dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.style.display = "none";
}


function toggleDropdown2() {
    var dropdownMenu = document.querySelector(".dropdown-menu2");
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}

function showDropdown2() {
    var dropdownMenu = document.querySelector(".dropdown-menu2");
    dropdownMenu.style.display = "block";
}

function hideDropdown2() {
    var dropdownMenu = document.querySelector(".dropdown-menu2");
    dropdownMenu.style.display = "none";
}


function toggleDropdown3() {
    var dropdownMenu = document.querySelector(".dropdown-menu3");
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}

function showDropdown3() {
    var dropdownMenu = document.querySelector(".dropdown-menu3");
    dropdownMenu.style.display = "block";
}

function hideDropdown3() {
    var dropdownMenu = document.querySelector(".dropdown-menu3");
    dropdownMenu.style.display = "none";
}













//parte do menu-mobile

function toggleDropdown4() {
    var dropdownMenu = document.querySelector(".dropdown-menu4");
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}



function toggleDropdown5() {
    var dropdownMenu = document.querySelector(".dropdown-menu5");
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}

function showDropdown5() {
    var dropdownMenu = document.querySelector(".dropdown-menu5");
    dropdownMenu.style.display = "block";
}

function hideDropdown5() {
    var dropdownMenu = document.querySelector(".dropdown-menu5");
    dropdownMenu.style.display = "none";
}

function toggleDropdown6() {
    var dropdownMenu = document.querySelector(".dropdown-menu6");
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}

function showDropdown6() {
    var dropdownMenu = document.querySelector(".dropdown-menu6");
    dropdownMenu.style.display = "block";
}

function hideDropdown6() {
    var dropdownMenu = document.querySelector(".dropdown-menu6");
    dropdownMenu.style.display = "none";
}