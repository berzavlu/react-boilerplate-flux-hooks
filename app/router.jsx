import { hot } from 'react-hot-loader/root'
import React, { lazy, Suspense } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Layout from 'components/layout'
import NotFoundPage from 'pages/404'
import { Store } from 'flux/store'

const routes = [
  {
    path: '/',
    Component: lazy(() => import('./pages/home')),
    exact: true,
  },
  {
    path: '/settings',
    Component: lazy(() => import('./pages/settings')),
    exact: true,
  },
  {
    path: '/users',
    Component: lazy(() => import('./pages/users')),
    exact: true,
  },
  {
    path: '/login',
    Component: lazy(() => import('./pages/login')),
    exact: true,
  },
]

const Router = () => {
  return (
    <BrowserRouter>
      <Store>
        <Layout>
          <Switch>
            {routes.map(({ path, Component, exact }) => (
              <Route
                path={path}
                key={path}
                exact={exact}
                component={() => (
                  <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                  </Suspense>
                )}
              />
            ))}
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </Store>
    </BrowserRouter>
  )
}

export default hot(Router)
