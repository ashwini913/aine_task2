import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RecruitersPage from "./components/RecruitersPage";
import Applications from "./components/Applications";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/recruiterspage" exact component={RecruitersPage} />
          <Route path="/applications" exact component={Applications} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
