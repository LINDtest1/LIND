// Mocking Firebase because the user declined Firebase setup.
// This allows the app to function as a client-side demo using localStorage.

export const auth = {
  currentUser: null as any,
} as any;

export const db = {
  // Dummy db object for firestore imports in other files
} as any;

console.log("ArtHub is running in Demo Mode (Local Storage)");
