import moment from 'moment'

import './../styles/heading.css'

function Heading(props) {
    return (
        <div className="heading">
            <div className="page">
                {props.page}
            </div>

            <div className="today">
                Today, {moment(new Date()).format('DD MMM YYYY')}
            </div>
        </div>
    )
}

export default Heading