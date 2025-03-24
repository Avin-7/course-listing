const conf = {
  adminRouteLink: import.meta.env.VITE_ADMIN_ROUTE,
  appWriteUrl: import.meta.env.VITE_APPWRITE_URL,
  appWriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appWriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appWriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
  appWriteWishlistCollectionId: import.meta.env
    .VITE_APPWRITE_WISHLIST_COLLECTION_ID,
  appWriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
  adminEmailId: import.meta.env.VITE_EMAIL_ID,
  adminPassword: import.meta.env.VITE_PASSWORD,
  algoliaAppId: import.meta.env.VITE_ALGOLIA_APPLICATION_ID,
  algoliaSearchApiKey: import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY,
  firebaseApiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  firebaseProjectId: import.meta.env.FIREBASE_PROJECT_ID,
  firebaseStorageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  firebaseAppId: import.meta.env.FIREBASE_APP_ID,
};
export default conf;
