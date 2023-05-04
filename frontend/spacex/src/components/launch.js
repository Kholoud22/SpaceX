import React, { useState, useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import {useParams} from 'react-router-dom';
import { get } from '../launch-apis'
import { dateTimeUtcConverter } from '../datetime-converter'
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom';

const Launch = () => {
    const [launch, setLaunch] = useState({});
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        async function fetechData(){
            var result = await get(id);
            if(!result || result.code) navigate('/not-found');
            else setLaunch(result);
        }
        fetechData();
      },[id]);

  return (
    <>
    <div>
      <button
        className='back-button'
        onClick={() => navigate(-1)}
        style={{ backgroundColor: "transparent", marginLeft: 25 }}
        >
        Back
      </button>
    </div>
    <Card style={{ width: '28rem', margin: '50px auto' }}>
      <Card.Img variant="top" src={launch.links?.patch?.large} />
      <Card.Body>
        <Card.Title>{launch.name}</Card.Title>
        <Card.Text>
          {launch.details}
        </Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item className='p-0 pb-2'><span><strong>Flight Number - </strong>{launch.flight_number}</span></ListGroup.Item>
        <ListGroup.Item className='p-0 pt-2'><span><strong>Date/Time - </strong>{dateTimeUtcConverter(launch.date_utc)}</span></ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
    
    <br/>
    {launch.links?.youtube_id && (
      <div className="player container">
      <YouTube className='m-auto' videoId={launch.links?.youtube_id} />
      </div>
    )}
    </>
  )
}
export default Launch
