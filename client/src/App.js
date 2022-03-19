import logo from './logo.svg';
import './App.css';
import DisplayAllAuthors from "./components/DisplayAllAuthors";
import AuthorForm from "./components/AuthorForm";
import DisplayOneAuthor from "./components/DisplayOneAuthor";
import EditAuthor from "./components/EditAuthor";
import NotFound from "./components/NotFound";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<DisplayAllAuthors/>} path="/" />
        <Route element={<AuthorForm />} path="/authors/new" />
        <Route element={<DisplayOneAuthor />} path="/authors/:id" />
        <Route element={<EditAuthor />} path="/authors/edit/:id" />
        <Route element={< NotFound />} path="/error" />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
