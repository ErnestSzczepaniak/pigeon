
import './ButtonChoose.css'

export default function ButtonChoose(props) {
    return (
        <div className="button-choose" onClick={props.onClick}>
            {props.name}
        </div>
    )
}