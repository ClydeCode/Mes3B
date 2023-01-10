import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {useEffect, useState} from "react";
import EditAdminModal from "./EditAdminModal";

export default function AdminTable() {
    const [news, setNews] = useState([]);

    const fetchData = () => {
        return fetch(process.env.REACT_APP_WEBAPI + "news")
            .then((response) => response.json())
            .then((data) => setNews(data));
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
                                {<EditAdminModal data={newsItem}/>}
                                <Button variant="danger" size="sm">Delete</Button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}