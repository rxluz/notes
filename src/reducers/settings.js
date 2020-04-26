const settings = (state = [], action) => {
  switch (action.type) {
    default:
      return {
        language: 'browser',
        darkMode: 'browser',
        autosave: true,
        saveAndCreateNew: true,
      }
  }
}

export default settings
