import type React from "react"
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonPage,
  IonPopover,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  useIonRouter,
} from "@ionic/react"
import { logOutOutline, notificationsOutline } from "ionicons/icons"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import "./AdminLayout.css"

interface AdminLayoutProps {
  children: React.ReactNode
  title: string
  pageTitle: string
  breadcrumb: string
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title, pageTitle, breadcrumb }) => {
  const [showPopover, setShowPopover] = useState(false);
  const location = useLocation();
  const router = useIonRouter();

  // Close popover when route changes and cleanup
  useEffect(() => {
    setShowPopover(false);
    return () => {
      setShowPopover(false);
    };
  }, [location]);

  const handleLogout = async () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  const handlePageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (showPopover) {
      setShowPopover(false);
    }
  };

  const handlePopoverClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopover(prev => !prev);
  };

  return (
    <IonPage onClick={handlePageClick}>
      <IonHeader>
        <IonToolbar color="primary" className="main-header">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
          <div className="admin-info" slot="end">
            <div className="admin-menu-container">
              <div className="admin-profile">
                <span className="admin-name">Admin Name</span>
                <div 
                  className="avatar-container" 
                  id="trigger-button"
                  onClick={handlePopoverClick}
                >
                  <img 
                    src="/placeholder.svg?height=32&width=32" 
                    alt="Admin" 
                    className="admin-avatar"
                  />
                </div>
              </div>
              <IonPopover 
                isOpen={showPopover}
                onDidDismiss={() => setShowPopover(false)}
                dismissOnSelect={true}
                side="bottom"
                alignment="end"
                arrow={true}
                className="admin-popover"
              >
                <IonList className="popover-list">
                  <IonItem className="popover-item" button detail={false}>
                    <IonIcon icon={notificationsOutline} slot="start" />
                    <IonLabel>Notifications</IonLabel>
                  </IonItem>
                  <IonItem className="popover-item" button onClick={handleLogout} detail={false}>
                    <IonIcon icon={logOutOutline} slot="start" />
                    <IonLabel>Logout</IonLabel>
                  </IonItem>
                </IonList>
              </IonPopover>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="admin-content">
        <div className="dashboard-header">
          <h1 className="content-title">{pageTitle}</h1>
          <span className="breadcrumb content-text">{breadcrumb}</span>
        </div>
        <div className="content-area">
          {children}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AdminLayout;
