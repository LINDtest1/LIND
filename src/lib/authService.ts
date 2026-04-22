// Mock Auth Service for Demo Mode
const MOCK_USER_KEY = "arthub_mock_user";

export const signInWithGoogle = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const mockUser = {
    uid: "demo-user-123",
    displayName: "Lemuel Lind",
    email: "lemuellind@gmail.com",
    photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lemuel",
    emailVerified: true
  };
  
  localStorage.setItem(MOCK_USER_KEY, JSON.stringify(mockUser));
  window.dispatchEvent(new Event('storage')); // Trigger update
  return mockUser;
};

export const logout = async () => {
  localStorage.removeItem(MOCK_USER_KEY);
  window.dispatchEvent(new Event('storage'));
  return Promise.resolve();
};

export const subscribeToAuthChanges = (callback: (user: any | null) => void) => {
  const checkAuth = () => {
    const stored = localStorage.getItem(MOCK_USER_KEY);
    callback(stored ? JSON.parse(stored) : null);
  };
  
  window.addEventListener('storage', checkAuth);
  // Also check immediately
  checkAuth();
  
  return () => window.removeEventListener('storage', checkAuth);
};
