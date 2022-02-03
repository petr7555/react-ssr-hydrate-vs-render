import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOMServer from 'react-dom/server';

/* Observations */
/*
1) hydrate works even without previous content, but emits development error  
'Warning: Expected server HTML to contain a matching <div> in <div>.'
2) When contents differ (due to use of ssr prop), both hydrate and render
emit development error
'Warning: Text content did not match. Server: "SSR" Client: "CLIENT"'
3) render emits development warning
'Warning: render(): Calling ReactDOM.render() to hydrate server-rendered markup
 will stop working in React v18. Replace the ReactDOM.render() call with ReactDOM.hydrate()
 if you want React to attach to the server HTML.'
 It can spot SSR content by its 'data-reactroot' attribute.
 If you use 'renderToStaticMarkup' instead of 'renderToString',
 the 'data-reactroot' attribute is not present and the warning is not emitted.
 */

const html = ReactDOMServer.renderToString(<App ssr />);
console.log('HTML', html);

const root = document.getElementById('root');
root!.innerHTML = html;

ReactDOM.hydrate(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
