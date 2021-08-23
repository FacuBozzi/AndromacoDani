import './App.css';
//components
import  SvgTimeline from './components/Timeline.js'
import Points from './components/Points.js'
import Hito from './components/Hito.js'
import Side from './components/SideBar.js'
//assets
import logoMain from  './assets/img/logo_main.png'
import logoRight from  './assets/img/logo_2.png'
import mouse from './assets/img/mouse.png'
//data
import hitosData from './hitos.js'

//scroll
import easyScroll from 'easy-scroll';

function App() {

  const scrollUp = ev => {
    if (ev.wheelDelta) {
      return ev.wheelDelta > 0;
    }
    return ev.deltaY < 0;
  }

  const move = (wheel) => ev =>{

    let dir = ""

    if(ev.buttons === 1 && !wheel){
      dir = -ev.movementX > 0 ? "right" : "left"
    }else{
      dir = scrollUp(ev) ? "left" : "right"
    }

    if(ev.buttons === 1 || wheel){
      easyScroll({
        scrollableDomEle: window,
        direction: dir,
        duration: 1000,
        easingPreset: 'easeInOutQuad',
        scrollAmount:500
      });
    }

  }


  return (
    <div 
    className="App"
    onMouseMove={move(false)}
    onWheel={move(true)}
    >
      <header>
        <img id='logoMain' src={logoMain} alt="Logo de Andrómaco"/>
        <div id='title'>
          Descubrí <strong>nuestra historia</strong>
        </div>
        <img id='logoRight' src={logoRight} alt="Logo alternativo de Andrómaco"/>
      </header>
      <main>
      {/*<Points />*/}
        <Side />
        <div id="timelineContainer">
          <div id="hitos">
            {hitosData.map(({pos,src,year,text,direction},idx) => {
              return <Hito key={idx} pos={pos} src={src} year={year} text={text} direction={direction} />
            })}
          </div>
          <SvgTimeline/>
          <div id="grid"></div>
        </div>
        <img id="mouse" src={mouse} alt="Imagen de mouse para indicar navegación horizontal" />
      </main>
    </div>
  );
}

export default App;
