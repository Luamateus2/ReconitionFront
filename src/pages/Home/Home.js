import BoxRecognition from '../../components/BoxRecognition/BoxRecognition';
import Header from '../../components/Hearder/Header';
import './Home.css'
function Home(){
  return(
    <>
        <Header />
        <div className='main'>
            <h2 className='title-main'>SERVIÇOS DISPONÍVEIS</h2>
            <BoxRecognition />

        </div>
    </>
  )
};
export default Home;