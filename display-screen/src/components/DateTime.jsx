import './DateTime.css'
import { getDateAndTime } from "../utils/getDateAndTime"

const DateTime = ({ createdAt }) => {
    const { date, time } = getDateAndTime(createdAt)

    return (
        <div className='date-container'>
            <div>{date}</div>
            <div>{time}</div>
        </div>
    )
}

export default DateTime