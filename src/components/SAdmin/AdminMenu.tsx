import type React from "react"
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle } from "@ionic/react"
import { useLocation } from "react-router-dom"
import { gridOutline, documentTextOutline, peopleOutline, peopleCircleOutline, timeOutline, clipboardOutline, keyOutline } from "ionicons/icons"
import "./AdminMenu.css"

const appPages = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: gridOutline,
  },
  {
    title: "Applications",
    url: "/applications",
    icon: clipboardOutline,
  },
  {
    title: "Posts",
    url: "/posts",
    icon: documentTextOutline,
  },
  {
    title: "Accounts Management",
    url: "/accounts",
    icon: keyOutline,
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
        <img src="https://lh3.googleusercontent.com/fiD90bfCLeG8kk2Q8Ay_ea6gGtlY12bu2xssOWGRY2qY1DowWWXNa-iDlPgLTQUFNxXHQlAluTvtAB_mh2HasG8=w16383" alt="CESO Admin" className="admin-logo" />
        <h2>CESO Admin</h2>
      </div>
      <IonContent>
        <IonList className="admin-nav-list">
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem
                className={location.pathname === appPage.url ? "selected" : ""}
                routerLink={appPage.url}
                routerDirection="root"
                lines="none"
                detail={false}
              >
                <IonIcon aria-hidden="true" slot="start" icon={appPage.icon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default AdminMenu

