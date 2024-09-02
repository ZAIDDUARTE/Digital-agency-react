import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet-async';

function MyComponent() {
  return (
    <div>
      <Helmet>
        <title>OmniWebMarketing | Your Partner in Digital Success</title>
        <meta
          name="description"
          content="OmniWebMarketing is a full-service digital agency offering expert web design, SEO, and marketing strategies to help your business grow online."
        />
        <meta
          name="keywords"
          content="Digital Marketing, Web Design, SEO, Online Advertising, OmniWebMarketing"
        />
        <meta property="og:title" content="OmniWebMarketing | Your Partner in Digital Success" />
        <meta
          property="og:description"
          content="Expert digital marketing and web design services to boost your online presence and drive growth."
        />
        <meta property="og:url" content="https://www.omniwebmarketing.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OmniWebMarketing | Your Partner in Digital Success" />
        <meta
          name="twitter:description"
          content="Boost your business with our comprehensive digital marketing services."
        />
        <link rel="canonical" href="https://www.omniwebmarketing.com" />
      </Helmet>
      <h1>Welcome to OmniWebMarketing</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
