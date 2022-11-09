import asoftodayScreenshot from 'images/screenshots/asoftoday.png'
import calculatorScreenshot from 'images/screenshots/calculator.png'
import chatScreenshot from 'images/screenshots/chat.png'
import clearinghouseScreenshot from 'images/screenshots/clearinghouse.png'
import colorconversionScreenshot from 'images/screenshots/colorconversion.png'
import colorGridScreenshot from 'images/screenshots/colorgrid.png'
import distillrScreenshot from 'images/screenshots/distillr.png'
import elderdataScreenshot from 'images/screenshots/elderdata.png'
import expensifyScreenshot from 'images/screenshots/expensify.jpg'
import hairbyfranciscoScreenshot from 'images/screenshots/hairbyfrancisco.jpg'
import kokolunchboxScreenshot from 'images/screenshots/kokolunchbox.png'
import musicmasterScreenshot from 'images/screenshots/musicmaster.png'
import quickcopyScreenshot from 'images/screenshots/quickcopy.png'
import saccScreenshot from 'images/screenshots/sacc.png'
import seasonalScreenshot from 'images/screenshots/seasonal.png'
import shimbergScreenshot from 'images/screenshots/shimberg.png'
import tictactoeScreenshot from 'images/screenshots/tictactoe.png'
import yelpcampScreenshot from 'images/screenshots/yelpcamp.png'
import Image, {StaticImageData} from 'next/image'

export interface IStaticImageProps {
  title: string
}

const StaticImage = (src: StaticImageData) => {
  const curried: React.FC<IStaticImageProps> = ({title}) => (
    <Image
      src={src}
      alt={`${title} screenshot`}
      priority
      quality={100}
      placeholder="blur"
    />
  )
  return curried
}

export const AsOfToday = StaticImage(asoftodayScreenshot)
export const Calculator = StaticImage(calculatorScreenshot)
export const Chat = StaticImage(chatScreenshot)
export const Clearinghouse = StaticImage(clearinghouseScreenshot)
export const ColorConversion = StaticImage(colorconversionScreenshot)
export const ColorGrid = StaticImage(colorGridScreenshot)
export const Distillr = StaticImage(distillrScreenshot)
export const Elderdata = StaticImage(elderdataScreenshot)
export const Expensify = StaticImage(expensifyScreenshot)
export const HairByFrancisco = StaticImage(hairbyfranciscoScreenshot)
export const KokoLunchbox = StaticImage(kokolunchboxScreenshot)
export const Musicmaster = StaticImage(musicmasterScreenshot)
export const QuickCopy = StaticImage(quickcopyScreenshot)
export const SACC = StaticImage(saccScreenshot)
export const Seasonal = StaticImage(seasonalScreenshot)
export const Shimberg = StaticImage(shimbergScreenshot)
export const TicTacToe = StaticImage(tictactoeScreenshot)
export const YelpCamp = StaticImage(yelpcampScreenshot)
