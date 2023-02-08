import { Card, Title, DonutChart } from '@tremor/react';

const cities = [
    {
        name: 'Google',
        sales: 9800,
    },
    {
        name: 'Facebook',
        sales: 4567,
    },
    {
        name: 'Medium',
        sales: 3908,
    },
    {
        name: 'Github',
        sales: 2400,
    },
    {
        name: 'Youtube',
        sales: 1908,
    },
    {
        name:'Twiter',
        sales: 1398,
    },
];

function Barview(){
    return(
        <div>
        <Card maxWidth="max-w-s">
        <Title>Platform trafic</Title>
        <DonutChart
            data={ cities }
            category="sales"
            dataKey="name"
            variant="donut"
            marginTop="mt-6"
            colors={["amber", "rose","violet", "indigo", "cyan", "indigo"]}
        />
        </Card>
        </div>
        
    )

}
export default Barview;