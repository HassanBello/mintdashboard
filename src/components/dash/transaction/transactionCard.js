import React, { useEffect, useRef } from 'react';
import * as Styles from './transaction.css';
import Chart from "chart.js";

Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0;

const TransactionCard = (props) => {
    const chartRef = useRef(null)

    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        const { width: graphWidth, height: graphHeight } = myChartRef.canvas;

        let gradientLine = myChartRef
            .createLinearGradient(0, 0, graphWidth, graphHeight);
        gradientLine.addColorStop(1, "rgba(2, 148, 255, 0.8)");
        gradientLine.addColorStop(0.5, "rgba(2, 148, 255, 0.1)");
        gradientLine.addColorStop(1, "rgba(2, 148, 255, 0.2)");
        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        borderColor: "#0294FF",
                        backgroundColor: gradientLine,
                        data: props.data
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: { display: false },
                        gridLines: {
                            display: false,
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
        <Styles.TransactionCard>
            <Styles.CardColumn>
                <Styles.CardHeader>{props.title}</Styles.CardHeader>
                <Styles.TransactionSub>1,570</Styles.TransactionSub>
            </Styles.CardColumn>
            <Styles.GraphColumn>
                <canvas
                    id="myChart"
                    ref={chartRef}
                />
            </Styles.GraphColumn>
        </Styles.TransactionCard>
    )
}

export default TransactionCard;