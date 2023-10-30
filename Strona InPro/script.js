function menu() {
    var wartosc = document.querySelector(".toggle-menu").value;
    if (wartosc == 1) {
        document.querySelector(".hamburger").style.background = "transparent";
        document.querySelector(".hamburger").classList.toggle("menu-hamburger");
        document.querySelector(".menu").style.display = "flex";
        document.querySelector(".toggle-menu").value = 2;
    }
    else {
        document.querySelector(".hamburger").style.background = "#fff";
        document.querySelector(".hamburger").classList.toggle("menu-hamburger");
        document.querySelector(".menu").style.display = "none";
        document.querySelector(".toggle-menu").value = 1;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", () => {
        if (document.body.clientWidth <= 1170) {
            if (document.URL.includes("index.html")) {
                document.querySelector(".msection1").appendChild(document.querySelector(".mphoto1"));
            }
            else if (document.URL.includes("services.html")) {
                document.querySelector(".ssection3").appendChild(document.querySelector(".sphoto3"));
            }
            else if (document.URL.includes("inteligentnedomy.html")) {
                document.querySelector(".isection2").appendChild(document.querySelector(".iphoto2"));
            }
            else if (document.URL.includes("aboutus.html")) {
                document.querySelector("#asection2").appendChild(document.querySelector("#atext2"));
            }
            document.querySelector("footer").appendChild(document.querySelector(".fsection1"));
        }
        else {
            if (document.URL.includes("index.html")) {
                document.querySelector(".msection1").appendChild(document.querySelector(".mtext1"));
            }
            else if (document.URL.includes("services.html")) {
                document.querySelector(".ssection3").appendChild(document.querySelector(".stext2"));
            }
            else if (document.URL.includes("inteligentnedomy.html")) {
                document.querySelector(".isection2").appendChild(document.querySelector(".itext2"));
            }
            else if (document.URL.includes("aboutus.html")) {
                document.querySelector("#asection2").appendChild(document.querySelector("#aphoto2"));
            }
            document.querySelector("footer").appendChild(document.querySelector(".fsection2"));
        }
    })
    window.addEventListener("resize", () => {
        if (document.body.clientWidth > 800) {
            document.querySelector(".menu").style.display = "flex";
        }
        if (document.body.clientWidth <= 1170) {
            if (document.URL.includes("index.html")) {
                document.querySelector(".msection1").appendChild(document.querySelector(".mphoto1"));
            }
            else if (document.URL.includes("services.html")) {
                document.querySelector(".ssection3").appendChild(document.querySelector(".sphoto3"));
            }
            else if (document.URL.includes("inteligentnedomy.html")) {
                console.log("kupa1");
                document.querySelector(".isection2").appendChild(document.querySelector(".iphoto2"));
            }
            else if (document.URL.includes("aboutus.html")) {
                console.log("kupa1");
                document.querySelector("#asection2").appendChild(document.querySelector("#atext2"));
            }
            document.querySelector("footer").appendChild(document.querySelector(".fsection1"));
        }
        else {
            if (document.URL.includes("index.html")) {
                document.querySelector(".msection1").appendChild(document.querySelector(".mtext1"));
            }
            else if (document.URL.includes("services.html")) {
                document.querySelector(".ssection3").appendChild(document.querySelector(".stext2"));
            }
            else if (document.URL.includes("inteligentnedomy.html")) {
                console.log("kupa2");
                document.querySelector(".isection2").appendChild(document.querySelector(".itext2"));
            }
            else if (document.URL.includes("aboutus.html")) {
                console.log("kupa2");
                document.querySelector("#asection2").appendChild(document.querySelector("#aphoto2"));
            }
            document.querySelector("footer").appendChild(document.querySelector(".fsection2"));
        }
    })
})