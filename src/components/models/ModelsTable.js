import React from "react";
import { Table } from "react-bootstrap";

export const ModelsTable = ({ data }) => {
    // console.log(data);
    const columns = data[0] && Object.keys(data[0]);
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                {data[0] && (
                    <tr>
                        <th>MAC address</th>
                        <th>IP</th>
                        <th>Model</th>
                        <th>Version</th>
                    </tr>
                )}
            </thead>
            <tbody>
                {data[0] &&
                    data.map((row, i) => (
                        <tr key={i}>
                            {columns.map((column) => (
                                <td key={i + column}>{row[column]}</td>
                            ))}
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
};
