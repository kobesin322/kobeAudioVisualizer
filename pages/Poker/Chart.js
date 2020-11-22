import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import { Typography } from "@material-ui/core";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("0", 0),
  createData("5k", 3000),
  createData("10k", 6000),
  createData("15k", 10000),
  createData("20k", 25000),
  createData("25k", 20000),
  createData("30k", 30000),
  createData("35k", 60000),
  createData("40k", undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Typography>Poker Earning</Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary}>
          <Label value="Hands" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
