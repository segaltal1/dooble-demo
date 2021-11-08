import { Switch, Route } from 'react-router'
import { AppHeader } from './cmps/AppHeader';
import routes from './routes.js'

export function App() {
  return (
    <section className="app flex column gap">
      <AppHeader />
      <main className="main-layout">
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </Switch>
      </main>
    </section>
  )
}

