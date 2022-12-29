import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function AdminTable() {
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <Button size="sm">Edit</Button>{' '}
                            <Button variant="danger" size="sm">Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}