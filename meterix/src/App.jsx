import '@tremor/react/dist/esm/tremor.css';
import './App.css'
import {
  Card,
  Title,
  Text,
  ColGrid,
  Col,
  Block,
} from '@tremor/react';
import Cardcomp from './assets/Componets/Cardcomp';
import Graphcomp from './assets/Componets/Graphcomp';
import BarComp from './assets/Componets/BarComp';
import Header from './assets/Componets/Header';
import Sideview from './assets/Componets/Sideview';
import Barview from './assets/Componets/Barview';


function App() {
  

  return (
    <div className="App">
       <Header/>

            <ColGrid  numColsLg={ 6 } gapX="gap-x-6" gapY="gap-y-1" marginTop="mt-6">
                { /* Main section */ }
                <Col numColSpanLg={ 4 }>
                    <Card hFull={ true }>
                        <div className="h-80" >
                          <BarComp/>
                          {/* <Sideview/> */}
                          <Barview/>
                        </div>
                    </Card>
                </Col>

                { /* KPI sidebar */ }
                <Col numColSpanLg={ 2 }>
                    <Block spaceY="space-y-6">
                       {/* <Cardcomp /> */}
                       <Sideview/>
                    </Block>
                </Col>
            </ColGrid>
    </div>
    
  )
}

export default App
