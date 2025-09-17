import BackgroundDesign from '../components/backgroundDesign'

const BackgroundAnimation = ({children}) => {
  return ( 
    <div style={{ position: 'relative', zIndex: 1 }}>
      <BackgroundDesign />
      {children} 
    </div>
  );
}
 
export default BackgroundAnimation;