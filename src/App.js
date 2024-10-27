import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
        <main className="overflow-hidden relative w-full h-full bg-background">
          <Header />
          <AppRoutes />
          <Footer />
      </main>
    </Router>
    
  );
}

export default App;
