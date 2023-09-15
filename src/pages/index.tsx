import { useState } from 'react';
import {
  Button, FormGroup, Input, Label
} from 'reactstrap';
import ViewReport from './ViewReport';
import { PAGE_SITE } from '../constants/DefaultValues';
import { dataBabyNotWeaned, dataBabyWeaned, dataMTB } from '../data/dataKids';

const HomePage = () => {
  const [data, setData] = useState<any>(null);
  const [type, setType] = useState(PAGE_SITE.CONSUMER);

  const handleChangeData = (index: number) => {
    switch (index) {
      case 1:
        setData(dataBabyNotWeaned);
        break;
      case 2:
        setData(dataBabyWeaned);
        break;
      case 3:
        setData(dataMTB);
        break;
      default:
        break;
    }
  };

  return (
    <div className="wrapper flex  ">
      <main className="main-content">
        <div className={`p-4 ${data ? 'd-none' : ''}`}>
          <h1 className="text-center">Generate report:</h1>
          <h3>1/ Select report type</h3>
          <div>
            <FormGroup check>
              <Input
                id="check-consumer"
                type="radio"
                checked={type === PAGE_SITE.CONSUMER}
                onChange={() => { return setType(PAGE_SITE.CONSUMER); }}
              />
              <Label check for="check-consumer">
                Consumer
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                id="check-hcp"
                type="radio"
                value={PAGE_SITE.HCP}
                checked={type === PAGE_SITE.HCP}
                onChange={() => { return setType(PAGE_SITE.HCP); }}
              />
              <Label check for="check-hcp">
                HCP
              </Label>
            </FormGroup>
          </div>

          <h3>2/ Select conditions</h3>
          <Button color="primary" className="m-2" onClick={() => { return handleChangeData(1); }}>Baby is not weaned</Button>
          <Button color="primary" className="m-2" onClick={() => { return handleChangeData(2); }}>Baby weaned</Button>
          <Button color="primary" className="m-2" onClick={() => { return handleChangeData(3); }}>Mother to be</Button>
        </div>
        {
          data && <ViewReport dataInput={data} pageSite={type} setData={setData} />
        }
      </main>
    </div>

  );
};

export default HomePage;
