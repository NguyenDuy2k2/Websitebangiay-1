import React from 'react'
import AOS from 'aos';
import './Banner2.css'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
type Props = {}

const Banner2 = (props: Props) => {
  return (
    <div  className="Bg-banner max-w-7xl mx-auto h-[432px] mb-3">
      <div className="text-white pt-[216px] pl-10 text-center ">
        <p><h1  className="text-white z-10 font-bold text-[32px]">KHUYẾN MÃI</h1>
          <h1  className="text-yellow-500 z-20 font-bold text-[32px]">
            GIẢM GIÁ 50%
          </h1></p>

      </div>
<button>XEM THÊM</button>
    </div>
  )
}

export default Banner2