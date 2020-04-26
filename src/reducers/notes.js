const settings = (state = [], action) => {
  switch (action.type) {
    default:
      return {
        list: [
          {
            title: 'Hello world',
            content: 'hey hey hey',
            pinned: true,
            dateAdded: '2020-04-26T12:54:13.261Z',
            dateEdited: '2020-04-26T12:54:13.261Z',
            tags: ['hello', 'world'],
          },
        ],
      }
  }
}

export default settings
