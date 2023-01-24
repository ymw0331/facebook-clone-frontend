import React from 'react';
import Post from "../post/Post";
import './posts.scss';

export default function Posts ()
{


  // temporary
  const posts = [
    {
      id: 1,
      name: "Amy Lee",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Aliquip minim est nisi fugiat excepteur quis Lorem laboris qui magna. Sint magna nulla est laborum occaecat. Voluptate in elit ut consectetur mollit fugiat aliqua Lorem do.",
      img: "https://images.pexels.com/photos/10611877/pexels-photo-10611877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Amy Lee",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Aliquip minim est nisi fugiat excepteur quis Lorem laboris qui magna. Sint magna nulla est laborum occaecat. Voluptate in elit ut consectetur mollit fugiat aliqua Lorem do.",
      img: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }, {
      id: 3,
      name: "Amy Lee",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Aliquip minim est nisi fugiat excepteur quis Lorem laboris qui magna. Sint magna nulla est laborum occaecat. Voluptate in elit ut consectetur mollit fugiat aliqua Lorem do.",
      img: "https://images.pexels.com/photos/533937/pexels-photo-533937.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }, {
      id: 4,
      name: "Amy Lee",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Aliquip minim est nisi fugiat excepteur quis Lorem laboris qui magna. Sint magna nulla est laborum occaecat. Voluptate in elit ut consectetur mollit fugiat aliqua Lorem do.",
      img: "https://www.pexels.com/photo/person-sitting-on-mountain-cliff-1659438/"
    }

  ];


  return (
    <div className='posts'>

      { posts.map( post => (
        <Post post={ post } key={ post.id } />
      ) ) }

    </div>
  );
}
