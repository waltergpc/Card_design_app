import { Link } from 'react-router-dom';
import { TemplateCard } from '../components/TemplateCard';
// import styled from 'styled-components';
import logo from '../assets/images/logo_printing.png';
import 'bulma/css/bulma.css'

export const TemplateSelect = () => {

    let templates = [{
        "id": 1,
        "title": "Template a"
      }, {
        "id": 2,
        "title": "Template b"
      }, {
        "id": 3,
        "title": "Template c"
      }];

    return <>

        <section className="hero is-medium is-bold">
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="../">
                                <img src={logo} alt="logo"/>
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <div className="is-right">
                                    <span className="navbar-item">
                                        <span className="button is-outlined">
                                            {/* <span class="icon">
                                                <i class="fa fa-github"></i>
                                            </span> */}
                                            <span title="Hello from the other side"><Link to='editor'>Ir al editor</Link></span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="hero-body has-text-centered">
                <div className="container has-text-centered">
                    <h1 className="title">
                      Tu propia tarjeta de presentación diseñada a tu gusto
                    </h1>
                    <h3 className="subtitle">
                      Dale el toque propio que buscabas a la presentación de tu negocio
                    </h3>
                </div>
            </div>
        </section>
        <div className="box cta" style={{backgroundColor: "#F49441"}}>
            <p className="has-text-centered">
                <span className="tag is-primary">Nuevo</span> O elige alguna de nuestras plantillas
            </p>
        </div>

        <section className="container">
        <div className="columns features">
            { templates.map( (template) =>
                
                <div className="column is-4" key={template.id}>
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            {/* <i class="fa fa-apple"></i> */}
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4> Leo integer malesuada nunc vel risus. </h4>
                                <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <TemplateCard key={template.id} title={template.title}/>
                            </div>
                        </div>
                    </div>
                </div> 
                      
        )}
        </div> 
            <div className="intro column is-8 is-offset-2">
                <h2 className="title">¡Prueba nuestro editor o alguna de nuestras plantillas!</h2><br/>
                <p className="subtitle">¡Herramienta perfecta para una tarjeta de presentación profesional sin ser diseñador!</p>
            </div>
            <div className="columns features">
            { templates.map( template =>
                
                <div className="column is-4" key={template.id}>
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            {/* <i className="fa fa-apple"></i> */}
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4> Leo integer malesuada nunc vel risus. </h4>
                                <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <TemplateCard key={template.id} title={template.title}/>
                            </div>
                        </div>
                    </div>
                </div> 
                      
        )}
        </div> 
        <footer className="footer">
            <div className="container">
                <div className="columns">
                    <div className="column is-3 is-offset-2">
                        <h2><strong>Category</strong></h2>
                        <ul>
                            {/* <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Vestibulum errato isse</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Aisia caisia</a></li>
                            <li><a href="#">Murphy's law</a></li>
                            <li><a href="#">Flimsy Lavenrock</a></li>
                            <li><a href="#">Maven Mousie Lavender</a></li> */}
                        </ul>
                    </div>
                    <div className="column is-3">
                        <h2><strong>Category</strong></h2>
                        <ul>
                            {/* <li><a href="#">Labore et dolore magna aliqua</a></li>
                            <li><a href="#">Kanban airis sum eschelor</a></li>
                            <li><a href="#">Modular modern free</a></li>
                            <li><a href="#">The king of clubs</a></li>
                            <li><a href="#">The Discovery Dissipation</a></li>
                            <li><a href="#">Course Correction</a></li>
                            <li><a href="#">Better Angels</a></li> */}
                        </ul>
                    </div>
                    <div className="column is-4">
                        <h2><strong>Category</strong></h2>
                        <ul>
                            {/* <li><a href="#">Objects in space</a></li>
                            <li><a href="#">Playing cards with coyote</a></li>
                            <li><a href="#">Goodbye Yellow Brick Road</a></li>
                            <li><a href="#">The Garden of Forking Paths</a></li>
                            <li><a href="#">Future Shock</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <script src="../js/bulma.js"></script>
        </footer>
        </section>

    
    </>
}

export default TemplateSelect

// const ListParagraph = styled.p`
//     border-radius: 5px;
//     box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
//     padding: 30px;
//     margin: 0 auto 20px auto;
//     border-top: 3px solid hsl(229, 6%, 66%);
//     display: flex;
//     flex-flow: row wrap;
//     align-items: flex-end;
//     width: 75%;
// `