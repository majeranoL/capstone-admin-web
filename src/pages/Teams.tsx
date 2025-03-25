import type React from "react"
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButton,
  IonSearchbar,
  IonChip,
} from "@ionic/react"
import { createOutline, trashOutline, addOutline, peopleOutline, personOutline, briefcaseOutline } from "ionicons/icons"
import "./Dashboard.css"
import "./Pages.css"

const Teams: React.FC = () => {
  const teams = [
    {
      id: 1,
      name: "Development Team",
      members: 8,
      lead: "Michael Wilson",
      projects: 3,
      description: "Core application development team",
      created: "2024-10-15",
    },
    {
      id: 2,
      name: "Marketing Team",
      members: 5,
      lead: "Jane Smith",
      projects: 2,
      description: "Product marketing and communications",
      created: "2024-11-03",
    },
    {
      id: 3,
      name: "Design Team",
      members: 4,
      lead: "David Miller",
      projects: 4,
      description: "UI/UX design and brand identity",
      created: "2024-11-20",
    },
    {
      id: 4,
      name: "Support Team",
      members: 6,
      lead: "Sarah Brown",
      projects: 1,
      description: "Customer support and service desk",
      created: "2024-12-05",
    },
    {
      id: 5,
      name: "QA Team",
      members: 3,
      lead: "Robert Johnson",
      projects: 2,
      description: "Quality assurance and testing",
      created: "2025-01-10",
    },
  ]

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary" className="main-header">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>CESO Admin</IonTitle>
          <div className="admin-info" slot="end">
            <span>Admin Name</span>
            <img src="/placeholder.svg?height=32&width=32" alt="Admin" className="admin-avatar" />
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="teams-content">
        <div className="dashboard-header">
          <h1 className="content-title">Teams</h1>
          <span className="breadcrumb content-text">Admin / Teams</span>
        </div>

        <div className="content-area">
          <IonCard className="content-card">
            <IonCardHeader>
              <div className="card-header-with-button">
                <IonCardTitle className="content-title">All Teams</IonCardTitle>
                <IonButton color="primary" size="small">
                  <IonIcon slot="start" icon={addOutline} />
                  Create New Team
                </IonButton>
              </div>
            </IonCardHeader>
            <IonCardContent>
              <div className="search-filter-container">
                <IonSearchbar placeholder="Search teams..." className="custom-searchbar"></IonSearchbar>
              </div>

              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Team Name</th>
                      <th>Description</th>
                      <th>Team Lead</th>
                      <th>Members</th>
                      <th>Projects</th>
                      <th>Created</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.map((team) => (
                      <tr key={team.id}>
                        <td>{team.id}</td>
                        <td>
                          <div className="team-name">
                            <IonIcon icon={peopleOutline} />
                            <strong>{team.name}</strong>
                          </div>
                        </td>
                        <td>{team.description}</td>
                        <td>
                          <div className="data-meta">
                            <IonIcon icon={personOutline} />
                            {team.lead}
                          </div>
                        </td>
                        <td>
                          <IonChip color="medium" outline={true}>
                            {team.members} members
                          </IonChip>
                        </td>
                        <td>
                          <div className="data-meta">
                            <IonIcon icon={briefcaseOutline} />
                            {team.projects} active
                          </div>
                        </td>
                        <td>{team.created}</td>
                        <td className="actions-cell">
                          <IonButton fill="clear" size="small" color="primary">
                            <IonIcon icon={createOutline} />
                          </IonButton>
                          <IonButton fill="clear" size="small" />
                          <IonButton fill="clear" size="small" color="danger">
                            <IonIcon icon={trashOutline} />
                          </IonButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pagination">
                <span>Showing all 5 teams</span>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Teams

