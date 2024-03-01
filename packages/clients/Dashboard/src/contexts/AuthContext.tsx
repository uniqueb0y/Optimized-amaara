import { createContext, useContext, useState, useEffect, FC } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";

import { auth } from "../config/firebase";
import { useLazyQuery } from "@apollo/client";
import { GET_USER_BY_PHONE } from "../gql/user";
import { Loader } from "../Component/Loader";
//import { RoleType } from "@amaaraseetu/types";

const AuthContext = createContext<any>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: FC<any> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [getUserByPhoneQuery] = useLazyQuery(GET_USER_BY_PHONE);
  let recaptchaVerifier: any;
  const signInWithPhone = (phone: string) => {
    if (!recaptchaVerifier) {
      recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response: any) => {
          console.log(response);
        },
        "expired-callback": () => {
          console.log("Expired");
        },
      });
    }
    return signInWithPhoneNumber(auth, phone, recaptchaVerifier);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user: any) => {
      if (user) {
        setLoading(true);
        const phoneNumber = user?.phoneNumber;
        const getUserByPhoneResult = await getUserByPhoneQuery({
          variables: {
            phone: phoneNumber,
          },
          onError: async (error) => {
            console.log(error);
            await logout();
            localStorage.removeItem("accessToken");
            window.location.reload();
          }
        });
        const loggedInUser = getUserByPhoneResult?.data?.getUserByPhone;
        user.getIdToken().then((token: string) => {
          localStorage.setItem("accessToken", token);
          user.profileInfo = loggedInUser;
          // if (loggedInUser?.role?.name === RoleType.ADMIN) {
          //   user.isAdmin = true;
          // } else if (loggedInUser?.role?.name === RoleType.SUPERADMIN) {
          //   user.isSuperAdmin = true;
          // } else if (loggedInUser?.role?.name === RoleType.MANAGER) {
          //   user.isManager = true;
          // }
          setCurrentUser(user);
          setLoading(false);
        });
      } else {
        localStorage.removeItem("accessToken");
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    error,
    setError,
    signInWithPhone,
    logout,
    recaptchaVerifier,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : (
        <Loader />
      )}
    </AuthContext.Provider>
  );
};
