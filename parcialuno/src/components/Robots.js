import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import RobotDetail from './RobotDetail';

function Robots() {
  const intl = useIntl();
  const [robots, setRobots] = useState([]);
  const [error, setError] = useState(null);
  const [selectedRobot, setSelectedRobot] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/robots')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch robots');
        }
        return response.json();
      })
      .then(data => {
        setRobots(data);
      })
      .catch(error => {
        setError(error.message);
        console.error('Error fetching robots:', error);
      });
  }, []);

  const handleRobotClick = (robotId) => {
    setLoading(true);
    fetch(`http://localhost:3001/robots/${robotId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch robot details');
        }
        return response.json();
      })
      .then(data => {
        setSelectedRobot(data);
      })
      .catch(error => {
        console.error('Error fetching robot details:', error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>{intl.formatMessage({ id: 'table.name' })}</th>
                <th>{intl.formatMessage({ id: 'table.model' })}</th>
                <th>{intl.formatMessage({ id: 'table.manufacturer' })}</th>
              </tr>
            </thead>
            <tbody>
              {robots.map(robot => (
                <tr 
                  key={robot.id} 
                  onClick={() => handleRobotClick(robot.id)}
                  style={{ cursor: 'pointer' }}
                  className={selectedRobot?.id === robot.id ? 'table-active' : ''}
                >
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-6">
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <RobotDetail robot={selectedRobot} />
        )}
      </div>
    </div>
  );
}

export default Robots;
