import '../styles/newsCard.css';
import { MdOutlineUpdate } from "react-icons/md";

export default function NewsCard() {
    return (
        <li className='news-card'>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt=''></img>
            <p>
                Sukurtas naujas fotoaparatas. Kuris gali fotografuoti 4k raiska.
                Kuris gali fotografuoti 4k raiska.
                Kuris gali fotografuoti 4k raiska.
                Kuris gali fotografuoti 4k raiska.
                Kuris gali fotografuoti 4k raiska [...]
            </p>
            <div className='news-card-info'>
                <div className='date'>
                    <MdOutlineUpdate />    
                    2022-12-22
                </div>
            </div>
        </li>
    )
}