import '../styles/newsCard.css';
import { MdOutlineUpdate } from "react-icons/md";

export default function NewsCard(props) {
    const showShortDate = () => {
        const date = props.createdDate;
        return date.substring(0, date.length - 9)
    }

    return (
        <li className='news-card'>
            <img src={props.imagePath} alt=''></img>
            <div className='news-card-body'>
                <p>
                    {props.description}
                    {props.description.length > 75 && "[...]"}
                </p>
                <div className='news-card-info'>
                    <div className='date'>
                        <MdOutlineUpdate />
                        {showShortDate()}
                    </div>
                </div>
            </div>
        </li>
    )
}