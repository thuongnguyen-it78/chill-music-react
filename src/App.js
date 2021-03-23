import './assets/css/app.css'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import routes from './app/route'

const WaitingComponent = () => () => <div>loading</div>

const PrivateRoute = () => <Redirect to="/sigin" />

function App() {
    const showContent = () => {
        let result = []
        let isLogin = true

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                const layout = route.layout
                if (route.auth && !isLogin) {
                    return (
                        <PrivateRoute
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={WaitingComponent(route.main)}
                        />
                    )
                } else {
                    return (
                        <RouteWrapper
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={WaitingComponent(route.main)}
                            layout={layout}
                            title={route.title}
                        />
                    )
                }
            })
        }
        return <Switch>{result}</Switch>
    }

    return (
        <Router>
            <div className="App">{showContent()}</div>
        </Router>
    )
}
function RouteWrapper({ component: Component, layout: Layout, title, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout {...props} title={title}>
                    <Component {...props} />
                </Layout>
            )}
        />
    )
}
export default App
