import './rightBar.scss';
import React from 'react';

export default function RightBar ()
{
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>

          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest actitivies</span>


          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

              <p>
                <span>John Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>


          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

              <p>
                <span>John Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

              <p>
                <span>John Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

              <p>
                <span>John Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

              <div className='online' />
              <span>John Doe</span>

            </div>
          </div>


          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

              <div className='online' />
              <span>John Doe</span>

            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

              <div className='online' />
              <span>John Doe</span>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
