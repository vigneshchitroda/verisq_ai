import { RefreshCw } from "lucide-react";
import VendorRow from "./VendorRow";

function VendorTable() {
  const vendors = [
    {
      id: 1,
      name: "CloudSync Pro",
      domain: "cloudsyncpro.com",
      status: "Complete",
      score: 72,
      questionnaire: "Pending",
      riskScore: 32,
      findings: 3,
      tier: "Tier 3"
    },
    {
      id: 2,
      name: "DataPipe Analytics",
      domain: "datapipe.io",
      status: "Processing",
      score: null,
      questionnaire: "Send",
      riskScore: null,
      findings: null,
      tier: null
    }
  ];

  return (
    <div className="vendor-table-card">
      <div className="table-header table-header-flex">
        <h3>Your Vendors</h3>

        <button className="refresh-btn">
          <RefreshCw size={16} />
          Refresh
        </button>
      </div>

      <table className="vendor-table">
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Scorecard Status</th>
            <th>Score</th>
            <th>Questionnaire</th>
            <th>Risk Score</th>
            <th>High+ Findings</th>
            <th>Risk Tier</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {vendors.map((vendor) => (
            <VendorRow key={vendor.id} vendor={vendor} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VendorTable;
