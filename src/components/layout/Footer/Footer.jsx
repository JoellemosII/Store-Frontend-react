import"../Footer/footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
return (
    <>
    <div className="footer">
        <div className="div-a">
            <h2>Sobre la Empresa</h2>
            <Link to="/SobreNosotros">Sobre Nosotros</Link>
            <Link>Terminos Y Condiciones</Link>
            <Link>Politica de Privacidad</Link>
        </div>
        <div className="div-b">
            <h2>Ayuda</h2>
            <Link>Costos de envíos</Link>
            <Link>Medios de pago</Link>
            <Link>¿Cual es mi talle?</Link>
        </div>
        <div className="div-c">
            <h2>Contactos</h2>
            <Link>Por Email</Link>
            <Link>Por Whatsapp</Link>
        </div>
        <div className="div-d">
            <h2>Siguenos en </h2>
            <img className="iconos"  src="" alt="" />
            <img className="iconos"  src="" alt="" />
            <img className="iconos"  src="" alt="" />
            <img className="iconos"  src="" alt="" />
            <p>@StoreFrontend</p>
        </div>
    </div>
    </>

);
};
