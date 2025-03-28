import type React from "react"
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
} from "@ionic/react"
import { documentTextOutline, peopleOutline, peopleCircleOutline } from "ionicons/icons"
import AdminLayout from "../components/AdminLayout"
import "./Dashboard.css"

const Dashboard: React.FC = () => {
  const modules = [
    { name: "Posts", icon: documentTextOutline, total: 15 },
    { name: "Users", icon: peopleOutline, total: 22 },
    { name: "Teams", icon: peopleCircleOutline, total: 5 },
  ]

  return (
    <AdminLayout title="CESO Admin" pageTitle="Dashboard" breadcrumb="Admin / Dashboard">
      <div className="content-container">
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="8">
              <IonCard className="overview-card">
                <IonCardHeader color="danger">
                  <IonCardTitle>System Overview</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p className="welcome-text">Welcome to your admin dashboard! Here is a quick overview:</p>

                  <div className="module-table">
                    <div className="table-header">
                      <div className="module-col">Module</div>
                      <div className="total-col">Total</div>
                      <div className="action-col">Action</div>
                    </div>

                    {modules.map((module, index) => (
                      <div className="table-row" key={index}>
                        <div className="module-col">
                          <IonIcon icon={module.icon} />
                          <span>{module.name}</span>
                        </div>
                        <div className="total-col">{module.total}</div>
                        <div className="action-col">
                          <a href={`/${module.name.toLowerCase()}`}>View</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeMd="4">
              <IonCard className="events-card">
                <IonCardHeader>
                  <IonCardTitle>Upcoming Events</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <h3 className="month-heading">March 2025</h3>
                  <ul className="bullet-list">
                    <li>Mar 10 - System Maintenance</li>
                    <li>Mar 15 - New Feature Launch</li>
                    <li>Mar 20 - User Training Session</li>
                  </ul>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </AdminLayout>
  )
}

export default Dashboard

