import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App/App';

import Jokes from './App/Busqueda/jokes';

/* import Invoice from './routes/Invoice'; */

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route path="jokes" element={<Jokes />}>
            <Route
              index
              element={(
                <main style={{ padding: '1rem' }}>
                  <p>Select an invoice</p>
                </main>
              )}
            />
            <Route path=":jokesId" element={<Jokes />} />
          </Route>
          <Route
            path="*"
            element={(
              <main style={{ padding: '1rem' }}>
                <p>Theres nothing here!</p>
              </main>
            )}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
