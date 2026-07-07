/* ==========================================
   REMKIM WEB V3
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Menü linklerine yumuşak geçiş
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    // Sayfa aşağı indikçe Header gölgesi
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

        } else {

            header.style.boxShadow = "0 6px 18px rgba(0,0,0,.12)";

        }

    });

    // Kart hover hazırlığı
    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transition = ".35s";

        });

    });

    console.log("REMKIM WEB V3 çalışıyor.");

});