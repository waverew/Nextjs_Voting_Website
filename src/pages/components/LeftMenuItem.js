
const LeftMenuItem = (props) => {
    return (
        <div className="LeftMenuItem" onClick={props.href}>
            <img src={props.src} alt={props.alt} className='img'></img>
            <p>{props.text}</p>
        </div>
    );
}
export default LeftMenuItem;