import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./index.module.css";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((record) => setData(record.results))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Random Users</h1>
      {data.length > 0 ? (
        <div className={styles.cardContainer}>
          {data.map((user, index) => (
            <div key={index} className={styles.card}>
              <img
                src={user.picture.medium}
                alt="profile"
                className={styles.profileImage}
              />
              <h2>
                {user.name.first} {user.name.last}
              </h2>
              <p>
                <strong>Gender:</strong> {user.gender}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Location:</strong> {user.location.city},{" "}
                {user.location.country}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.loading}>Loading Random Users...</p>
      )}
    </div>
  );
}

export default FetchData;
