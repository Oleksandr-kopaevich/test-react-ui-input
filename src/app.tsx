import { SignInPage } from "./pages/sign-in";
import { SignUpPage } from "./pages/sign-up";
import "./app.scss";

function App() {
  return (
    <div className="pages-wrapper">
      <div className="page-wrapper">
        <SignUpPage />
      </div>
      <div className="page-wrapper">
        <SignInPage />
      </div>
    </div>
  );
}

export default App;
