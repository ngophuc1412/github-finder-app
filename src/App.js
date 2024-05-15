import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import User from "./pages/User"
import Alert from "./components/layouts/Alert"
import NotFound from "./pages/NotFound"
import {GithubProvider} from "./context/github/GithubContext"
import {AlertProvider} from "./context/alert/AlertContext"
import TestUseMemo from "./test_ne/TestUseMemo";
import TestUseCallback from "./test_ne/TestUseCallback";
import TestUseRef from "./test_ne/TestUseRef";

function App() {
  return (
      <GithubProvider>
        <AlertProvider>
            <Router>
              <div className="flex flex-col justify-between h-screen">
                  <Navbar />
                  <main className="container mx-auto px-3 pb-12">
                      <TestUseMemo />
                      <TestUseCallback />
                      <TestUseRef />
                      <Alert />
                      <Routes>
                          <Route path='/' element={<Home />} />
                          <Route path='/about' element={<About />} />
                          <Route path='/user/:login' element={<User />} />
                          <Route path='/NotFound' element={<NotFound />} />
                          <Route path='/*' element={<NotFound />} />
                      </Routes>
                  </main>

                  <Footer />
              </div>

          </Router>
        </AlertProvider>

      </GithubProvider>
  );
}

export default App;
