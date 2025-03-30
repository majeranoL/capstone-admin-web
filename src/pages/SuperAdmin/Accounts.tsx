import { useState, FormEvent } from "react";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonCheckbox,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import AdminLayout from "../../components/SAdmin/AdminLayout";
import './Accounts.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  sendWelcomeEmail: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  submit?: string;
}

const AdminAccountCreation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "admin",
    sendWelcomeEmail: true,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return; // Just return if validation fails, errors will be shown inline
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "admin",
        sendWelcomeEmail: true,
      });
      setErrors({}); // Clear errors on success
    } catch (error) {
      setErrors({ ...errors, submit: "Failed to create account" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout
      title="CESO Admin"
      pageTitle="Create Admin Account"
      breadcrumb="Dashboard / Accounts Management / Create Account"
    >
      <div className="form-container">
        <IonCard className="form-card">
          <IonCardHeader>
            <IonCardTitle>Account Registration</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-row">
                <div className="form-group">
                  <IonLabel position="stacked">First Name</IonLabel>
                  <IonInput
                    className={errors.firstName ? 'has-error' : ''}
                    value={formData.firstName}
                    onIonChange={e => setFormData({...formData, firstName: e.detail.value || ""})}
                    required
                  />
                  {errors.firstName && <div className="error-text">{errors.firstName}</div>}
                </div>
                <div className="form-group">
                  <IonLabel position="stacked">Last Name</IonLabel>
                  <IonInput
                    className={errors.lastName ? 'has-error' : ''}
                    value={formData.lastName}
                    onIonChange={e => setFormData({...formData, lastName: e.detail.value || ""})}
                    required
                  />
                  {errors.lastName && <div className="error-text">{errors.lastName}</div>}
                </div>
              </div>

              <div className="form-group">
                <IonLabel position="stacked">Email Address</IonLabel>
                <IonInput
                  className={errors.email ? 'has-error' : ''}
                  type="email"
                  value={formData.email}
                  onIonChange={e => setFormData({...formData, email: e.detail.value || ""})}
                  required
                />
                {errors.email && <div className="error-text">{errors.email}</div>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <IonLabel position="stacked">Password</IonLabel>
                  <IonInput
                    className={errors.password ? 'has-error' : ''}
                    type="password"
                    value={formData.password}
                    onIonChange={e => setFormData({...formData, password: e.detail.value || ""})}
                    required
                  />
                  {errors.password && <div className="error-text">{errors.password}</div>}
                </div>
                <div className="form-group">
                  <IonLabel position="stacked">Confirm Password</IonLabel>
                  <IonInput
                    className={errors.confirmPassword ? 'has-error' : ''}
                    type="password"
                    value={formData.confirmPassword}
                    onIonChange={e => setFormData({...formData, confirmPassword: e.detail.value || ""})}
                    required
                  />
                  {errors.confirmPassword && <div className="error-text">{errors.confirmPassword}</div>}
                </div>
              </div>

              <div className="form-group">
                <IonLabel position="stacked">Role</IonLabel>
                <IonSelect
                  value={formData.role}
                  onIonChange={e => setFormData({...formData, role: e.detail.value})}
                  interface="popover"
                  interfaceOptions={{
                    cssClass: 'select-popover select-interface-option'
                  }}
                >
                  <IonSelectOption value="admin">Administrator</IonSelectOption>
                  <IonSelectOption value="user">Normal User</IonSelectOption>
                </IonSelect>
              </div>

              <div className="checkbox-container">
                <IonCheckbox
                  checked={formData.sendWelcomeEmail}
                  onIonChange={e => setFormData({...formData, sendWelcomeEmail: e.detail.checked})}
                />
                <IonLabel>Send welcome email with login instructions</IonLabel>
              </div>

              {errors.submit && <div className="error-text">{errors.submit}</div>}

              <div className="button-container">
                <IonButton
                  fill="outline"
                  className="button-cancel"
                  routerLink="/admin"
                >
                  Cancel
                </IonButton>
                <IonButton 
                  type="submit" 
                  className="button-submit"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Account"}
                </IonButton>
              </div>
            </form>
          </IonCardContent>
        </IonCard>
      </div>
    </AdminLayout>
  );
};

export default AdminAccountCreation;
