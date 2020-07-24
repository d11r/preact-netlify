import { h, Component } from "preact";
import { Router } from "preact-router";
import { Provider } from "@preact/prerender-data-provider";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Services from "../routes/services";
import NotFoundPage from "../routes/notfound";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render(props) {
    return (
      <Provider value={props}>
        <div id="app">
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Services path="/services" />
            <NotFoundPage type="404" default />
          </Router>
        </div>
      </Provider>
    );
  }
}
