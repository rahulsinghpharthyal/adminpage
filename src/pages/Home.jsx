import React from "react";
import EmployeeOverView from "../componets/EmployeeOverView";
import ActiveUsers from "../componets/ActiveUsers";
import ActualCard from "../componets/Card/AcutualCard";

const Home = () => {
  return (
    <div>
        <div className="flex flex-row">
        <ActualCard />
        </div>
      <div className="p-4 flex flex-row items-end justify-end gap-96">
        <div className="p-1 mb-96">
          <ActiveUsers />
        </div>
        <div className="mb-96">
          <EmployeeOverView />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
