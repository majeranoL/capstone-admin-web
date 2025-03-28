import type React from "react"
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle } from "@ionic/react"

import { useLocation } from "react-router-dom"
import { gridOutline, documentTextOutline, peopleOutline, peopleCircleOutline, timeOutline } from "ionicons/icons"
import "./AdminMenu.css"

interface AppPage {
  url: string
  icon: string
  title: string
}

const appPages: AppPage[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: gridOutline,
  },
  {
    title: "Posts",
    url: "/posts",
    icon: documentTextOutline,
  },
  {
    title: "Users",
    url: "/users",
    icon: peopleOutline,
  },
  {
    title: "Teams",
    url: "/teams",
    icon: peopleCircleOutline,
  },
  {
    title: "Audit Trail",
    url: "/audit",
    icon: timeOutline,
  },

]

const AdminMenu: React.FC = () => {
  const location = useLocation()

  return (
    <IonMenu contentId="main" type="overlay" className="admin-menu">
      <div className="logo-container">
        <img src="/assets/logo.svg" alt="CESO Admin" className="admin-logo" />
        <h2>CESO Admin</h2>
      </div>
      <IonContent>
        <IonList className="admin-nav-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === appPage.url ? "selected" : ""}
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon aria-hidden="true" slot="start" icon={appPage.icon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            )
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default AdminMenu

