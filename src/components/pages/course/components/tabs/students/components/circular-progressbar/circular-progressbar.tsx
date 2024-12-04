import {CircularProgressbar as CircularProgressbarLib} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export const CircularProgressbar = (props: any) => (
  <div className="w-20">
    <CircularProgressbarLib value={props.percentage} text={`${props.percentage}%`} />
  </div>
)
