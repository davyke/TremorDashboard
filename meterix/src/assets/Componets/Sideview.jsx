import { Card, Title, DonutChart } from '@tremor/react';

const cities = [
    {
        name: 'New York',
        sales: 9800,
    },
    {
        name: 'London',
        sales: 4567,
    },
    {
        name: 'Hong Kong',
        sales: 3908,
    },
    {
        name: 'San Francisco',
        sales: 2400,
    },
    {
        name: 'Singapore',
        sales: 1908,
    },
    {
        name: 'Zurich',
        sales: 1398,
    },
];

const valueFormatter = (number) => (
    `$ ${Intl.NumberFormat('us').format(number).toString()}`
);
import { BarChart, Subtitle } from "@tremor/react";

const chartdata2 = [
  {
    topic: "Brand 1",
    "Group A": 890,
    "Group B": 338,
    "Group C": 538,
    "Group D": 396,
    "Group E": 138,
    "Group F": 436,
  },
  {
    topic: "Brand 2",
    "Group A": 289,
    "Group B": 233,
    "Group C": 253,
    "Group D": 333,
    "Group E": 133,
    "Group F": 533,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};


function Sideview(){
    return(
        <div>
        <Card >
        <Title>Individual products: Entries</Title>
        <BarChart
        data={chartdata2}
        dataKey="topic"
        categories={[
            "Group A",
            "Group B",
            "Group C",
            "Group D",
            "Group E",
            "Group F",
        ]}
        colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
        valueFormatter={dataFormatter}
        marginTop="mt-6"
        yAxisWidth="w-12"
        />
        </Card>
        <Card maxWidth="max-w-s">
        <Title>Sales by City</Title>
        <DonutChart
            data={ cities }
            category="sales"
            dataKey="name"
            variant="pie"
            valueFormatter={ valueFormatter }
            marginTop="mt-6"
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
        />
        </Card>
        </div>
    )
}

export default Sideview;