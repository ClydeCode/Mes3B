import '../styles/newsCard.css';
import { MdOutlineUpdate } from "react-icons/md";

export default function NewsCard(props) {
    const showShortVersion = (prop, number) => {
        return prop.substring(0, number)
    }

    return (
        <li className='news-card'>
            <img src={props.imagePath} alt=''></img>
            <div className='news-card-body'>
                <p>
                    <h5>{props.title}</h5>
                    {props.description.length < 100
                        ? props.description
                        : showShortVersion(props.description, 165) + "..."
                    }
                </p>
                <div className='news-card-info'>
                    <div className='date'>
                        <MdOutlineUpdate />
                        {showShortVersion(props.createdDate, 10)}
                    </div>
                </div>
            </div>
        </li>
    )
}