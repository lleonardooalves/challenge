
interface Post {
    id: number;
    title: string;
    imageUrl: string;
    body: string;
  }

  interface Comment {
    id: number;
    postId: number;
    email: string;
    body: string;
  }
  
  const posts: Post[] = [
    {
      id: 1,
      title: "The Future",
      imageUrl: "./src/images/image1.jpg",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 2,
      title: "The Future",
      imageUrl: "./src/images/image2.jpg",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 3,
      title: "The Future",
      imageUrl: "./src/images/image3.jpg",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 4,
      title: "The Future",
      imageUrl: "./src/images/image1.jpg",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 5,
      title: "The Future",
      imageUrl: "./src/images/image2.jpg",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 6,
      title: "The Future",
      imageUrl: "./src/images/image3.jpg",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    
  ];
  
  const comments: Comment[] = [
    {
      id: 1,
      postId: 1,
      email: "usuario_1: usuário_1@email.com:",
      body: "This is the first comment on Post 1.",
    },
    {
      id: 2,
      postId: 1,
      email: "usuario_2: usuário_2@email.com:",
      body: "This is the second comment on Post 1.",
    },
    {
      id: 3,
      postId: 2,
      email: "usuario_3 usuário_3@email.com:",
      body: "This is the first comment on Post 2.",
    },
  ];


  
  export { posts, comments };

  