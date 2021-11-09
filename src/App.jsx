import { useState } from 'react';
import { Switch, Route } from 'react-router'
import { AppHeader } from './cmps/AppHeader';
import routes from './routes.js'

export function App() {
  const [view, setView] = useState(null)
  const toggleView = ({ target }) => {
    setView(target.value === 'cards' ? 'cards' : null)
  }

  return (
    <section className="app flex column gap">
      <AppHeader toggleView={toggleView} view={view} />
      <main className="main-layout">
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component}
            path={route.path}  />)}
        </Switch>
      </main>
    </section>
  )
}

