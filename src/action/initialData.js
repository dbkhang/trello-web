export const initialData = {
  boards: [
    {
      id: 'board-1',
      columnOrder: ['column-1', 'column-2', 'column-3'],
      columns: [
        {
          id: 'column-1',
          boardsId: 'boards-1',
          title: 'to do column',
          cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'],
          cards: [
            {
              id: 'card-1', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 1', cover: 'https://cdn.pixabay.com/photo/2020/04/30/14/03/mountains-and-hills-5112952__480.jpg'
            },
            {
              id: 'card-2', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 2', cover: null
            },
            {
              id: 'card-3', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 3', cover: null
            },
            {
              id: 'card-4', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 4', cover: null
            },
            {
              id: 'card-5', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 5', cover: null
            },
            {
              id: 'card-6', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 2', cover: null
            },
            {
              id: 'card-7', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 3', cover: null
            },
            {
              id: 'card-8', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 4', cover: null
            },
            {
              id: 'card-9', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 5', cover: null
            },
            {
              id: 'card-3', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 3', cover: null
            },
            {
              id: 'card-4', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 4', cover: null
            },
            {
              id: 'card-5', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 5', cover: null
            },
            {
              id: 'card-6', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 2', cover: null
            },
            {
              id: 'card-7', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 3', cover: null
            },
            {
              id: 'card-8', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 4', cover: null
            },
            {
              id: 'card-9', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 5', cover: null
            }
          ]
        },
        {
          id: 'column-2',
          boardsId: 'boards-1',
          title: 'aaaaaaa column',
          cardOrder: ['card-8', 'card-9', 'card-10'],
          cards: [
            {
              id: 'card-8', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 8', cover: null
            },
            {
              id: 'card-9', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 9', cover: null
            },
            {
              id: 'card-10', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 10', cover: null
            }
          ]
        },
        {
          id: 'column-3',
          boardsId: 'boards-1',
          title: 'bbbbb column',
          cardOrder: ['card-11', 'card-12', 'card-13', 'card-10'],
          cards: [
            {
              id: 'card-11', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 8', cover: null
            },
            {
              id: 'card-12', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 9', cover: null
            },
            {
              id: 'card-13', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 10', cover: null
            }
          ]
        }
      ]
    }
  ]
}