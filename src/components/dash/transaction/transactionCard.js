import React, { useEffect, useRef } from 'react';
import * as Styles from './transaction.css';
import Chart from "chart.js";

Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0;

const TransactionCard = (props) => {
    const chartRef = useRef(null)

    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        const { height: graphHeight } = myChartRef.canvas;

        let gradientLine = myChartRef
            .createLinearGradient(0, 0, 0, graphHeight / 3.5);
            gradientLine.addColorStop(0, "rgb(2, 148, 255)");
            gradientLine.addColorStop(0.9191919191919192, "rgb(255, 255, 255)");
            gradientLine.addColorStop(1, "rgb(255, 255, 255)");
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
                <Styles.TransactionSub>{props.value}</Styles.TransactionSub>
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