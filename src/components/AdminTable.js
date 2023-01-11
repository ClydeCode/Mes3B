import Table from 'react-bootstrap/Table';
import {useEffect, useState} from "react";
import EditAdminModal from "./EditAdminModal";
import DeleteAdminModal from "./DeleteAdminModal";
import axios, * as others from 'axios';

export default function AdminTable() {
    const [news, setNews] = useState([]);

    const fetchData = () => {
        return axios.get(process.env.REACT_APP_WEBAPI + "News")
            .then((response) => setNews(response.data));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="px-5 py-3">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map(newsItem => {
                        return <tr>
                            <td>{newsItem.id}</td>
                            <td>{newsItem.title}</td>
                            <td>{newsItem.description.substring(0, 200)}</td>
                            <td>
                                {<EditAdminModal item={newsItem}/>}
                                {<DeleteAdminModal item={newsItem}/>}
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}