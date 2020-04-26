import isMobile from 'is-mobile'

const isBrowserInDarkMode = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
const isMobileOrTablet = () => isMobile({ tablet: true })

export { isBrowserInDarkMode, isMobileOrTablet }
