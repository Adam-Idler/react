import HeaderBlock from './components/Header';
import LayoutBlock from './components/Layout';
import FooterBlock from './components/Footer';
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';

const App = () => {
  return (
    <>
      <HeaderBlock
        title="React Marathon"
        descr="Zar Zaharov"
      />
      <LayoutBlock 
        title="Layout image"
        descr="Lorem ipsum dolor sit amet"
        id="first-layout"
        urlBg={bg1}
      />
      <LayoutBlock 
        title="Layout color"
        descr="Lorem ipsum dolor sit amet"
        id="second-layout"
        colorBg='#999'
      />
      <LayoutBlock 
        title="Layout image"
        descr="Lorem ipsum dolor sit amet"
        id="third-layout"
        urlBg={bg2}
      />
      <FooterBlock />
    </>
  );
}

export default App;