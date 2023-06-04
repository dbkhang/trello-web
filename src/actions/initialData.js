const initialData = {
  boards: [
    {
      id: 'board-1',
      title: 'Bảng 1',
      colorBoard: '#4fcc25',
      columnOrder: ['column-1', 'column-2', 'column-3'],
      columns: [
        {
          id: 'column-1',
          boardsId: 'boards-1',
          title: 'Cột 1',
          cardOrder: ['card-1', 'card-2', 'card-3', 'card-4'],
          cards: [
            {
              id: 'card-1', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 1', cover: null,
              description: 'Thẻ 1',
              userName: 'Khang',
              imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
              date: '2023-05-05',
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
              description: 'Thẻ 2',
              userName: 'Nam',
              imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
              date: '2024-06-06',
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
            },
            {
              id: 'card-3', boardsId: 'boards-1', columnId: 'column-1', title: 'title of card 3', cover: null,
              description: 'Thẻ 2',
              userName: 'Hưng',
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
            }
          ]
        },
        {
          id: 'column-2',
          boardsId: 'boards-1',
          title: 'Cột 2',
          cardOrder: ['card-8', 'card-9', 'card-10'],
          cards: [
            {
              id: 'card-8', boardsId: 'boards-1', columnId: 'column-1',
              title: 'Thẻ 4', cover: null,
              userName: 'Khang',
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
              description: 'Thẻ 5',
              userName: 'Nam',
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
              description: 'Thẻ 6',
              userName: 'Hưng',
              imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
              date: '2024-10-10',
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
    content: 'Khang đã mời bạn vào Bảng 1',
    type: ''
  },
  {
    id: '3',
    content: 'Nam đã thêm bạn vào Bảng 2',
    type: 'Bạn đã đồng ý'
  }
]

const dataComment = [
  {
    userName: 'Khang',
    userEmail: 'testEmail',
    img: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
    comment: 'Bình luận thẻ 1'
  },
  {
    userName: 'Nam',
    userEmail: 'testEmail',
    img: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
    comment: 'Nam đã bình luận'
  },
  {
    userName: 'Hưng',
    userEmail: 'testEmail',
    img: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
    comment: 'Bình luận thử'
  },
  {
    userName: 'Mạnh',
    userEmail: 'testEmail',
    img: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
    comment: 'aaaaaaaaa'
  }
]

export { initialData, dataUser, dataNotifications, dataComment }