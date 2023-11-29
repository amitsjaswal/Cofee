const navEl = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 60) {
                navEl.classList.add('navbar-scrolled');
            } else if (window.scrollY < 5) {
                navEl.classList.remove('navbar-scrolled');
            }
        })

        const swiperEl = document.querySelector('swiper-container')
        
        const params = {
            injectStyles: [`
      .swiper-pagination {
        margin-top:30px;
        position:relative;
      }
      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color: #000;
        opacity: 1;
        background: rgba(0, 0, 0, 0.2);
      }

      .swiper-pagination-bullet-active {
        background: hsl(168, 100%, 36%);
      }
      `],
            pagination: {
                clickable: true,
                loop: true,
        
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            },
        }

        Object.assign(swiperEl, params)
        swiperEl.initialize();