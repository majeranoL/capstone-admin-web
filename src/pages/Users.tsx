import type React from "react"
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButton,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonChip,
} from "@ionic/react"
import { createOutline, trashOutline, addOutline, lockClosedOutline, timeOutline, mailOutline } from "ionicons/icons"
import AdminLayout from "../components/AdminLayout"
import "./Pages.css"

const Users: React.FC = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2025-03-01 09:30",
      department: "IT",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
      status: "Active",
      lastLogin: "2025-03-02 14:15",
      department: "Marketing",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert.j@example.com",
      role: "Viewer",
      status: "Active",
      lastLogin: "2025-03-01 11:45",
      department: "Support",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.d@example.com",
      role: "Editor",
      status: "Inactive",
      lastLogin: "2025-02-25 16:20",
      department: "Design",
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael.w@example.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2025-03-03 08:10",
      department: "IT",
    },
    {
      id: 6,
      name: "Sarah Brown",
      email: "sarah.b@example.com",
      role: "Viewer",
      status: "Active",
      lastLogin: "2025-03-02 10:30",
      department: "HR",
    },
    {
      id: 7,
      name: "David Miller",
      email: "david.m@example.com",
      role: "Editor",
      status: "Active",
      lastLogin: "2025-03-01 13:45",
      department: "Design",
    },
    {
      id: 8,
      name: "Lisa Anderson",
      email: "lisa.a@example.com",
      role: "Viewer",
      status: "Inactive",
      lastLogin: "2025-02-20 09:15",
      department: "Finance",
    },
    {
      id: 9,
      name: "James Taylor",
      email: "james.t@example.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2025-03-03 11:30",
      department: "IT",
    },
    {
      id: 10,
      name: "Jennifer White",
      email: "jennifer.w@example.com",
      role: "Editor",
      status: "Active",
      lastLogin: "2025-03-02 15:20",
      department: "Marketing",
    },
  ]

  return (
    <AdminLayout title="CESO Admin" pageTitle="Users" breadcrumb="Admin / Users">
      <IonCard className="overview-card">
        <IonCardHeader color="danger">
          <div className="card-header-with-button">
            <IonCardTitle className="content-title">All Users</IonCardTitle>
            <IonButton color="light" size="small">
              <IonIcon slot="start" icon={addOutline} />
              Add New User
            </IonButton>
          </div>
        </IonCardHeader>
        <IonCardContent>
          <div className="search-filter-container">
            <IonSearchbar placeholder="Search users..." className="custom-searchbar"></IonSearchbar>
            <div className="filter-controls">
              <IonSelect interface="popover" placeholder="Role">
                <IonSelectOption value="all">All Roles</IonSelectOption>
                <IonSelectOption value="admin">Admin</IonSelectOption>
                <IonSelectOption value="editor">Editor</IonSelectOption>
                <IonSelectOption value="viewer">Viewer</IonSelectOption>
              </IonSelect>
              <IonSelect interface="popover" placeholder="Department">
                <IonSelectOption value="all">All Departments</IonSelectOption>
                <IonSelectOption value="it">IT</IonSelectOption>
                <IonSelectOption value="marketing">Marketing</IonSelectOption>
                <IonSelectOption value="design">Design</IonSelectOption>
                <IonSelectOption value="hr">HR</IonSelectOption>
                <IonSelectOption value="finance">Finance</IonSelectOption>
                <IonSelectOption value="support">Support</IonSelectOption>
              </IonSelect>
            </div>
          </div>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Last Login</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      <strong>{user.name}</strong>
                    </td>
                    <td>
                      <div className="data-meta">
                        <IonIcon icon={mailOutline} />
                        {user.email}
                      </div>
                    </td>
                    <td>{user.department}</td>
                    <td>
                      <IonChip
                        color={user.role === "Admin" ? "primary" : user.role === "Editor" ? "tertiary" : "medium"}
                        outline={true}
                      >
                        {user.role}
                      </IonChip>
                    </td>
                    <td>
                      <div className={`status-badge ${user.status === "Active" ? "success" : "neutral"}`}>
                        {user.status}
                      </div>
                    </td>
                    <td>
                      <div className="data-meta">
                        <IonIcon icon={timeOutline} />
                        {user.lastLogin}
                      </div>
                    </td>
                    <td className="actions-cell">
                      <IonButton fill="clear" size="small" color="primary">
                        <IonIcon icon={createOutline} />
                      </IonButton>
                      <IonButton fill="clear" size="small" color="warning">
                        <IonIcon icon={lockClosedOutline} />
                      </IonButton>
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
            <span>Showing 1-10 of 22 users</span>
            <div className="pagination-controls">
              <IonButton size="small" fill="clear">
                Previous
              </IonButton>
              <IonButton size="small" fill="solid">
                1
              </IonButton>
              <IonButton size="small" fill="clear">
                2
              </IonButton>
              <IonButton size="small" fill="clear">
                3
              </IonButton>
              <IonButton size="small" fill="clear">
                Next
              </IonButton>
            </div>
          </div>
        </IonCardContent>
      </IonCard>
    </AdminLayout>
  )
}

export default Users

