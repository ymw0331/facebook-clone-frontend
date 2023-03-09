import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";



export const Comments = () =>
{

  const { currentUser } = useContext( AuthContext );

  // temporary
  const comments = [
    {
      id: 1,
      desc: "Aliquip minim est nisi fugiat excepteur quis Lorem laboris qui magna. Sint magna nulla est laborum occaecat. Voluptate in elit ut consectetur mollit fugiat aliqua Lorem do.",
      name: "Adrian Ching",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 1,
      desc: "Aliquip minim est nisi fugiat excepteur quis Lorem laboris qui magna. Sint magna nulla est laborum occaecat. Voluptate in elit ut consectetur mollit fugiat aliqua Lorem do.",
      name: "Adrian Ching",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

  ];

  return (
    <div className='comments' >
      <div className="write">
        <img src={ currentUser.profilePic } alt="" />
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      {
        comments.map( comment => (
          <div className='comment'>
            <img
              src={ comment.profilePic }
              alt={ comment.name }
            />
            <div className='info'>
              <span>{ comment.name }</span>
              <p>{ comment.desc }</p>
            </div>
            <span className='date'>1 hour ago</span>
          </div>
        ) )
      }
    </div>
  );
};
