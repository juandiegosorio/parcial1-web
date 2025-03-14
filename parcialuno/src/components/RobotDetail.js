import React from 'react';
import { useIntl } from 'react-intl';

function RobotDetail({ robot }) {
  const intl = useIntl();

  if (!robot) {
    return (
      <div className="card">
        <div className="card-body">
          <p className="text-muted">
            {intl.formatMessage({ id: 'detail.selectRobot' })}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card" style={{ backgroundColor: '#D9D9D9'}}>
      <img src={robot.imagen} className="card-img-top" alt={robot.nombre} />
      <div className="card-body" style={{ backgroundColor: '#D9D9D9'}}>
        <h5 className="card-title">{robot.nombre}</h5>
        <table className="table table-borderless" style={{ backgroundColor: '#D9D9D9'}}>
          <tbody>
            <tr>
              <th style={{ backgroundColor: '#D9D9D9'}}>{intl.formatMessage({ id: 'table.model' })}:</th>
              <td style={{ backgroundColor: '#D9D9D9'}}>{robot.modelo}</td>
            </tr>
            <tr>
              <th style={{ backgroundColor: '#D9D9D9'}}>{intl.formatMessage({ id: 'table.manufacturer' })}:</th>
              <td style={{ backgroundColor: '#D9D9D9'}}>{robot.empresaFabricante}</td>
            </tr>
            <tr>
              <th style={{ backgroundColor: '#D9D9D9'}}>{intl.formatMessage({ id: 'detail.manufacturingYear' })}:</th>
              <td style={{ backgroundColor: '#D9D9D9'}}>{robot.añoFabricacion}</td>
            </tr>
            <tr>
              <th style={{ backgroundColor: '#D9D9D9'}}>{intl.formatMessage({ id: 'detail.processingPower' })}:</th>
              <td style={{ backgroundColor: '#D9D9D9'}}>{robot.capacidadProcesamiento}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-3" style={{ backgroundColor: '#D9D9D9'}}>
          <h6>{intl.formatMessage({ id: 'detail.personality' })}:</h6>
          <p className="card-text">{robot.humor}</p>
        </div>
      </div>
    </div>
  );
}

export default RobotDetail;
