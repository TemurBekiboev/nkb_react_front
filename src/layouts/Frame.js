import 'bootstrap/dist/css/bootstrap.css';
import '../assets/StyleFrame.css';
import LogoImage from '../images/logo.png';
import LogoName from '../images/logo-name.png';
import LogoVImage from '../images/logov.png';
import PhoneIcon from '../images/header-phone-ico.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons/faPhoneVolume";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";


function Frame(){
    return (
        <div className="container-fluid p-0">
            <div className="row header-main sticky-top">
                <div className="row row d-none d-md-flex d-lg-flex header-top">
                    <div className="d-none col-lg-2 col-md-2 d-md-flex d-lg-flex logo-frame align-self-center h-100" >
                       <div className="logo-inner-frame d-block align-self-center">
                        <img src={LogoImage} className="img-fluid logo-image"/>
                        <img src={LogoName} className="img-fluid logo-name"/>
                       </div>
                    </div>

                    <div className="d-none d-md-flex d-lg-flex align-self-center h-100 col-lg-10 col-md-10 info-frame">
       hello
                </div>

                <div className="row d-none d-md-flex d-lg-flex header-bottom">
                    hello
                </div>

            </div>
                <div className="row header-mobile-top m-0 p-0">
                    <div className="d-md-none d-lg-none d-xl-none col-sm d-sm-flex logo-mobile-frame align-self-center h-100" >
                        <div className="logo-inner-frame d-inline-block align-self-center">
                            <img src={LogoVImage} className="img-fluid logo-mobile-image" />
                            <a className='lang-switch ru'>Рус</a>
                            <a className='lang-switch kaz'>Қаз</a>
                        </div>
                        <div className="phone-inner-frame d-inline-block align-self-center">
                            <a className='phone-number '>+77001112255 </a>
                            <img className='phone-icon rounded' src={PhoneIcon} />
                            <a className='bars-icon'><FontAwesomeIcon icon={faBars} /></a>
                        </div>
                        <div className="toggle-icon d-inline-block align-self-center">

                        </div>
                    </div>


                </div>

        </div>
        </div>
    );
}

export default Frame;