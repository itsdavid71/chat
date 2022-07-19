import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

function Auth() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <p className="mt-2">{user.name}</p>
        <img src={user.pic} />
        <Button onClick={() => logout()} className="">
          Выйти
        </Button>
      </div>
    );
  }
  return (
    <div className="mb-5">
      <Button onClick={() => loginWithRedirect()} className="mt-2">
        Войти
      </Button>
    </div>
  );
}

export default Auth;
