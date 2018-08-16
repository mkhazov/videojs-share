/**
 * @return {boolean}
 */
export function isTouchDevice() {
  return ('ontouchstart' in window) ||
    (navigator.MaxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0);
}

/**
 * Checks if the player opened on iOS or Android device.
 *
 * @return {boolean}
 */
export function isMobileDevice() {
  return (/Android/).test(window.navigator.userAgent) ||
    (/iP(hone|ad|od)/i).test(window.navigator.userAgent);
}

const EXCLUDED_SOCIALS = ['whatsapp', 'viber', 'messenger'];

/**
 * Filters socials list depending on platform.
 *
 * @param  {Array} socials
 *         List of socials to filter.
 * @return {Array}
 *         Filtered list of socials.
 */
export function filterSocials(socials = [], mobileVerification = true) {
  return mobileVerification ?
    isMobileDevice() ? socials : socials.filter((social) => !EXCLUDED_SOCIALS.includes(social)) :
    socials;
}
