import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navegacion extends Component {
    state = {}
    render() { 
        return ( 
          <div className="container-fluid" >
  <div className="row">
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Navegación</span>
          <a className="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul className="nav flex-column">
          
          <li className="nav-item">
            <Link className="nav-link" to="/inicio">
              <span data-feather="file"></span>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Emails">
            <span>
              Emails
              </span>
            </Link>
            <Link className="nav-link" to="/Pedidos">
            <span>
              Pedidos
              </span>
            </Link>
            <Link className="nav-link" to="/Productos">
            <span>
              Productos
              </span>
            </Link>
            <Link className="nav-link" to="/Cliente">
            <span>
              Clientes
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>
         );
    }
}
 
export default Navegacion ;