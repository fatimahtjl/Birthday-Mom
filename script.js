document.addEventListener("DOMContentLoaded", () => {

    /** ======================
     *  ANIMASI TITLE
     * ====================== */
    const title = document.querySelector(".birthday-title");

    const titleObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                title.classList.remove("show", "float");

                setTimeout(() => {
                    title.classList.add("show");

                    setTimeout(() => {
                        title.classList.add("float");
                    }, 400);

                }, 10);
            } else {
                title.classList.remove("show", "float");
            }
        });
    }, { threshold: 0.4 });

    titleObs.observe(title);



    /** ======================
     *  ANIMASI FOTO LOVE HEART
     * ====================== */

    const photos = document.querySelectorAll(".birthday-photo");

    photos.forEach((photo, i) => {
        if (i === 0) photo.classList.add("anim-left");
        if (i === 1) photo.classList.add("anim-right");

        if (i === 2){
            if (window.innerWidth > 700){
                photo.classList.add("anim-bottom");
            } else {
                photo.classList.add("anim-left");
            }
        }
    });

    const photoObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const el = entry.target;

            if (entry.isIntersecting){

                el.classList.remove("show","float");

                setTimeout(() => {
                    el.classList.add("show");

                    setTimeout(() => {
                        el.classList.add("float");
                    }, 500);

                }, 10);

            } else {
                el.classList.remove("show","float");
            }

        });
    }, { threshold: 0.4 });

    photos.forEach(p => photoObs.observe(p));



    /** ======================
     *  STICKER SUBTLE FLOATING
     * ====================== */

    const stickers = document.querySelectorAll(".sticker");

    const stickerObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const el = entry.target;

            if (entry.isIntersecting){
                el.classList.remove("show","float");

                setTimeout(() => {
                    el.classList.add("show");

                    setTimeout(() => {
                        el.classList.add("float");
                    }, 250);

                }, 10);

            } else {
                el.classList.remove("show","float");
            }
        });
    }, { threshold: 0.2 });

    stickers.forEach(s => stickerObs.observe(s));
});




/** ======================
 *  SEQUENTIAL BOOK FLIP
 * ====================== */

const pages = document.querySelectorAll(".page");
let currentPage = 0; // 0 = halaman 1

pages.forEach((page) => {
  page.addEventListener("click", (e) => {

    const bookRect = page.getBoundingClientRect();
    const clickX = e.clientX - bookRect.left;

    // ======================
    // KLIK KANAN → MAJU
    // ======================
    if (clickX > bookRect.width / 2) {

      if (currentPage < pages.length) {
        pages[currentPage]?.classList.add("flipped");
        currentPage++;
      }

    }

    // ======================
    // KLIK KIRI → MUNDUR
    // ======================
    else {

      // 🔥 KHUSUS: dari halaman 15 → lompat ke halaman 1
      if (currentPage === pages.length) {

        pages.forEach(p => p.classList.remove("flipped"));
        currentPage = 0;

      }

      // normal mundur
      else if (currentPage > 0) {

        currentPage--;
        pages[currentPage]?.classList.remove("flipped");

      }

    }

  });
});
