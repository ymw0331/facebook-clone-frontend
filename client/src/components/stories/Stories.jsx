import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";


export default function Stories ()
{
  const { currentUser } = useContext( AuthContext );

  // temporary
  const stories = [

    {
      id: 1,
      name: "Amy Lee",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Amy Lee",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }, {
      id: 3,
      name: "Amy Lee",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }, {
      id: 4,
      name: "Amy Lee",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }

  ];


  return (
    <div className="stories">
      <div className="story">
        <img src={ currentUser.profilePic } alt="" />
        <span>{ currentUser.name }</span>
        <button>+</button>
      </div>
      { stories.map( story => (
        <div className="story" key={ story.id }>
          <img src={ story.img } alt="" />
          <span>{ story.name }</span>
        </div>
      ) ) }
    </div>
  );
}
