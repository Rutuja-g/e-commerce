import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, database } from '../misc/firebase';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let userRef;
    const authUnsub = auth.onAuthStateChanged(authObj => {
      // console.log('authObj', authObj);
      if (authObj) {
        userRef = database.ref(`/profiles/${authObj.uid}`);
        userRef.on('value', snap => {
          const { name, createdAt } = snap.val();
          // console.log('profileData', profileData);
          const data = {
            name,
            createdAt,
            uid: authObj.uid,
            email: authObj.email,
          };

          setProfile(data);
          setIsLoading(false);
        });
      } else {
        setProfile(null);
        setIsLoading(null);
      }
    });

    return () => {
      authUnsub();
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);
