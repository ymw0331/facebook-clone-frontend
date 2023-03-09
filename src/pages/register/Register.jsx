import './register.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export const Register = () =>
{
  return (
    <div className='register'>

      <div className='card'>
        <div className='left'>

          <h1>Hello World.</h1>
          <p>
            Amet elit labore cillum laborum. Sunt velit sunt do mollit anim anim aute minim proident sit enim eiusmod culpa laboris. Culpa quis est magna quis proident reprehenderit amet magna pariatur.
          </p>

          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
