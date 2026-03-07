import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Dom } from "./classes/dom";

export class Interactions {
  components: { [x: string]: Dom } = {};
  lenis: Lenis | null = null;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);

    this.onResize();
    this.createSmoothScroll();
    this.addEventListeners();
  }

  private isIOSTouchDevice(): boolean {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.maxTouchPoints > 0 && /Mac/.test(navigator.userAgent));

    return isIOS;
  }

  createSmoothScroll() {
    const isIOS = this.isIOSTouchDevice();

    this.lenis = new Lenis({
      lerp: 0.1,
      smoothTouch: isIOS,
      // touchMultiplier: isIOS ? 2 : 1,
      // wheelMultiplier: isIOS ? 1 : 1,
    });

    this.lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      this.lenis?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  onResize() {
    /**
     * - recalculate
     * - reinitialize
     * - reset, etc.
     * */
  }

  addEventListeners() {
    window.addEventListener("resize", this.onResize.bind(this));
  }

  destroy() {
    if (this.lenis) {
      this.lenis.destroy();
      this.lenis = null;
    }
  }
}
