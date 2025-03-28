"use client"

import type React from "react"
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButton,
  IonBadge,
  IonSearchbar,
  IonDatetime,
  IonPopover,
} from "@ionic/react"
import { eyeOutline, calendarOutline, filterOutline } from "ionicons/icons"
import { useState } from "react"
import AdminLayout from "../components/AdminLayout"
import "./Dashboard.css"
import "./Pages.css"

const AuditTrail: React.FC = () => {
  const [showDatePicker, setShowDatePicker] = useState(false)

  const auditLogs = [
    {
      id: 1,
      action: "User Login",
      user: "John Doe",
      timestamp: "2025-03-01 09:30:15",
      ip: "192.168.1.1",
      status: "Success",
    },
    {
      id: 2,
      action: "Post Created",
      user: "Jane Smith",
      timestamp: "2025-03-01 10:15:22",
      ip: "192.168.1.2",
      status: "Success",
    },
    {
      id: 3,
      action: "User Updated",
      user: "Michael Wilson",
      timestamp: "2025-03-01 11:05:47",
      ip: "192.168.1.3",
      status: "Success",
    },
    {
      id: 4,
      action: "Failed Login Attempt",
      user: "Unknown",
      timestamp: "2025-03-01 12:30:10",
      ip: "192.168.1.4",
      status: "Failed",
    },
    {
      id: 5,
      action: "Post Deleted",
      user: "Jane Smith",
      timestamp: "2025-03-01 13:45:33",
      ip: "192.168.1.2",
      status: "Success",
    },
    {
      id: 6,
      action: "Team Created",
      user: "Michael Wilson",
      timestamp: "2025-03-01 14:20:18",
      ip: "192.168.1.3",
      status: "Success",
    },
    {
      id: 7,
      action: "User Logout",
      user: "John Doe",
      timestamp: "2025-03-01 15:10:05",
      ip: "192.168.1.1",
      status: "Success",
    },
    {
      id: 8,
      action: "Settings Changed",
      user: "Michael Wilson",
      timestamp: "2025-03-01 16:05:42",
      ip: "192.168.1.3",
      status: "Success",
    },
    {
      id: 9,
      action: "Failed Login Attempt",
      user: "Unknown",
      timestamp: "2025-03-01 17:30:19",
      ip: "192.168.1.5",
      status: "Failed",
    },
    {
      id: 10,
      action: "User Login",
      user: "Jane Smith",
      timestamp: "2025-03-01 18:15:27",
      ip: "192.168.1.2",
      status: "Success",
    },
  ]

  return (
    <AdminLayout title="CESO Admin" pageTitle="Audit Trail" breadcrumb="Admin / Audit Trail">
      <IonCard className="overview-card">
        <IonCardHeader color="danger">
          <div className="card-header-with-button">
            <IonCardTitle className="content-title">System Activity Logs</IonCardTitle>
            <IonButton color="dark" size="small" onClick={() => setShowDatePicker(true)}>
              <IonIcon slot="start" icon={calendarOutline} />
              Select Date Range
            </IonButton>
            <IonPopover
              isOpen={showDatePicker}
              onDidDismiss={() => setShowDatePicker(false)}
              className="date-popover"
            >
              <IonDatetime presentation="date" multiple={true} />
              <div className="popover-buttons">
                <IonButton fill="clear" onClick={() => setShowDatePicker(false)}>
                  Cancel
                </IonButton>
                <IonButton onClick={() => setShowDatePicker(false)}>Apply</IonButton>
              </div>
            </IonPopover>
          </div>
        </IonCardHeader>
        <IonCardContent>
          <div className="search-filter-container">
            <IonSearchbar placeholder="Search audit logs..." className="custom-searchbar"></IonSearchbar>
            <IonButton color="medium" size="small">
              <IonIcon slot="start" icon={filterOutline} />
              Filters
            </IonButton>
          </div>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Action</th>
                  <th>User</th>
                  <th>Timestamp</th>
                  <th>IP Address</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.map((log) => (
                  <tr key={log.id}>
                    <td>{log.id}</td>
                    <td>{log.action}</td>
                    <td>{log.user}</td>
                    <td>{log.timestamp}</td>
                    <td>{log.ip}</td>
                    <td>
                      <IonBadge color={log.status === "Success" ? "success" : "danger"}>{log.status}</IonBadge>
                    </td>
                    <td className="actions-cell">
                      <IonButton fill="clear" size="small" color="primary">
                        <IonIcon icon={eyeOutline} />
                      </IonButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <span>Showing 1-10 of 150 logs</span>
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
                ...
              </IonButton>
              <IonButton size="small" fill="clear">
                15
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

export default AuditTrail

