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
          cardOrder: ['card-1', 'card-2', 'card-3', 'card-4'],
          cards: [
            {
              id: 'card-1', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 1', cover: null,
              description: 'test car',
              date: '2024-05-05',
              labels: [
                {
                  title: 'abcabc',
                  colors: '#a8193d'
                },
                {
                  title: 'xyzxyz',
                  colors: '#a6193d'
                }
              ],
              tasks: [
                {
                  id: '1',
                  title: 'adssdadasdadasa',
                  completed: true
                },
                {
                  id: '2',
                  title: '22222222',
                  completed: false
                }
              ]
            },
            {
              id: 'card-2', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 2', cover: null,
              description: 'test car',
              date: '2024-06-06',
              labels: [
                {
                  title: 'abcabc',
                  colors: '#a8193d'
                },
                {
                  title: 'xyzxyz',
                  colors: '#a6193d'
                }
              ],
              tasks: [
                {
                  id: '1',
                  title: 'adssdadasdadasa',
                  completed: true
                },
                {
                  id: '2',
                  title: '22222222',
                  completed: false
                }
              ]
            },
            {
              id: 'card-3', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 3', cover: null,
              description: 'test car',
              date: '2024-7-7',
              labels: [
                {
                  title: 'abcabc',
                  colors: '#a8193d'
                },
                {
                  title: 'xyzxyz',
                  colors: '#a6193d'
                }
              ],
              tasks: [
                {
                  id: '1',
                  title: 'adssdadasdadasa',
                  completed: true
                },
                {
                  id: '2',
                  title: '22222222',
                  completed: false
                }
              ]
            },
            {
              id: 'card-4', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 4', cover: null,
              description: 'test car',
              date: '2024-05-05',
              labels: [
                {
                  title: 'abcabc',
                  colors: '#a8193d'
                },
                {
                  title: 'xyzxyz',
                  colors: '#a6193d'
                }
              ],
              tasks: [
                {
                  id: '1',
                  title: 'adssdadasdadasa',
                  completed: true
                },
                {
                  id: '2',
                  title: '22222222',
                  completed: false
                }
              ]
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
              id: 'card-8', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 8', cover: null,
              description: 'test car',
              date: '2024-08-08',
              labels: [
                {
                  title: 'abcabc',
                  colors: '#a8193d'
                },
                {
                  title: 'xyzxyz',
                  colors: '#a6193d'
                }
              ],
              tasks: [
                {
                  id: '1',
                  title: 'adssdadasdadasa',
                  completed: true
                },
                {
                  id: '2',
                  title: '22222222',
                  completed: false
                }
              ]
            },
            {
              id: 'card-9', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 9', cover: null,
              description: 'test car',
              date: '2024-09-09',
              labels: [
                {
                  title: 'abcabc',
                  colors: '#a8193d'
                },
                {
                  title: 'xyzxyz',
                  colors: '#a6193d'
                }
              ],
              tasks: [
                {
                  id: '1',
                  title: 'adssdadasdadasa',
                  completed: true
                },
                {
                  id: '2',
                  title: '22222222',
                  completed: false
                }
              ]
            },
            {
              id: 'card-10', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 10', cover: null,
              description: 'test car',
              date: '2024-10-10',
              labels: [
                {
                  title: 'abcabc',
                  colors: '#a8193d'
                },
                {
                  title: 'xyzxyz',
                  colors: '#a6193d'
                }
              ],
              tasks: [
                {
                  id: '1',
                  title: 'adssdadasdadasa',
                  completed: true
                },
                {
                  id: '2',
                  title: '22222222',
                  completed: false
                }
              ]
            }
          ]
        },
        {
          id: 'column-3',
          boardsId: 'boards-1',
          title: 'bbbbb column',
          cardOrder: ['card-11', 'card-12', 'card-13'],
          cards: [
            {
              id: 'card-11', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 8', cover: null,
              description: 'test car',
              date: '2024-11-11',
              labels: [
                {
                  title: 'abcabc',
                  colors: '#a8193d'
                },
                {
                  title: 'xyzxyz',
                  colors: '#a6193d'
                }
              ],
              tasks: [
                {
                  id: '1',
                  title: 'adssdadasdadasa',
                  completed: true
                },
                {
                  id: '2',
                  title: '22222222',
                  completed: false
                }
              ]
            },
            {
              id: 'card-12', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 9', cover: null,
              description: 'test car',
              date: '2024-12-12',
              labels: [
                {
                  title: 'abcabc',
                  colors: '#a8193d'
                },
                {
                  title: 'xyzxyz',
                  colors: '#a6193d'
                }
              ],
              tasks: [
                {
                  id: '1',
                  title: 'adssdadasdadasa',
                  completed: true
                },
                {
                  id: '2',
                  title: '22222222',
                  completed: false
                }
              ]
            },
            {
              id: 'card-13', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 10', cover: null,
              description: 'test car',
              date:'2023-10-10',
              labels: [
                {
                  title: 'abcabc',
                  colors: '#a8193d'
                },
                {
                  title: 'xyzxyz',
                  colors: '#a6193d'
                }
              ],
              tasks: [
                {
                  id: '1',
                  title: 'adssdadasdadasa',
                  completed: true
                },
                {
                  id: '2',
                  title: '22222222',
                  completed: false
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}