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
    <div className="card">
      <img src={robot.imagen} className="card-img-top" alt={robot.nombre} />
      <div className="card-body">
        <h5 className="card-title">{robot.nombre}</h5>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <th>{intl.formatMessage({ id: 'table.model' })}:</th>
              <td>{robot.modelo}</td>
            </tr>
            <tr>
              <th>{intl.formatMessage({ id: 'table.manufacturer' })}:</th>
              <td>{robot.empresaFabricante}</td>
            </tr>
            <tr>
              <th>{intl.formatMessage({ id: 'detail.manufacturingYear' })}:</th>
              <td>{robot.añoFabricacion}</td>
            </tr>
            <tr>
              <th>{intl.formatMessage({ id: 'detail.processingPower' })}:</th>
              <td>{robot.capacidadProcesamiento}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-3">
          <h6>{intl.formatMessage({ id: 'detail.personality' })}:</h6>
          <p className="card-text">{robot.humor}</p>
        </div>
      </div>
    </div>
  );
}

export default RobotDetail;
