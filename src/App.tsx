import type React from "react"
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { Redirect, Route } from "react-router-dom"
import AdminMenu from "./components/AdminMenu"
import Dashboard from "./pages/Dashboard"
import Posts from "./pages/Posts"
import Users from "./pages/Users"
import Teams from "./pages/Teams"
import AuditTrail from "./pages/AuditTrail"
import Page from "./pages/Page"

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
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <AdminMenu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/dashboard" />
            </Route>
            <Route path="/dashboard" exact={true}>
              <Dashboard />
            </Route>
            <Route path="/posts" exact={true}>
              <Posts />
            </Route>
            <Route path="/users" exact={true}>
              <Users />
            </Route>
            <Route path="/teams" exact={true}>
              <Teams />
            </Route>
            <Route path="/audit" exact={true}>
              <AuditTrail />
            </Route>
            <Route path="/folder/:name" exact={true}>
              <Page />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  )
}

export default App

