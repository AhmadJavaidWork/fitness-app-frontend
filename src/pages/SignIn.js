import { useState } from 'react';
import auth from '../api/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();

    if (!email) {
      document.getElementById('email-empty').style.display = 'block';
      return;
    }
    if (!password) {
      document.getElementById('password-empty').style.display = 'block';
      return;
    }

    const res = await auth.signIn(email, password);
    if (res.data.error) {
      document.getElementById('wrong-credentials').style.display = 'block';
      return;
    } else {
      const { user, accessToken } = res.data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
    }
  };

  return (
    <div className="card">
      <h1 style={{ textAlign: 'center' }}>Sign In</h1>
      <form className="sign-in-form" onSubmit={signIn}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onInput={() => {
              document.getElementById('email-empty').style.display = 'none';
              document.getElementById('wrong-credentials').style.display =
                'none';
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
              document.getElementById('wrong-credentials').style.display =
                'none';
            }}
          />
        </div>
        <input type="submit" value="Sign In" className="btn btn-center" />
      </form>
      <p id="email-empty" className="error">
        Please enter email address.
      </p>
      <p id="password-empty" className="error">
        Please enter password.
      </p>
      <p id="wrong-credentials" className="error">
        Wrong Password or Email Address.
      </p>
    </div>
  );
};

export default SignIn;
