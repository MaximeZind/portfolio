import classes from '../styles/SkillsCard.module.css';


function SkillsCard({ name, img, coordinates, animationDelay, isActive }) {

    const xCoordinates = coordinates ? coordinates.x : 0;
    const yCoordinates = coordinates ? coordinates.y : 0;
    const minRotate = -12;
    const maxRotate = 12;
    const rotate = Math.random() * (maxRotate - minRotate) + minRotate;
    return (
        <div className={`${classes.card_wrapper_position} ${classes.floating}`}
            style={{
                transform: `translate(${xCoordinates}px, ${yCoordinates}px)`,
            }}>
            <div className={coordinates && classes.card_wrapper_floating}
            style={{
                animationDelay: `${animationDelay}s`
            }}>
                <div className={classes.card_wrapper_rotate}
                    style={{
                        transform: `rotate(${rotate}deg)`,
                    }}>
                    <div className={isActive ? `${classes.skills_card} ${classes.active}` : `${classes.skills_card}`}>
                        <img src={img} alt={name}></img>
                        <p>{name}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SkillsCard;