import'./BoxRecognition.css';
import face from '../../assets/img/foto.png';

function BoxRecognition(){
    return(
        <div className='container'>
            <div className="box-recognition">
                <div className="box">
                    <img className="box-imagem" src={face} />
                    <h2 className='box-title'>RECONHECIMENTO DE IMAGEM</h2>
                </div>
                <div className="box">
                   <img className="box-imagem" src={face} />  
                    <h2 className='box-title'>RECONHECIMENTO  FACIAL</h2>
                </div>
                <div className="box">
                    <img className="box-imagem" src={face} />
                    <h2 className='box-title'>RECONHECIMENTO DE PLACA</h2>
                </div>
                <div className="box">
                    <img className="box-imagem" src={face} />
                    <h2 className='box-title'>EM BREVE</h2>
                </div>

            </div>
        </div>
        
    )
};
export default BoxRecognition;