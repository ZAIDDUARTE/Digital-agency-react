import logo from './logo.svg';
import './App.css';
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
