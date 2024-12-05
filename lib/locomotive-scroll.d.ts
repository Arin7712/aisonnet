declare module 'locomotive-scroll' {
    export default class LocomotiveScroll {
      constructor(options: {
        el: HTMLElement | null;
        smooth?: boolean;
        multiplier?: number;
        [key: string]: any;
      });
      destroy(): void;
      update(): void;
      scrollTo(target: string | HTMLElement, options?: { offset?: number; duration?: number; easing?: [number, number, number, number]; disableLerp?: boolean }): void;
    }
  }
  