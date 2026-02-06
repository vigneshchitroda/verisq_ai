import { useState } from "react";
import DashboardHeader from "../components/dashboard/Header";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import "../styles/dashboard.css";
import KpiGrid from "../components/dashboard/KpiGrid";
import Insights from "../components/dashboard/Insights";
import VendorTable from "../components/dashboard/VendorTable";

function DashboardPage() {
  const [usedVendors, setUsedVendors] = useState(2);
  const maxVendors = 5;

  const handleAddVendor = () => {
    // modal will come later
    console.log("Add Vendor clicked");
  };

  return (
    <>
      <DashboardHeader />

      <main className="main">
        <WelcomeBanner
          usedVendors={usedVendors}
          maxVendors={maxVendors}
          onAddVendor={handleAddVendor}
        />
        <Insights />
        <KpiGrid />
        <VendorTable />
      </main>

    </>
  );
}

export default DashboardPage;
