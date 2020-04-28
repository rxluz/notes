const settings = (state = [], action) => {
  switch (action.type) {
    default:
      return {
        list: [
          {
            uuid: 'f913fa80-ed9d-4ccc-810e-d168aa309bd9',
            title: 'Hello world',
            content: 'hey hey hey',
            pinned: true,
            dateAdded: '2020-04-26T12:54:13.261Z',
            dateEdited: '2020-04-26T12:54:13.261Z',
            dueDate: '2020-04-26T12:54:13.261Z',
            color: 'FA8FA3',
            tags: ['hello', 'world'],
          },
        ],
      }
  }
}

export default settings
