import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { getDatabase, Database } from "firebase/database";
import { getAnalytics, Analytics } from "firebase/analytics";

// Firebase configuration object

  
const firebaseConfig = {
  apiKey: "AIzaSyC7rCpHgf2Dzp0guMnhNm-xO21Bm7YUmiQ",
  authDomain: "eptaevents-e6217.firebaseapp.com",
  databaseURL: "https://eptaevents-e6217-default-rtdb.firebaseio.com",
  projectId: "eptaevents-e6217",
  storageBucket: "eptaevents-e6217.firebasestorage.app",
  messagingSenderId: "664503244131",
  appId: "1:664503244131:web:1d0ef8d24fcc94ac5f6f56",
};

// Initialize Firebase app
const app: FirebaseApp = initializeApp(firebaseConfig);

// Export Firebase services
export const auth: Auth = getAuth(app);
export const firestore: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);
export const database: Database = getDatabase(app);

// Initialize and export Analytics if needed
export const analytics: Analytics | null =
  typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;
