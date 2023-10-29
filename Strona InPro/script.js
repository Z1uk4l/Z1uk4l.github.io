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