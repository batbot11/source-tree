import moment from 'moment';

const initialState = [
  {
    name: 'Website 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    domain: 'www.website1.com',
    createdAt: moment(Date.now()).format(),
    objects: [
      {
        name: 'Website 1: DataLayer A',
      },
      {
        name: 'Website 1: DataLayer B',
      },
    ],
  },

  {
    name: 'Website 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    domain: 'www.website2.com',
    createdAt: moment(Date.now()).format(),
    objects: [
      {
        name: 'Website 2: DataLayer A',
      },
      {
        name: 'Website 2: DataLayer B',
      },
    ],
  },


  {
    name: 'Website 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    domain: 'www.website3.com',
    createdAt: moment(Date.now()).format(),
    objects: [
      {
        name: 'Website 3: DataLayer A',
      },
      {
        name: 'Website 3: DataLayer B',
      },
    ],
  },
  {
    name: 'Website 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    domain: 'www.website4.com',
    createdAt: moment(Date.now()).format(),
    objects: [
      {
        name: 'Website 4: DataLayer A',
      },
      {
        name: 'Website 4: DataLayer B',
      },
    ],
  },
  {
    name: 'Website 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    domain: 'www.website5.com',
    createdAt: moment(Date.now()).format(),
    objects: [
      {
        name: 'Website 5: DataLayer A',
      },
      {
        name: 'Website 5: DataLayer B',
      },
    ],
  },
];


const projectsReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default projectsReducer;