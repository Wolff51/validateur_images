import { useNavigate } from 'react-router-dom';
import './Login.css';

function Home (setisAuthenticated) {
    const navigate = useNavigate();

    return (
        <div>
          <form className="form" onSubmit={async (e) => {
            e.preventDefault();
            if (!e.target.email.value) {
              alert("Email is required");
            } else if (!e.target.email.value) {
              alert("Valid email is required");
            } else if (!e.target.password.value) {
              alert("Password is required");
            } else if (
              e.target.email.value === "admin@supairvision.com" &&
              e.target.password.value === "admin"
            ) {
              e.target.email.value = "";
              e.target.password.value = "";
              localStorage.setItem('isAuthenticated', 'true');
              navigate('/home');
              window.location.reload();
            } else {
              alert("Wrong email or password combination");
            }
          }
          }>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="test@supairvision.com" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" name="password" />
            </div>
            <button className="primary">ENTRER</button>
          </form>
        </div>
      );
}

export default Home;