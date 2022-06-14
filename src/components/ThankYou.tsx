import Row from './Row'
import SvgThankYou from '../assets/illustration-thank-you.svg'
import { styles } from '../colors'

interface ThankYouProps {
  value: number | null
  maxValue?: number
}

const ThankYou = ({ value, maxValue = 5 }: ThankYouProps) => {
  return (
    <div style={{margin: '2em 0'}}>
      <Row style={{ justifyContent: 'center' }}>
        <img src={SvgThankYou} />
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <div className='voteDisclaimer'>
          You selected {value} out of {maxValue}
        </div>
      </Row>
      <Row style={{ justifyContent: 'center' , alignContent: 'center'}}>
        <h1>Thank you!</h1>
      </Row>
      <Row>
        <p
          className='paragraph'
          style={{ ...styles.paragraph, textAlign: 'center'  }}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </Row>
    </div>
  )
}

export default ThankYou
