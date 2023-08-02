import React, { useEffect, useState } from "react";
import Stats from "../Stats/Stats";
import axios from "axios";
import Header from "../Header/Header";
import Approve from "../Approve/Approve";
import Reviews from "../Reviews/Reviews";

const Homepage = () => {
  const [stats, setStats] = useState({
    total_ev: 0,
    total_users: 0,
  });

  const getDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getstats");
      setStats({
        total_ev: response.data.stats.total_ev,
        total_users: response.data.stats.total_users,
      });
    } catch (err) {
      console.log("some error has occured.");
    }
  };

  useEffect(() => {
    getDetails();
  }, []);
  return (
    <>
      <Header />
      <Stats stats={stats} />
      <Approve />
      <Reviews />
    </>
  );
};

export default Homepage;
