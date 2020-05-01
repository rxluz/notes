import isMobile from 'is-mobile'

const isDarkMode = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const isMobileOrTablet = () => isMobile({ tablet: true })

const isShareAvailable = () => !!navigator.share

const share = async ({ title, text }) =>
  await navigator.share({ title, text, url: process.env.PUBLIC_URL })

export { isDarkMode, isMobileOrTablet, isShareAvailable, share }
