import React from 'react';
import { Router, Route, Switch } from 'wouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Contact from './pages/Contact';
import StudentAccess from './pages/StudentAccess';
import StudentPortal from './pages/StudentPortal';
import TeacherPortal from './pages/TeacherPortal';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/academics" component={Academics} />
            <Route path="/admissions" component={Admissions} />
            <Route path="/faculty" component={Faculty} />
            <Route path="/contact" component={Contact} />
            <Route path="/student-access" component={StudentAccess} />
            <Route path="/student-portal" component={StudentPortal} />
            <Route path="/teacher-portal" component={TeacherPortal} />
            <Route path="/admin-panel" component={AdminPanel} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;