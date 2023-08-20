import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  // or remove above two lines and keep next line
  // const { userId } = useParams();
  return <div>Details about user {userId}</div>;
};

export default UserDetails;
