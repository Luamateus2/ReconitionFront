import'./BoxRecognition.css';
import idRosto from '../../assets/img/id-do-rosto.png';
import face from '../../assets/img/reconhecimento-de-imagem.png';
import placa from '../../assets/img/camera-rapida.png';
import sirene from '../../assets/img/sirene.png';
import { Link } from 'react-router-dom';
function BoxRecognition(){
    return(
        <div className='container'>
            <div className="box-recognition">
                <div className="box">
                   <img className="box-imagem" src={idRosto} />  
                    <h2 className='box-title'>RECONHECIMENTO  FACIAL</h2>
                </div>
                <div className="box"> 
                   <img className="box-imagem" src={face} alt="Reconhecimento de Imagem" />
                   <Link to="/recognition">                  
                      <h2 className="box-title">RECONHECIMENTO DE IMAGEM</h2> 
                   </Link>
                </div>
                <div className="box">
                    <img className="box-imagem" src={placa} />
                    <h2 className='box-title'>RECONHECIMENTO DE PLACA</h2>
                </div>
                <div className="box">
                    <img className="box-imagem" src={sirene} />
                    <h2 className='box-title'>EM BREVE NOVAS FUNCIONALIDADES</h2>
                </div>

            </div>
        </div>
        
    )
};
export default BoxRecognition;