import React, { useEffect, useRef } from 'react';
import Chart from "chart.js";

Chart.defaults.global.elements.line.tension = 0;

const OrderGraph = (props) => {
    const chartRef = useRef(null)

    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        const { height: graphHeight } = myChartRef.canvas;

        let gradientLine = myChartRef
            .createLinearGradient(0, 0, 0, graphHeight * 1.5);
        gradientLine.addColorStop(0, "rgb(2, 148, 255)");
        gradientLine.addColorStop(0.9191919191919192, "rgb(255, 255, 255)");
        gradientLine.addColorStop(1, "rgb(255, 255, 255)");
        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                    {
                        label: `Today ${new Date().toJSON().slice(0,10).replace(/-/g,'/')}`,
                        borderColor: "#0294FF",
                        backgroundColor: gradientLine,
                        data: [65, 75, 75, 75, 79, 89]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: { display: true },
                        gridLines: {
                            display: true,
                            drawBorder: false
                        }
                    }],
                    yAxes: [{
                        ticks: { display: false },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }]
                }
            }
        });
    }, [props.data])
    return (
            <canvas
                id="myChart"
                ref={chartRef}
            />
    );
}

export default OrderGraph;