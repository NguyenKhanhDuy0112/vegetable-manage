import DashboardSystem from "./DashboardSystem";
import DashboardChart from "./DashboardChart";
import DashboardOrder from "./DashboardOrder";

function Dashboard() {
    return (
        <>
            <div className="container">
                <div className="dashboard">
                    <h6 className="fw-bold py-4 mb-0 dashboard__title margin-top-3">Dashboard Overview</h6>
                    <DashboardSystem />
                    <DashboardChart />
                    <h6 className="fw-bold py-4 mb-0 dashboard__title">Recent Order</h6>
                    <DashboardOrder />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
