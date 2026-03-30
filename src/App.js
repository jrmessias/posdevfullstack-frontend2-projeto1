import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CadastrarAlunos from "./pages/CadastrarAlunos";
import Alunos from './pages/Alunos';
import Biblioteca from './pages/Biblioteca';
import Dashboard from './pages/Dashboard';
import CadastrarLivros from './pages/CadastrarLivros';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>

        <Header/>

        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cadastarAlunos' element={<CadastrarAlunos/>} />
            <Route path='/Alunos' element={<Alunos/>} />
            <Route path='/Biblioteca' element={<Biblioteca/>} />
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path='/cadastrarLivros' element={<CadastrarLivros/>} />
          </Routes>
        </main>

        <Footer/>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
