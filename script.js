const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show"); // agar animasi muncul lagi saat scroll up
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll(".birthday-photo").forEach(el => observer.observe(el));
