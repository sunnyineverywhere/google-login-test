import axios from "axios";
import GoogleLogin from "./component/GoogleLogIn";

function App() {
  return (
    <div>
      <GoogleLogin />
    </div>
  );
}

export default App;

/*
<GoogleOAuthProvider clientId="451481737505-i96lk8b7lfj079nk1ksu3ikpbm0oeaac.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
*/
