import React from "react";
import {
  VictoryAxis,
  VictoryChart,
  VictoryClipContainer,
  VictoryLine,
  VictoryPie,
} from "victory";
import "./Charts.scss";

const Charts: React.FC = () => {
  return (
    <section className="charts">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0 fw-bold">Data</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-6 text-center">
            <h4>Efficiency</h4>
            <VictoryPie
              data={[
                { x: "Aliens", y: 7 },
                { x: "Humans", y: 31 },
                { x: "Cats", y: 62 },
              ]}
              colorScale={["#9e9e9e", "#eaeaea", "#d6000c"]}
              width={500}
              innerRadius={100}
              style={{
                labels: {
                  fontSize: 20,
                },
              }}
            />
          </div>
          <div className="col-md-6 text-center">
            <h4>Stock Price</h4>
            <VictoryChart>
              <VictoryAxis
                crossAxis={true}
                domain={[250, 450]}
                dependentAxis
                tickFormat={(value) => `$${value}`}
              />
              <VictoryAxis
                domain={[2017, 2022]}
                tickFormat={(value) => value.toString()}
              />
              <VictoryLine
                groupComponent={
                  <VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />
                }
                style={{
                  data: {
                    stroke: "#069f30",
                    strokeWidth: 8,
                    strokeLinecap: "round",
                  },
                }}
                data={[
                  { x: 2017, y: 312.17 },
                  { x: 2017.5, y: 309.15 },
                  { x: 2018, y: 300.15 },
                  { x: 2018.5, y: 320.77 },
                  { x: 2019, y: 354.66 },
                  { x: 2019.5, y: 364.56 },
                  { x: 2020, y: 319.3 },
                  { x: 2020.5, y: 329.3 },
                  { x: 2021, y: 418.7 },
                  { x: 2021.5, y: 428.5 },
                  { x: 2022, y: 444.22 },
                ]}
              />
            </VictoryChart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charts;
