<template>
  <div class="outer-wrapper">
    <div class="wrapper">
      <div class="carousel" ref="carousel">
        <!-- Slot for Slides-->
        <slot />
      </div>
    </div>
    <div class="carousel-btn-next hide" ref="next">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="55.022"
        height="99.333"
        viewBox="0 0 55.022 99.333"
      >
        <path
          id="ArrowRight"
          d="M13.807,4.105l2.8-2.923,50.519,49.78L16.2,99.092l-2.671-2.9L61.321,50.963Z"
          transform="translate(-12.827 -0.47)"
          stroke-width="1"
        />
      </svg>
    </div>
    <div class="carousel-btn-prev hide" ref="prev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="55.022"
        height="99.333"
        viewBox="0 0 55.022 99.333"
      >
        <path
          id="ArrowLeft"
          d="M66.85,4.105l-2.8-2.923L13.529,50.963l50.929,48.13,2.671-2.9L19.336,50.963Z"
          transform="translate(-12.809 -0.47)"
          stroke-width="1"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animationDuration: 500,
      btnNext: undefined,
      btnPrev: undefined,
      carousel: undefined,
      isDragging: false,
      startCarouselPos: 0,
      startMousePos: 0,
      steps: undefined,
    };
  },
  mounted() {
    this.carousel = this.$refs.carousel;
    this.btnNext = this.$refs.next;
    this.btnPrev = this.$refs.prev;

    this.carousel.addEventListener("mousedown", this.handleStartDrag);
    this.carousel.addEventListener("touchstart", this.handleStartDrag, {
      passive: true,
    });

    this.carousel.addEventListener("mousemove", this.handleMoveDrag);
    this.carousel.addEventListener("touchmove", this.handleMoveDrag, {
      passive: true,
    });

    this.carousel.addEventListener("mouseup", this.handleStopDrag);
    this.carousel.addEventListener("touchend", this.handleStopDrag);

    this.btnNext.addEventListener("click", this.handleNextButtonClick);
    this.btnPrev.addEventListener("click", this.handlePrevButtonClick);

    window.addEventListener("resize", () => {
      this.steps = this.getSteps();
      const posAfterResize = this.snapToClosestPos(this.getPosX(this.carousel));
      this.initButtonVisibility(posAfterResize);
    });

    window.addEventListener("load", () => {
      this.steps = this.getSteps();
      this.initButtonVisibility();
    });
    setTimeout(() => {
      this.steps = this.getSteps();
      this.initButtonVisibility();
    }, 1000);
  },
  methods: {
    // overall carousel functions
    getSteps() {
      let local_steps = [0];
      if (this.isOverflown(this.carousel)) {
        const slides = this.carousel.querySelectorAll(".slide");
        let gap = parseInt(
          getComputedStyle(slides[1]).getPropertyValue("--gap")
        ); // rem
        const globalFontSize = parseInt(
          getComputedStyle(document.querySelector("html")).getPropertyValue(
            "font-size"
          )
        );
        gap = gap * globalFontSize;

        for (let slide in slides) {
          if (
            local_steps[slide] + slides[slide].clientWidth - 2 + gap >
            this.carousel.scrollWidth - this.carousel.clientWidth
          )
            break;
          local_steps.push(
            local_steps[slide] + slides[slide].clientWidth + gap
          );
        }
      }
      return local_steps;
    },
    initButtonVisibility(position) {
      if (this.isOverflown(this.carousel)) {
        this.btnNext.classList.remove("hide");
        this.btnPrev.classList.remove("hide");
        this.btnNext.classList.add("show");
        this.btnPrev.classList.add("show");

        // check if the position is on absolute left or right
        // and display buttons appropriately
        if (
          (position ? position : this.getPosX(this.carousel)) === this.steps[0]
        ) {
          this.btnPrev.classList.remove("show");
          this.btnPrev.classList.add("hide");
        } else if (
          (position ? position : this.getPosX(this.carousel)) ===
          this.steps[this.steps.length - 1]
        ) {
          this.btnNext.classList.remove("show");
          this.btnNext.classList.add("hide");
        }
      } else {
        this.btnNext.classList.remove("show");
        this.btnPrev.classList.remove("show");
        this.btnNext.classList.add("hide");
        this.btnPrev.classList.add("hide");
      }
    },
    // button functions
    handleNextButtonClick() {
      const prevPos = this.getPosX(this.carousel);
      const nextPos = this.getNextSlidePos(prevPos);

      this.moveX(this.carousel, prevPos, nextPos);

      if (prevPos === this.steps[0]) {
        this.btnPrev.classList.remove("hide");
        this.btnPrev.classList.add("show");
      }

      if (nextPos === this.steps[this.steps.length - 1]) {
        this.btnNext.classList.remove("show");
        this.btnNext.classList.add("hide");
      }
    },
    handlePrevButtonClick() {
      const prevPos = this.getPosX(this.carousel);
      const nextPos = this.getPrevSlidePos(prevPos);

      this.moveX(this.carousel, prevPos, nextPos);

      if (prevPos === this.steps[this.steps.length - 1]) {
        this.btnNext.classList.remove("hide");
        this.btnNext.classList.add("show");
      }

      if (nextPos === this.steps[0]) {
        this.btnPrev.classList.remove("show");
        this.btnPrev.classList.add("hide");
      }
    },
    // drag functions
    handleStartDrag(event) {
      if (event.cancelable) {
        // event.preventDefault();
        this.isDragging = true;
        // check if mouse or touch event
        this.startMousePos = event.pageX
          ? event.pageX
          : event.changedTouches[0].pageX;
        this.startCarouselPos = parseInt(this.getPosX(this.carousel));
      }
    },
    handleMoveDrag(event) {
      event.preventDefault();
      if (!this.isDragging) return;

      const movedValue = this.rangeMovedValue(
        Math.round(
          this.startCarouselPos +
            this.startMousePos -
            (event.pageX ? event.pageX : event.changedTouches[0].pageX)
        )
      );
      this.carousel.setAttribute(
        "style",
        `transform: translateX(-${movedValue}px) !important;`
      );
    },
    handleStopDrag(event) {
      // event.preventDefault();
      if (!this.isDragging) return;
      this.carousel.removeAttribute("style");

      const movedValue = this.rangeMovedValue(
        Math.round(
          this.startCarouselPos +
            this.startMousePos -
            (event.pageX ? event.pageX : event.changedTouches[0].pageX)
        )
      );
      this.carousel.setAttribute(
        "style",
        `transform: translateX(-${movedValue}px);`
      );

      this.isDragging = false;
      this.snapToClosestPos(movedValue);
    },
    // utility functions
    isOverflown(element) {
      if (document.querySelectorAll(".slide").length < 2) {
        return false;
      }
      return (
        element.clientWidth < element.scrollWidth ||
        element.clientHeight < element.scrollHeight
      );
    },
    getPosX(element) {
      return Math.abs(
        new WebKitCSSMatrix(window.getComputedStyle(element).transform).m41
      );
    },
    rangeMovedValue(value) {
      if (value > this.carousel.scrollWidth - this.carousel.clientWidth) {
        return this.carousel.scrollWidth - this.carousel.clientWidth;
      } else if (value < 0) {
        return 0;
      } else {
        return value;
      }
    },
    // get slide positions
    getNextSlidePos(currentPos) {
      for (let step in this.steps) {
        if (this.steps[step] > currentPos) {
          return this.steps[step];
        }
      }
    },
    getPrevSlidePos(currentPos) {
      for (let step in this.steps) {
        if (this.steps[step] >= currentPos) {
          return this.steps[step - 1];
        }
      }
      return this.steps[0];
    },
    getClosestSlidePos(currentPos) {
      if (currentPos <= this.steps[0]) {
        return this.steps[0];
      }

      for (let step in this.steps) {
        if (this.steps[step] >= currentPos) {
          if (
            this.steps[step] - currentPos <
            currentPos - this.steps[step - 1]
          ) {
            return this.steps[step];
          } else {
            return this.steps[step - 1];
          }
        }
      }
      return this.steps[this.steps.length - 1];
    },
    snapToClosestPos(currentPos) {
      const nextPos = this.getClosestSlidePos(currentPos);
      this.moveX(this.carousel, currentPos, nextPos);

      if (nextPos === this.steps[0]) {
        this.btnPrev.classList.remove("show");
        this.btnPrev.classList.add("hide");
      } else {
        this.btnPrev.classList.remove("hide");
        this.btnPrev.classList.add("show");
      }
      if (nextPos === this.steps[this.steps.length - 1]) {
        this.btnNext.classList.remove("show");
        this.btnNext.classList.add("hide");
      } else {
        this.btnNext.classList.remove("hide");
        this.btnNext.classList.add("show");
      }

      return nextPos;
    },
    // smooth move function
    moveX(element, startPosX, endPosX) {
      element.animate(
        [
          { transform: `translateX(-${startPosX}px)` },
          { transform: `translateX(-${endPosX}px)` },
        ],
        {
          duration: this.animationDuration,
          fill: "forwards",
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

.carousel {
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  will-change: transform;
}

.carousel-btn-next,
.carousel-btn-prev {
  --spacing: -2rem;
  --item-height: 3.825rem;
  cursor: pointer;
  fill: var(--carousel-btn-color, inherit);
  stroke: var(--carousel-btn-color, inherit);
  height: var(--item-height);
  opacity: 0.6;
  position: absolute;
  top: var(--carousel-btn-upper-spacing, calc(50% - var(--item-height) / 2));
  transition: opacity 200ms ease;
  width: calc(var(--item-height) * 0.55);

  @media (max-width: 800px) {
    --spacing: 1rem;
  }
}

.carousel-btn-next:hover,
.carousel-btn-prev:hover {
  opacity: 1;
}

.carousel-btn-next {
  right: var(--carousel-btn-spacing, var(--spacing));
}

.carousel-btn-prev {
  left: var(--carousel-btn-spacing, var(--spacing));
}

.outer-wrapper {
  position: relative;
}

.wrapper {
  overflow: hidden;
  // padding: 2rem;
  position: relative;
}

/* utility */
.hide {
  display: none;
  opacity: 0;
}

.show {
  display: block;
}
</style>

<style lang="scss">
@use 'sass:math';
.generic-slide {
  --gap: 3.125rem;
  --item-amount: 3;
  display: inline-block;
  position: relative;
  vertical-align: top;
  white-space: normal;
  width: calc(
    (100% - (var(--item-amount) - 1) * var(--gap)) / var(--item-amount)
  );

  @media (max-width: 1200px) {
    --item-amount: 2;
  }
  @media (max-width: 650px) {
    --item-amount: 1;
  }
}

.generic-slide + .generic-slide {
  margin-left: var(--gap);
}
</style>
