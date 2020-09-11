const initialState = [
  {
    name: 'Page',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subData: [
      {
        name: 'Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        data: 'Homepage - This is the homepage title',
      },
      {
        name: 'Type',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        data: 'Homepage - This is the homepage title',
      },
    ],
  },

  {
    name: 'Search',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subData: [
      {
        name: 'Term',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        data: 'Dog Food',
      },
      {
        name: 'Results Count',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        data: '23',
      },
    ],
  },


  {
    name: 'Cart',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subData: [
      {
        name: 'ID',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        data: '1234567890',
      },
      {
        name: 'Total',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        data: '$99.99',
        subData: [
          {
            name: 'Name',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            data: 'Best Tasting Dog Food',
          },
          {
            name: 'Price',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            data: '$99.99',
          },    
        ],
      },
    ],
  },
];


const dataReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default dataReducer;