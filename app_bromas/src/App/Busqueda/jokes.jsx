import { Outlet, useSearchParams } from 'react-router-dom';
import React from 'react';
import { getJokes } from '../../services/jokeApi';
import { QueryNavLink } from '../../componentes/QueryNavLink';

export default function Jokes() {
  const jokes = getJokes();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            const filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {jokes
          .filter((joke) => {
            const filter = searchParams.get('filter');
            if (!filter) return true;
            const name = joke.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((joke) => (
            <QueryNavLink
              style={({ isActive }) => ({
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : '',
              })}
              to={`/jokes/${joke.id}`}
              key={joke.id}
            >
              {joke.category}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
