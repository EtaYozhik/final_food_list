import cars from './Content.js'
import TIN from './TIN.jpg'
import FRESH from './FRESH.jpg'
import FROZEN from './FROZEN.jpg'
import COOKED from './COOKED.jpg'
const Images = (i) => {
    

    if (cars[i]=='TIN') {
        return(
            <div class="grid-item"><img src={TIN} className="Thumbnail"  /></div>
        )
    }
    if (cars[i]=='FRESH') {
        return(
            <div class="grid-item"><img src={FRESH} className="Thumbnail"  /></div>
        )
    }
    if (cars[i]=='FROZEN') {
        return(
            <div class="grid-item"><img src={FROZEN} className="Thumbnail"  /></div>
        )
    }
    if (cars[i]=='COOKED') {
        return(
            <div class="grid-item"><img src={COOKED} className="Thumbnail"  /></div>
        )
    }
}

export default Images