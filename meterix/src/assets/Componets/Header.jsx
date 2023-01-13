import {
    Card,
    Metric,
    Text,
    Icon,
    Flex,
    Block,
    ColGrid,
} from '@tremor/react';

import {
    TicketIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";

const categories=
    [
    {
        title: 'Assets',
        metric: '$ 23,456,456',
        icon: TicketIcon,
        
    },
    {
        title: 'Tax',
        metric: '$ 13,123',
        icon: TicketIcon,
        color: 'yellow',
        
    },
    {
        title: 'Employees',
        metric: '456',
        icon: UserGroupIcon,
        color: 'red',
    },
];
function Header() {
    return (
        <ColGrid numColsSm={ 2 } numColsLg={ 3 } gapX="gap-x-6" gapY="gap-y-6">
            { categories.map((item) => (
                <Card key={ item.title } decoration="top" decorationColor={ item.color }>
                    <Flex justifyContent="justify-start" spaceX="space-x-4">
                        <Icon
                            icon={ item.icon }
                            variant="light"
                            size="xl"
                            color={ item.color }
                        />
                        <Block truncate={ true }>
                            <Text>{ item.title }</Text>
                            <Metric truncate={ true }>{ item.metric }</Metric>
                        </Block>
                    </Flex>
                </Card>
            )) }
        </ColGrid>
    );
}
  export default Header;
  
