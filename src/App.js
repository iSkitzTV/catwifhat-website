import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-700 text-white p-6 text-center font-bold text-3xl">
        CatWifHat Project - Terra Classic
      </header>

      <main className="py-10 px-4">
        <section className="max-w-3xl mx-auto mb-10 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Welcome to CatWifHat</h1>
          <p className="text-gray-700 text-lg">
            The revolutionary project on Terra Classic blockchain.
            Track live token stats, burning activity, supply & more.
          </p>
        </section>

        <Dashboard />
      </main>

      <footer className="bg-blue-700 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} CatWifHat Project
      </footer>
    </div>
  );
}

export default App;