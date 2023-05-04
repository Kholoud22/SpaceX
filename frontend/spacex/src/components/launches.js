import React, { useState, useEffect } from 'react'
import LaunchCard from './launch-card'
import Pagination from './pagination'
import { Row, Col, Container, Tab, Nav } from 'react-bootstrap'
import { getAll } from '../launch-apis'
import { useNavigate } from 'react-router-dom';

const Launches = () => {
    const [launches, setPeriodLaunches] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    const navigate = useNavigate();
    let periods = ["Past", "Upcoming"];

    async function handleSelect(key) {
      try{
        var results = await getAll(key.toLowerCase());
        setPeriodLaunches(results);
        setCurrentPage(1)
      } catch {
        navigate('/connetion-refused')
      }
    }

    useEffect(() => {
      async function fetechData(){
        var result = await getAll(periods[0].toLowerCase());
        if(!result || result.code) navigate('/connetion-refused');
        else setPeriodLaunches(result);
      }
      fetechData();
    }, []);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = launches?.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(launches.length / recordsPerPage)

    return (
        <Container>
          <h1 className='text-center m-3'>Launches</h1>
          <Tab.Container defaultActiveKey={periods[0]} onSelect={(e) => handleSelect(e)}>
            <Row>
              <Col lg="auto" md="auto" sm={12}>
                <Nav variant="pills" className="flex-column">
                    {periods && periods.map((p) => (
                        <Nav.Item key={p}>
                            <Nav.Link eventKey={p}>
                                {p}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
              </Col>
              <Col>
                <Tab.Content>
                   {periods && periods.map(p => (
                        <Tab.Pane eventKey={p} key={p}>
                            {currentRecords &&
                            currentRecords.map((launch) => (
                                <LaunchCard {...launch} key={launch.id} />
                                ))}
                        </Tab.Pane>
                    ))}
                    
                    <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
    )
}

export default Launches
