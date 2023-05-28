const initialData = {
  boards: [
    {
      id: 'board-1',
      title: 'board 1',
      colorBoard: '#4fcc25',
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
              userName: 'aaaaaaa',
              imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
              date: '2024-05-05',
              complete: true,
              overTime: true,
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
              userName: 'aaaaaaa',
              imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
              date: '2024-06-06',
              complete: true,
              overTime: true,
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
              userName: 'aaaaaaa',
              imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
              date: '2024-7-7',
              complete: false,
              overTime: false,
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
              userName: 'aaaaaaa',
              imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
              date: '2024-05-05',
              complete: true,
              overTime: true,
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
              id: 'card-8', boardsId: 'boards-1', columnId: 'column-1',
              title: 'title of card 8', cover: null,
              userName: 'aaaaaaa',
              imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
              description: 'test car',
              date: '2024-08-08',
              complete: true,
              overTime: false,
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
              userName: 'aaaaaaa',
              imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
              date: '2024-09-09',
              complete: true,
              overTime: false,
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
              userName: 'aaaaaaa',
              imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
              date: '2024-10-10',
              complete: true,
              overTime: false,
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
              userName: 'aaaaaaa',
              imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
              date: '2024-11-11',
              complete: false,
              overTime: false,
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
              userName: 'aaaaaaa',
              imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
              date: '2024-12-12',
              complete: true,
              overTime: false,
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
              userName: 'aaaaaaa',
              imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
              date:'2023-10-10',
              complete: false,
              overTime: true,
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

const dataUser = {
  userName: 'testName',
  userEmail: 'testEmail',
  img: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
  listBoard: [
    {
      id: '1',
      title: 'board 1',
      color: '#333'
    },
    {
      id: '2',
      title: 'board 2',
      color: '#133'
    },
    {
      id: '3',
      title: 'board 3',
      color: '#233'
    },
    {
      id: '4',
      title: 'board 4',
      color: '#433'
    },
    {
      id: '5',
      title: 'board 1',
      color: '#333'
    },
    {
      id: '6',
      title: 'board 2',
      color: '#133'
    },
    {
      id: '7',
      title: 'board 3',
      color: '#233'
    },
    {
      id: '8',
      title: 'board 4',
      color: '#433'
    }
  ]
}


const dataNotifications = [
  {
    id: '1',
    content: 'abc đã thêm bạn vào',
    type: ''
  },
  {
    id: '2',
    content: 'abc đã thêm bạn vào',
    type: 'da dong y'
  },
  {
    id: '3',
    content: 'abc đã thêm bạn vào',
    type: 'da tu choi'
  },
  {
    id: '4',
    content: 'abc đã thêm bạn vào',
    type: ''
  }
]

const dataComment = [
  {
    userName: 'testName',
    userEmail: 'testEmail',
    img: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
    comment: 'comment nay de test'
  },
  {
    userName: 'testName',
    userEmail: 'testEmail',
    img: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
    comment: 'comment nay de test'
  },
  {
    userName: 'testName',
    userEmail: 'testEmail',
    img: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
    comment: 'comment nay de test'
  },
  {
    userName: 'testName',
    userEmail: 'testEmail',
    img: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
    comment: 'comment nay de test'
  }
]

export { initialData, dataUser, dataNotifications, dataComment }