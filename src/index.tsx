import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
// import { createStore, combineReducers, applyMiddleware } from 'redux'

import { Provider } from 'react-redux';
// import createHistory from 'history/createBrowserHistory';
// import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import AppComponent from './HelloContainer';
import { enthusiasm } from './reducers';
import { StoreState } from './types';
import { EnthusiasmAction } from './actions';
import { SquareValue, Suggestions } from './constants';

// import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';

const store = createStore<StoreState, EnthusiasmAction, {}, {}>(enthusiasm, {
  defaultValue: 'X',
  history: [],
  square: SquareValue,
  suggestionsList: Suggestions,
  tag: 'Next Player',
  isWinner: false

});
// class Login extends React.Component {
//   state = {
//     redirectToReferrer: false
//   };
//   const login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState({ redirectToReferrer: true });
//     });
//   }
//   render() {
//     const { from } = this.props.location.state || { from: { pathname: "/" } };
//     const { redirectToReferrer } = this.state;

//     if (redirectToReferrer) {
//       return <Redirect to={from} />;
//     }

//     return (
//       <div>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     );
//   };
// }

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/abouts">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//         <li><Link to="/author">Author</Link></li>

//       </ul>

//       <hr />

//       <Route exact path="/" component={Home} />
//       <Route path="/abouts" component={About} />
//       <Route path="/topics" component={Topics} />
//       <Route path="/author" component={Authors} />
//       <AuthButton />
//       <ul>
//         <li>
//           <Link to="/public">Public Page</Link>
//         </li>
//         <li>
//           <Link to="/protected">Protected Page</Link>
//         </li>
//       </ul>
//       <Route path="/public" component={Public} />
//       <Route path="/login" component={Login} />
//       <PrivateRoute path="/protected" component={Protected} />
//     </div>
//   </Router>
// )
// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate({ cb }: any) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout({ cb }: any) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// const AuthButton = withRouter(
//   ({ history }) =>
//     fakeAuth.isAuthenticated ? (
//       <p>
//         Welcome!{" "}
//         <button
//           onClick={() => {
//             fakeAuth.signout(() => history.push("/"));
//           }}
//         >
//           Sign out
//         </button>
//       </p>
//     ) : (
//         <p>You are not logged in.</p>
//       )
// );



// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       fakeAuth.isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location }
//             }}
//           />
//         )
//     }
//   />
// );

// const Public = () => (
//   <div>
//     <h3>Public</h3>
//   </div>
// )
// const Protected = () => (
//   <div>
//     <h3>Protected</h3>
//   </div>
// );



// // Create a history of your choosing (we're using a browser history in this case)
// const history = createHistory()


// // Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history)


// const Author = ({ match }: any) => (
//   <div>
//     <h3>{match.params.authorId}</h3>
//   </div>

// )

// const authorHeading = () => (
//   <div>
//     <h2>
//       Please select to get the author Details
//     </h2>
//   </div>
// )

// const Authors = ({ match }: any) => (
//   <div>
//     <h2>
//       Hello React Routing
//     </h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/author1`}>
//           author1
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/author2`}>
//           author2
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/author3`}>
//           author3
//         </Link>
//       </li>
//     </ul>
//     <Route path={`${match.path}/:authorId`} component={Author} />
//     <Route exact path={match.path} render={authorHeading} />
//   </div>
// )


// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

// const Topic = ({ match }: any) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )
// const heading = () => (
//   <h3>Please select a topic.</h3>
// )
// const Topics = ({ match }: any) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:topicId`} component={Topic} />
//     <Route exact path={match.path} render={heading} />
//   </div>
// )



ReactDOM.render(
  <Provider store={store} >
    <AppComponent />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating

// ReactDOM.render(
//   <Provider >
//     < BasicExample />,
//   </Provider >,
//   document.getElementById('root')
// )