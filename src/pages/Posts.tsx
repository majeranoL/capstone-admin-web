import type React from "react"
import { useState } from "react"
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
  IonButton,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonLabel,
  IonToast,
  IonToggle,
} from "@ionic/react"
import "./Dashboard.css"
import "./Pages.css"

const Posts: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    status: 'draft',
    allowVolunteers: false
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setShowToast(true);
    // Reset form
    setFormData({
      title: '',
      content: '',
      category: '',
      status: 'draft',
      allowVolunteers: false
    });
  };

  const categories = [
    "Announcements",
    "Tutorials",
    "Updates",
    "Events",
    "Security",
    "Reports"
  ];

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

      <IonContent className="post-content">
        <div className="dashboard-header">
          <h1 className="content-title">Create New Post</h1>
          <span className="breadcrumb content-text">Admin / New Post</span>
        </div>

        <div className="content-area">
          <IonCard className="overview-card">
            <IonCardHeader color = "danger">
              <IonCardTitle className="content-title">Post Details</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <form onSubmit={handleSubmit}>
                <IonItem>
                  <IonLabel position="floating">Post Title</IonLabel>
                  <IonInput
                    value={formData.title}
                    onIonChange={e => setFormData({...formData, title: e.detail.value || ''})}
                    required
                  />
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Content</IonLabel>
                  <IonTextarea
                    value={formData.content}
                    onIonChange={e => setFormData({...formData, content: e.detail.value || ''})}
                    rows={6}
                    required
                  />
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Category</IonLabel>
                  <IonSelect
                    value={formData.category}
                    onIonChange={e => setFormData({...formData, category: e.detail.value})}
                  >
                    {categories.map(category => (
                      <IonSelectOption key={category} value={category}>
                        {category}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Status</IonLabel>
                  <IonSelect
                    value={formData.status}
                    onIonChange={e => setFormData({...formData, status: e.detail.value})}
                  >
                    <IonSelectOption value="draft">Draft</IonSelectOption>
                    <IonSelectOption value="published">Published</IonSelectOption>
                  </IonSelect>
                </IonItem>

                <IonItem lines="none" className="toggle-item">
                  <IonLabel>Allow Volunteers</IonLabel>
                  <IonToggle
                    checked={formData.allowVolunteers}
                    onIonChange={e => setFormData({...formData, allowVolunteers: e.detail.checked})}
                    slot="start"
                    className="volunteer-toggle"
                  />
                </IonItem>

                <div className="form-buttons">
                  <IonButton type="submit" expand="block" color="danger">
                    Create Post
                  </IonButton>
                </div>
              </form>
            </IonCardContent>
          </IonCard>
        </div>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Post created successfully!"
          duration={2000}
          color="success"
        />
      </IonContent>
    </IonPage>
  )
}

export default Posts

