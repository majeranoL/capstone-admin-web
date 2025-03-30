import type React from "react"
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { Redirect, Route, Switch } from "react-router-dom"
import AdminMenu from "./components/SAdmin/AdminMenu"
import Dashboard from "./pages/SuperAdmin/Dashboard"
import Posts from "./pages/SuperAdmin/Posts"
import Users from "./pages/SuperAdmin/Users"
import Teams from "./pages/SuperAdmin/Teams"
import AuditTrail from "./pages/SuperAdmin/AuditTrail"
import Login from "./pages/Login"
import Applications from "./pages/SuperAdmin/Applications"
import AdminAccountCreation from "./pages/SuperAdmin/Accounts"
import { useEffect, useState } from "react"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

/* Ionic Dark Mode */
import "@ionic/react/css/palettes/dark.system.css"

/* Theme variables */
import "./theme/variables.css"
import "./theme/admin-theme.css"

setupIonicReact()

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("user")
    setIsAuthenticated(!!user)
  }, [])

  return (
    <IonApp>
      <IonReactRouter>
        {isAuthenticated ? (
          <IonSplitPane contentId="main">
            <AdminMenu />
            <IonRouterOutlet id="main">
              <Switch>
                <Route path="/" exact={true}>
                  <Redirect to="/dashboard" />
                </Route>
                <Route path="/dashboard" exact={true} component={Dashboard} />
                <Route path="/posts" exact={true} component={Posts} />
                <Route path="/users" exact={true} component={Users} />
                <Route path="/teams" exact={true} component={Teams} />
                <Route path="/audit" exact={true} component={AuditTrail} />
                <Route path="/applications" exact={true} component={Applications} />
                <Route path="/accounts" exact={true} component={AdminAccountCreation} />
                <Route>
                  <Redirect to="/dashboard" />
                </Route>
              </Switch>
            </IonRouterOutlet>
          </IonSplitPane>
        ) : (
          <IonRouterOutlet>
            <Switch>
              <Route path="/login" exact={true} component={Login} />
              <Route>
                <Redirect to="/login" />
              </Route>
            </Switch>
          </IonRouterOutlet>
        )}
      </IonReactRouter>
    </IonApp>
  )
}

export default App

