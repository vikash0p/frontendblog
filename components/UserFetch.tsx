"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
axios.defaults.withCredentials=true
interface user{
_id:string,
name:string,
email:string,
}

interface userProps{
    user:user,
}

const UserFetch = () => {
  const [user, setUser] = useState<userProps>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://backendblog-eta.vercel.app/auth/user",{
            withCredentials:true,
        });
        setUser(res.data);
      } catch (error) {
        console.log("🚀 ~ file: UserFetch.tsx:12 ~ error:", error.message);
      }
    };
    fetchUser();
  }, []);

  return <div>
    <h1 className="p-10 text-center text-2xl">{user?.user?.name} </h1>
  </div>;
};

export default UserFetch;
