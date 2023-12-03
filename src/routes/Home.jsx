import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imagen1 from '../assets/proy-1.webp';
import imagen2 from '../assets/proy-2.webp';
import imagen3 from '../assets/proy-3.webp';
import imagen4 from '../assets/proy-4.webp';
import imagen5 from '../assets/proy-5.webp';
import logo from '../assets/logo.png';

    export function Home() {
        const scrollContainer = React.useRef(null);
      
        const handleScroll = (event) => {
          const delta = Math.sign(event.deltaY);
          scrollContainer.current.scrollLeft += delta * 150;
        };
      
        const handleArrowClick = (direction) => {
          const delta = direction === 'left' ? -150 : 150;
          scrollContainer.current.scrollLeft += delta;
        };
      

  return (
    <>    
    <Container fluid>
        <ul className="col-md-12 d-flex justify-content-center align-items-stretch">
            <li><a href="#inicio">INICIO</a></li>
            <li><a href="#portafolio">PRESENTACIÓN</a></li>
            <li><a href="#proyecto1">LANDING</a></li>
            <li><a href="#proyecto2">CRUD</a></li>
            <li><a href="#proyecto3">API REST</a></li>
            <li><a href="#proyecto4">RESTAURANT APP</a></li>
            <li><a href="#proyecto5">ECOMMERCE</a></li>
            <li><a href="#contacto">CONTACTO</a></li>
        </ul>
        <Row>
            <Col md={12}  className="m-0" id="scroll-wrapper">
                {/* Paneles Deslizantes */}
                <div className="sliding-panels d-flex flex-row align-items-stretch" id="scroll-container"  ref={scrollContainer} onWheel={handleScroll}>

                    {/* Panel 1 BIENVENIDA */}
                    <Col md={12} className="panel-0 ml-13 me-5 h-100 " id="inicio">
                        <div className="row ">
                            <div className="col-md-4">
                                <img src={logo} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-md-8 p-5 d-flex flex-column justify-content-center">
                                <h1>Hola, me llamo<br />
                                    <span className="text-bold">Alexander</span>
                                </h1>
                                <h4 className="txt-white-1">Y soy <span className="bold2">Desarrollador Web Full Stack</span> </h4>
                                <p className="text-p">Exploro la creatividad a través del diseño y desarrollo web. Mi portafolio refleja pasión, innovación y soluciones digitales impactantes.</p>
                                <div className="">
                                    {/*<a href="#portafolio">
                                        <svg className="arrowGo" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z"/></svg>
  </a>*/}       
                                </div>                                 
                            </div>
                        </div>
                    </Col>

                    { /* Panel 2 PRESENTACIÓN */}
                    <Col md={12} className="panel-1 h-100 bg-1 " id="portafolio">
                        <div className="row">
                            <div className="col-md-12 p-5 text-start">
                                <h2 className="mt-5"><span className="text-bold">Mi Portafolio</span>
                                    <br/>Bootcamp UDD
                                </h2>
                                <p className="text-p">En el <span className="bold">Bootcamp</span>  de la <span className="bold">Udd</span> , adquirí habilidades clave en tecnologías líderes como <span className="bold">MongoDB</span> para bases de datos, <span className="bold">Node JS</span> para la creación de APIS, <span className="bold">ReactJS</span> para construcción de interfaces,<span className="bold">JavaScript</span>, <span className="bold">CSS</span> y <span className="bold">HTML5</span> para diseño web. Además, aprendi el desarrollo de <span className="bold">API REST</span>  utilizando JavaScript. Estas competencias sólidas me han preparado para abordar desafíos de desarrollo de manera integral y eficiente. </p> 							
                            </div>
                        </div>
                    </Col>     
                    
                    {/* PROYECTO 1 */}
                    <Col md={12} className="panel-2 h-100 " id="proyecto1">
                        <div className="row">
                            <div className="col g-0">
                                <img src={imagen1} className="img-fluid h-100" alt="..."/>
                            </div>
                            <div className="col-md-8 g-0 p-5  d-flex flex-column justify-content-center">
                                <span className="bold">Proyecto 1</span>
                                <h2>Landing</h2>                                    
                                <p className="text-p">Objetivo del proyecto poder realizar una UI con <span className="bold"> HTML</span> y <span className="bold">CSS</span> , en este proyecto se tomo como referente la marca de audio <span className="bold">Harmand Kardom.</span> </p>
                                <a className="btn-own" href="https://alexanderosses.github.io/LANDING-DE-NEGOCIO/" role="button" target="_blank" rel='noreferrer'>Ver proyecto</a>
                                <a className="btn-img" href="https://www.credly.com/badges/88197608-ee6c-4aef-817c-cf1e40ae2f8f/public_url" target="_blank" rel='noreferrer'>
                                    <img className="credly" src="https://alexanderosses.cl/img/INS-LANDING.webp" alt=""/>
                                </a>
                            </div>
                        </div>
                    </Col>

                  {/* PROYECTO 2 */}
                    <Col md={12} className="panel-2 h-100 " id="proyecto2" >
                        <div className="row">
                            <div className="col g-0">
                                <img src={imagen2} className="img-fluid h-100" alt="..."/>
                            </div>
                            <div className="col-md-8 g-0 p-5  d-flex flex-column justify-content-center">
                                <span className="bold">Proyecto 2</span>
                                <h2>CRUD</h2>                                    
                                <p className="text-p">En este proyecto se trabajo con <span className="bold">JS</span> para realizar un <span className="bold">CRUD</span> con <span className="bold">Local Storage</span> ,<span className="bold">HTML5</span>  y <span className="bold">CSS</span>.</p>
                                <a className="btn-own" href="https://alexanderosses.github.io/CRUD/" role="button" target="_blank" rel='noreferrer'>Ver proyecto</a>
                                <a className="btn-img" href="https://www.credly.com/badges/1fbebfc8-0fa8-48f0-b1cc-374e181c2857/public_url" target="_blank" rel='noreferrer'>
                                    <img className="credly" src="https://alexanderosses.cl/img/INS-CRUD.webp" alt=""/>
                                </a>
                            </div>
                        </div>
                    </Col>        
                    
                  {/* PROYECTO 3 */}
                    <Col md={12} className="panel-2 h-100 " id="proyecto3">
                        <div className="row">
                            <div className="col g-0">
                                <img src={imagen3} className="img-fluid h-100" alt="..."/>
                            </div>
                            <div className="col-md-8 g-0 p-5  d-flex flex-column justify-content-center">
                                <span className="bold">Proyecto 3</span>
                                <h2>API REST</h2>                                    
                                <p className="text-p">En este proyecto, establecimos una conexión con una <span className="bold">API REST</span> para extraer datos y los presentamos mediante una interfaz de usuario creada con <span className="bold">HTML5</span>, <span className="bold">JavaSCript</span> y <span className="bold">CSS</span> .</p>
                                <a className="btn-own" href="https://alexanderosses.github.io/TABLERO-DE-DATOS/" role="button" target="_blank" rel='noreferrer'>Ver proyecto</a>
                                <a className="btn-img" href="https://www.credly.com/badges/0d89b004-e000-4c61-95b3-4701ac1806c8/public_url" target="_blank" rel='noreferrer'>
                                    <img className="credly" src="https://alexanderosses.cl/img/INS-API.webp" alt=""/>
                                </a>
                            </div>
                        </div>
                    </Col>      

                  {/* PROYECTO 4 */}
                    <Col md={12} className="panel-2 h-100 " id="proyecto4" >
                        <div className="row">
                            <div className="col g-0">
                                <img src={imagen4} className="img-fluid h-100" alt="..."/>
                            </div>
                            <div className="col-md-8 g-0 p-5  d-flex flex-column justify-content-center">
                                <span className="bold">Proyecto 4</span>
                                <h2>Restaurant APP</h2>                                    
                                <p className="text-p">En este proyecto, se empleó <span className="bold">JavaScript</span> para la lógica, modularización mediante componentes con <span className="bold">ReactJS</span>, integración del framework <span className="bold">React Bootstrap</span>, manipulación de datos <span className="bold">JSON</span>, y diseño con <span className="bold">HTML</span>  y <span className="bold">CSS</span>.</p>
                                <a className="btn-own" href="https://alexanderosses.github.io/RESTAURANTE-APP/" role="button" target="_blank" rel='noreferrer'>Ver proyecto</a>
                                <a className="btn-img" href="https://www.credly.com/badges/a1de7a1e-e249-4a92-927e-72310fe0af37/public_url" target="_blank" rel='noreferrer'>
                                    <img className="credly" src="https://alexanderosses.cl/img/INS-REACT-JS.webp" alt=""/>
                                </a>
                            </div>
                        </div>
                    </Col>         
                    
                  {/* PROYECTO 5 */}
                    <Col md={12} className="panel-2 h-100 " id="proyecto5">
                        <div className="row">
                            <Col md={4} className="g-0">
                                <img src={imagen5} className="img-fluid h-100" alt="..."/>
                            </Col>
                            <Col md={8} className="g-0 p-5  d-flex flex-column justify-content-center">
                                <span className="bold">Proyecto 5</span>
                                <h2>Ecommerce</h2>                                    
                                <p className="text-p">En en el proyecto, se utilizaron tecnologías como <span className="bold">JavaScript</span>, <span className="bold">React JS</span>, <span className="bold">React Bootstrap</span>, <span className="bold">MongoDB</span>, Render y <span className="bold">Node JS</span> para el frontend y backend. Además, se integro <span className="bold">MercadoPago</span> y se utilizó <span className="bold">HTML</span> y <span className="bold">CSS</span> para la estructura y estilo.</p>
                                <a className="btn-own" href="https://alexanderosses.github.io/TIENDA-EN-LINEA/" role="button" target="_blank" rel='noreferrer'>Ver proyecto</a>
                                <a className="btn-img" href="https://www.credly.com/badges/a1de7a1e-e249-4a92-927e-72310fe0af37/public_url" target="_blank" rel='noreferrer'>
                                    <img className="credly" src="https://alexanderosses.cl/img/INS-REACT-JS.webp" alt=""/>
                                </a>
                            </Col>
                        </div>
                    </Col>                        

                  {/* Panel de Da* de Contacto */}
                    <Col md={12} className="panel-1 contact-panel bg-1 mr-13 p-5 " id="contacto">
                        <h2>Contacto</h2>
                        <p className="text-p">Hola! Conéctate conmigo en LinkedIn para discutir oportunidades profesionales o revisa mi trabajo en GitHub. ¡Espero tu mensaje en cualquiera de estas plataformas para colaboraciones o intercambiar ideas!.</p>
                        <div className="social-icons">
                            <p className="text-p">
                                <a className="icon-rrss" href="https://github.com/Alexanderosses" target="_blank" rel='noreferrer'><svg  className="icon-rrss" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg> GitHub</a>
                            </p>
                            <p className="text-p">
                                <a className="icon-rrss" href="https://www.linkedin.com/in/alexanderosses/" target="_blank" rel='noreferrer'><svg  className="icon-rrss" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg> LinkedIn</a>
                            </p>
                        </div>
                    </Col>

                </div>
            </Col>
            {/* Contenedor para los botones de flecha */}
            <div className="arrow-buttons-container">
                {/* Botón para mover a la izquierda */}
                <button className="arrow-button left" onClick={() => handleArrowClick('left')}>
                    <svg className='arrowGo' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                </button>
                
                {/* Botón para mover a la derecha */}
                <button className="arrow-button right" onClick={() => handleArrowClick('right')}>
                    <svg className='arrowGo' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
                </button>
            </div>
        </Row>
    </Container>
    </>
  )
}

