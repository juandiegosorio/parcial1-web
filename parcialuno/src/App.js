import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import Robots from './components/Robots';
import './App.css';
import { Row, Col } from 'react-bootstrap';
import Header from './components/Header';

function App() {
  const intl = useIntl();
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json().then((data) => ({ status: response.status, body: data })))
      .then(({ status, body }) => {
        if (status === 200 && body.status === 'success') {
          setIsAuthenticated(true);
        } else {
          setError(body.message);
        }
      })
      .catch(() => {
        setError('Ocurrió un error al intentar iniciar sesión.');
      });
  };

  return (
    <div className="container mt-5">
      <Header />
      {isAuthenticated ? (
        <Robots />
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card login-container">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">
                  {intl.formatMessage({ id: 'app.login' })}
                </h2>

                {/* Mensaje de error */}
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="login" className="form-label">
                      {intl.formatMessage({ id: 'app.username' })}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="login"
                      name="login"
                      value={formData.login}
                      onChange={handleChange}
                      required
                      placeholder={intl.formatMessage({ id: 'app.username' })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      {intl.formatMessage({ id: 'app.password' })}
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      placeholder={intl.formatMessage({ id: 'app.password' })}
                    />
                  </div>
                  <Row>
                    <Col>
                      <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#003B93' }}>
                        {intl.formatMessage({ id: 'app.signin' })}
                      </button>
                    </Col>
                    <Col>
                      <button type="button" className="btn btn-danger w-100">
                        {intl.formatMessage({ id: 'app.cancel' })}
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
