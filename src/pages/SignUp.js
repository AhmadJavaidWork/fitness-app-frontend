import { useState } from 'react';
import auth from '../api/auth';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async (e) => {
    e.preventDefault();

    if (!name) {
      document.getElementById('name-empty').style.display = 'block';
      return;
    }
    if (!email) {
      document.getElementById('email-empty').style.display = 'block';
      return;
    }
    if (!password) {
      document.getElementById('password-empty').style.display = 'block';
      return;
    }

    const user = { name, email, password };
    const res = await auth.signUp(user);
    if (res.data.error) {
      document.getElementById('email-already-used-error').style.display =
        'block';
      return;
    } else {
      const { user, accessToken } = res.data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
    }
  };

  return (
    <div className="card">
      <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
      <form className="sign-in-form" onSubmit={signUp}>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onInput={() => {
              document.getElementById('name-empty').style.display = 'none';
            }}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onInput={() => {
              document.getElementById('email-empty').style.display = 'none';
              document.getElementById(
                'email-already-used-error'
              ).style.display = 'none';
            }}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onInput={() => {
              document.getElementById('password-empty').style.display = 'none';
            }}
          />
        </div>
        <input type="submit" value="Sign Up" className="btn btn-center" />
      </form>
      <p id="name-empty" className="error">
        Please enter your name.
      </p>
      <p id="email-empty" className="error">
        Please enter email address.
      </p>
      <p id="password-empty" className="error">
        Please enter password.
      </p>
      <p id="email-already-used-error" className="error">
        Email is already registered.
      </p>
    </div>
  );
};

export default SignUp;
