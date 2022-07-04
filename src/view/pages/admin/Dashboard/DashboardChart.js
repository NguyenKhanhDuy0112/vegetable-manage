import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { chartBar, chartDonut } from "./dataChar";


function DashboardChart() {
    const [chart, setChart] = useState(chartBar)
    const [donutChart, setDonutChart] = useState(chartDonut)

    useEffect(() => {
        setChart(chartBar)
        setDonutChart(chartDonut)
    }, [])

    return (
        <>
            <div className="dashboard__chart mt-5">
                <div className="row g-3">
                    <div className="col-12 col-lg-6 h-100">
                        <div className="dashboard__chart-item p-3 h-100">
                            <h5 className="dashboard__chart-item-title">Conversion This Year</h5>
                            <ReactApexChart options={chart.options} series={chart.series} type="bar" height={340} />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 h-100">
                        <div className="dashboard__chart-item p-3 h-100">
                            <h5 className="dashboard__chart-item-title">Top Revenue Product</h5>
                            <ReactApexChart options={donutChart.options} series={donutChart.series} height={350} type="donut" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardChart;