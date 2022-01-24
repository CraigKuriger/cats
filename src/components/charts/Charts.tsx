import React from "react";
import {
  VictoryChart,
  VictoryClipContainer,
  VictoryLegend,
  VictoryLine,
  VictoryPie,
} from "victory";
import "./Charts.scss";

const Charts: React.FC = () => {
  return (
    <section className="Charts">
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
              <VictoryLine
                groupComponent={
                  <VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />
                }
                style={{
                  data: {
                    stroke: "#069f30",
                    strokeWidth: 10,
                    strokeLinecap: "round",
                  },
                }}
                data={[
                  { x: 18, y: 300.15 },
                  { x: 19, y: 354.66 },
                  { x: 20, y: 319.3 },
                  { x: 21, y: 418.7 },
                  { x: 22, y: 444.22, label: "Look!" },
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
