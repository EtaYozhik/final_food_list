
import square from './square.jpeg'
import TIN from './TIN.jpg'
import FRESH from './FRESH.jpg'
import FROZEN from './FROZEN.jpg'
import COOKED from './COOKED.jpg'
import Images from './Images'
const cars =['TIN','FRESH','FROZEN','COOKED'];
const Content = () => {

    return(
        <div class="grid-container">
  <div class="grid-item"><img src={TIN} className="Thumbnail"  /></div>
  <div class="grid-item"><img src={FRESH} className="Thumbnail"  /></div>
  <div class="grid-item"><img src={FROZEN} className="Thumbnail"  /></div>
  <div class="grid-item"><img src={FRESH} className="Thumbnail"  /></div>
  <div class="grid-item"><img src={COOKED} className="Thumbnail"  /></div>
  <div class="grid-item"><img src={COOKED} className="Thumbnail"  /></div>
  <div class="grid-item"><img src={FROZEN} className="Thumbnail"  /></div>
  <div class="grid-item"><img src={TIN} className="Thumbnail"  /></div>
  
</div>
    )

    
}

export default Content
