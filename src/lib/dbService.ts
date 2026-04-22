// Mock DB Service using LocalStorage for Demo Mode
const STORAGE_PREFIX = "arthub_db_";

const getStorageItem = (key: string) => {
  const item = localStorage.getItem(STORAGE_PREFIX + key);
  return item ? JSON.parse(item) : null;
};

const setStorageItem = (key: string, data: any) => {
  localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(data));
};

export const createUserProfile = async (uid: string, data: any) => {
  setStorageItem(`users_${uid}`, {
    ...data,
    uid,
    createdAt: new Date().toISOString(),
    isArtistActive: false
  });
};

export const getUserProfile = async (uid: string) => {
  return getStorageItem(`users_${uid}`);
};

export const updateUserProfile = async (uid: string, data: any) => {
  const current = getStorageItem(`users_${uid}`) || {};
  setStorageItem(`users_${uid}`, {
    ...current,
    ...data,
    updatedAt: new Date().toISOString()
  });
};

export const registerArtwork = async (userId: string, artworkId: string, cert: string) => {
  const artworks = getStorageItem(`registeredArtworks_${userId}`) || [];
  const newArt = {
    userId,
    artworkId,
    certificateNumber: cert,
    registeredAt: new Date().toISOString()
  };
  setStorageItem(`registeredArtworks_${userId}`, [...artworks, newArt]);
};

export const getRegisteredArtworks = async (userId: string) => {
  return getStorageItem(`registeredArtworks_${userId}`) || [];
};

export const activateArtistProfile = async (userId: string, data: any) => {
  setStorageItem(`artistProfiles_${userId}`, {
    ...data,
    userId,
    isActive: true,
    updatedAt: new Date().toISOString()
  });
  await updateUserProfile(userId, { isArtistActive: true });
};

export const getArtistProfile = async (userId: string) => {
  return getStorageItem(`artistProfiles_${userId}`);
};

export const submitWork = async (userId: string, data: any) => {
  const submissions = getStorageItem(`submissions_${userId}`) || [];
  const newSub = {
    ...data,
    userId,
    status: "pending",
    submittedAt: new Date().toISOString()
  };
  setStorageItem(`submissions_${userId}`, [...submissions, newSub]);
};

export const toggleInteraction = async (userId: string, targetId: string, type: 'like' | 'follow') => {
  const interactions = getStorageItem(`interactions_${userId}`) || [];
  const existingIndex = interactions.findIndex((i: any) => i.targetId === targetId && i.type === type);
  
  if (existingIndex > -1) {
    interactions.splice(existingIndex, 1);
    setStorageItem(`interactions_${userId}`, interactions);
    return false; // removed
  } else {
    interactions.push({
      userId,
      targetId,
      type,
      createdAt: new Date().toISOString()
    });
    setStorageItem(`interactions_${userId}`, interactions);
    return true; // added
  }
};

export const getInteractions = async (userId: string, type?: 'like' | 'follow') => {
  const interactions = getStorageItem(`interactions_${userId}`) || [];
  if (type) {
    return interactions.filter((i: any) => i.type === type);
  }
  return interactions;
};
