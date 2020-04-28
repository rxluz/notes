import isMobile from 'is-mobile'

const isBrowserInDarkMode = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const isMobileOrTablet = () => isMobile({ tablet: true })

export { isBrowserInDarkMode, isMobileOrTablet }
