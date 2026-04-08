import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ImageList from './components/user/ImageList';
import TicketList from './components/moderator/TicketList';
import TicketDetail from './components/moderator/TicketDetail';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Galerie</Link>
        <Link to="/moderation">Modération</Link>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<ImageList />} />
          <Route path="/moderation" element={<TicketList />} />
          <Route path="/moderation/:id" element={<TicketDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}