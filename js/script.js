// REMKIM V6 starter
/*==================================================
SCROLL REVEAL
==================================================*/

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);
/*==================================================
HEADER SCROLL
==================================================*/

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});
/*==================================================
ACTIVE MENU
==================================================*/

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-140;
        const height=section.offsetHeight;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});
/*==================================================
MOBILE MENU
==================================================*/

const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".main-nav");

menuToggle.addEventListener("click",()=>{

    nav.classList.toggle("active");

});
/*==================================================
MENU TOGGLE ANIMATION
==================================================*/

menuToggle.addEventListener("click",()=>{

    menuToggle.classList.toggle("active");

});
/*==================================================
AUTO CLOSE MENU
==================================================*/

const menuLinks=document.querySelectorAll("nav a");

menuLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        menuToggle.classList.remove("active");

    });

});
/*==================================================
CLICK OUTSIDE
==================================================*/

document.addEventListener("click",(e)=>{

    if(

        !nav.contains(e.target)

        &&

        !menuToggle.contains(e.target)

    ){

        nav.classList.remove("active");

        menuToggle.classList.remove("active");

    }

});
/*==================================================
CLOSE MENU ON SCROLL
==================================================*/

window.addEventListener("scroll",()=>{

    nav.classList.remove("active");

    menuToggle.classList.remove("active");

});
/*==================================================
PAGE PROGRESS
==================================================*/

const progressBar=document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

    const scrollTop=window.pageYOffset;

    const docHeight=document.documentElement.scrollHeight-window.innerHeight;

    const progress=(scrollTop/docHeight)*100;

    progressBar.style.width=progress+"%";

});
/*==================================================
BACK TO TOP
==================================================*/

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", (e) => {

    e.preventDefault();

    window.scroll({

        top:0,

        left:0,

        behavior:"smooth"

    });

});
/*==================================================
UZMANLIK ALANLARI
==================================================*/

const expertiseData = {

    aluminium: `
        <h3>Alüminyum Endüstrisi</h3>

        <p>
        Hafif metal üretim süreçlerine yönelik geliştirilen sistemler; yüzey temizliği,
        ultrasonik yıkama ve proses performansının korunmasına odaklanır.
        </p>

        <div class="expertise-list">

            <div>Ultrasonik Temizlik</div>
            <div>Yüzey Hazırlama</div>
            <div>Performans Yönetimi</div>
            <div>Düşük Köpük Teknolojileri</div>
            <div>Kaynak Verimliliği</div>
            <div>Performance Renewal System®</div>

        </div>
    `,

    surface: `
        <h3>Yüzey İşlem Teknolojileri</h3>

        <p>
        Yağ alma, yüzey hazırlama ve proses kontrolüne yönelik geliştirilen sistemler
        ile üretim süreçlerinde kararlı performans hedeflenir.
        </p>

        <div class="expertise-list">

            <div>Yağ Alma</div>
            <div>Yüzey Hazırlama</div>
            <div>Kimyasal Proses Kontrolü</div>
            <div>Banyo Yönetimi</div>
            <div>Proses Optimizasyonu</div>
            <div>Özel Formülasyonlar</div>

        </div>
    `,

    tribology: `
        <h3>Metal Şekillendirme</h3>

        <p>
        Tribolojik sistemler; haddeleme, tel çekme ve soğuk şekillendirme proseslerinde
        sürtünme kontrolünü, ekipman ömrünü ve üretim kararlılığını desteklemek amacıyla geliştirilmiştir.
        </p>

        <div class="expertise-list">

            <div>Tribolojik Sistemler</div>
            <div>Haddeleme</div>
            <div>Tel Çekme</div>
            <div>Soğuk Şekillendirme</div>
            <div>REMLUBRIFLOW®</div>
            <div>REMGUARD®</div>

        </div>
    `,

    automotive: `
        <h3>Otomotiv Sanayi</h3>

        <p>
        Üretim ve bakım süreçlerinde kullanılan temizlik, yüzey hazırlama ve proses destek
        sistemleriyle operasyonel sürekliliğe katkı sağlanır.
        </p>

        <div class="expertise-list">

            <div>Parça Temizliği</div>
            <div>Bakım Sistemleri</div>
            <div>Üretim Sürekliliği</div>
            <div>Ultrasonik Yıkama</div>
            <div>Yüzey Hazırlama</div>
            <div>Proses Performansı</div>

        </div>
    `,

    industry: `
        <h3>Genel Endüstri</h3>

        <p>
        Her üretim prosesi farklıdır. REMKİM, işletmeye özel geliştirilen sistem yaklaşımıyla
        farklı sektörlerin performans hedeflerine uygun mühendislik sistemleri geliştirir.
        </p>

        <div class="expertise-list">

            <div>İşletmeye Özel Sistemler</div>
            <div>Proses Analizi</div>
            <div>Teknik Destek</div>
            <div>Kaynak Verimliliği</div>
            <div>Sürdürülebilir Üretim</div>
            <div>Performans Optimizasyonu</div>

        </div>
    `

};
const expertiseButtons = document.querySelectorAll(".expertise-btn");
const expertiseContent = document.querySelector(".expertise-content");

if (expertiseButtons.length && expertiseContent) {

    expertiseContent.innerHTML = expertiseData.aluminium;

    expertiseButtons.forEach(button => {

        button.addEventListener("click", () => {

            expertiseButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const target = button.dataset.target;

            expertiseContent.style.opacity = "0";

setTimeout(() => {

    expertiseContent.innerHTML = expertiseData[target];

    expertiseContent.style.opacity = "1";

},180);

        });

    });

}