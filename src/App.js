import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header.js';
import { Store } from './Components/Pages/Store/Store.js';
import { Game } from './Components/Pages/Game/Game.js';
import InterBold from "./Fonts/Inter-Bold.ttf";
import Inter from "./Fonts/Inter-Regular.ttf";
import InterMedium from "./Fonts/Inter-Medium.ttf";
import InterSemiBold from "./Fonts/Inter-SemiBold.ttf";
import { createGlobalStyle } from 'styled-components';
import { Profile } from './Components/Pages/Profile/Profile.js';
import { ContextProvider } from './Components/ContextProvider.js';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: local("Inter-Regular"), url(${Inter}) format("truetype");
  }

  @font-face {
    font-family: "Inter Medium";
    src: local("Inter-Medium"), url(${InterMedium}) format("truetype");
  }

  @font-face {
    font-family: "Inter SemiBold";
    src: local("Inter-SemiBold"), url(${InterSemiBold}) format("truetype");
  }

  @font-face {
    font-family: "Inter Bold";
    src: local("Inter-Bold"), url(${InterBold}) format("truetype");
  }
`;

function App() {
  return (
    <Router>
      <ContextProvider>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
