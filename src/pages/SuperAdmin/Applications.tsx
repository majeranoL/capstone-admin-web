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
  IonBadge,
} from "@ionic/react"
import { checkmarkOutline, closeOutline, eyeOutline, filterOutline } from "ionicons/icons"
import AdminLayout from "../../components/SAdmin/AdminLayout"

const styles = {
  contentContainer: {
    padding: '0 24px 24px'
  },
  tableContainer: {
    overflowX: 'auto',
    marginBottom: '16px',
    border: '1px solid #eee'
  },
  searchFilterContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    gap: '10px'
  },
  statusBadge: {
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 500
  },
  actionButtons: {
    display: 'flex',
    gap: '8px'
  },
  select: {
    '--background': '#ffffff',
    '--color': '#800000',
    '--placeholder-color': '#800000',
    '--border-color': '#800000',
    '--border-width': '1px',
    '--border-radius': '4px',
    padding: '0 10px',
    border: '1px solid #800000',
    maxWidth: '150px'
  },
  selectPopover: {
    '--background': '#ffffff',
    '--width': '200px',
    '--ion-item-background': '#ffffff',
    '--ion-item-color': '#800000',
    '--ion-color-primary': '#800000',
    '--radio-color': '#800000',
    '--checkbox-color': '#800000',
  },
};

const Applications: React.FC = () => {
  const applications = [
    {
      id: 1,
      title: "Community Health Drive",
      organization: "Medical Students Association",
      date: "2025-04-15",
      location: "Barangay San Jose",
      participants: 25,
      status: "Pending",
      submittedBy: "John Smith",
      type: "Health",
    },
    {
      id: 2,
      title: "Education Outreach Program",
      organization: "Education Society",
      date: "2025-04-20",
      location: "Elementary School District 2",
      participants: 15,
      status: "Approved",
      submittedBy: "Maria Garcia",
      type: "Education",
    },
    {
      id: 3,
      title: "Environmental Cleanup",
      organization: "Environmental Club",
      date: "2025-04-25",
      location: "Coastal Area",
      participants: 40,
      status: "Pending",
      submittedBy: "David Wilson",
      type: "Environment",
    },
    // Add more sample data as needed
  ];

  return (
    <AdminLayout title="CESO Admin" pageTitle="Applications" breadcrumb="Admin / Applications">
      <IonCard className="overview-card">
        <IonCardHeader color="danger">
          <div className="card-header-with-button">
            <IonCardTitle className="content-title">Outreach Applications</IonCardTitle>
            <IonButton color="light" size="small">
              <IonIcon slot="start" icon={filterOutline} />
              Filter
            </IonButton>
          </div>
        </IonCardHeader>
        <IonCardContent>
          <div style={styles.searchFilterContainer}>
            <IonSearchbar placeholder="Search applications..." className="custom-searchbar"></IonSearchbar>
            <IonSelect 
              interface="popover" 
              placeholder="Status"
              style={styles.select}
              interfaceOptions={{
                cssClass: 'custom-select-popover',
              }}
            >
              <IonSelectOption value="all" style={{color: '#800000'}}>All Status</IonSelectOption>
              <IonSelectOption value="pending" style={{color: '#800000'}}>Pending</IonSelectOption>
              <IonSelectOption value="approved" style={{color: '#800000'}}>Approved</IonSelectOption>
              <IonSelectOption value="rejected" style={{color: '#800000'}}>Rejected</IonSelectOption>
            </IonSelect>
            <IonSelect 
              interface="popover" 
              placeholder="Type"
              style={styles.select}
              interfaceOptions={{
                cssClass: 'custom-select-popover',
              }}
            >
              <IonSelectOption value="all" style={{color: '#800000'}}>All Types</IonSelectOption>
              <IonSelectOption value="health" style={{color: '#800000'}}>Health</IonSelectOption>
              <IonSelectOption value="education" style={{color: '#800000'}}>Education</IonSelectOption>
              <IonSelectOption value="environment" style={{color: '#800000'}}>Environment</IonSelectOption>
            </IonSelect>
          </div>

          <div style={styles.tableContainer}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Organization</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Participants</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td>{app.id}</td>
                    <td>
                      <strong>{app.title}</strong>
                    </td>
                    <td>{app.organization}</td>
                    <td>{app.date}</td>
                    <td>{app.location}</td>
                    <td>
                      <IonChip color="medium" outline={true}>
                        {app.participants}
                      </IonChip>
                    </td>
                    <td>
                      <IonBadge color="tertiary">{app.type}</IonBadge>
                    </td>
                    <td>
                      <IonBadge 
                        color={app.status === 'Approved' ? 'success' : app.status === 'Rejected' ? 'danger' : 'warning'}
                      >
                        {app.status}
                      </IonBadge>
                    </td>
                    <td>
                      <div style={styles.actionButtons}>
                        <IonButton fill="clear" size="small" color="success">
                          <IonIcon icon={checkmarkOutline} />
                        </IonButton>
                        <IonButton fill="clear" size="small" color="danger">
                          <IonIcon icon={closeOutline} />
                        </IonButton>
                        <IonButton fill="clear" size="small" color="primary">
                          <IonIcon icon={eyeOutline} />
                        </IonButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <span>Showing 1-3 of 3 applications</span>
            <div className="pagination-controls">
              <IonButton size="small" fill="clear">
                Previous
              </IonButton>
              <IonButton size="small" fill="solid">
                1
              </IonButton>
              <IonButton size="small" fill="clear">
                Next
              </IonButton>
            </div>
          </div>
        </IonCardContent>
      </IonCard>
    </AdminLayout>
  );
};

// Add this global style to fix popover appearance
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .custom-select-popover {
    --background: #ffffff !important;
    --ion-background-color: #ffffff !important;
  }
  .custom-select-popover .select-interface-option {
    --color: #800000 !important;
    --background: #ffffff !important;
  }
  .custom-select-popover .select-interface-option:hover {
    --background: rgba(128, 0, 0, 0.1) !important;
    --color: #800000 !important;
  }
  .custom-select-popover .select-interface-option.select-interface-option-selected {
    --background: rgba(128, 0, 0, 0.2) !important;
    --color: #800000 !important;
  }
`;
document.head.appendChild(styleSheet);

export default Applications;
