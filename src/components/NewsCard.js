import '../styles/newsCard.css';
import { MdOutlineUpdate } from "react-icons/md";

export default function NewsCard(props) {
    return (
        <li className='news-card'>
            <img src={props.imagePath} alt=''></img>
            <p>
                {props.description}
                {props.description.length > 75 && "[...]"}
            </p>
            <div className='news-card-info'>
                <div className='date'>
                    <MdOutlineUpdate />
                    {props.createdDate}
                </div>
            </div>
        </li>
    )
}