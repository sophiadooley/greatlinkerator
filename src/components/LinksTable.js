import React from "react";
import {Container, Table} from 'react-bootstrap';

// dummy data
const dummyData = [
    {
        website: "google.com",
        comment: "a search engine",
        clicks: 240
    },
    {
        website: "facebook.com",
        comment: "a place to fight about politics",
        clicks: 199
    },
    {
        website: "fullstackacademy.com",
        comment: "learn to code",
        clicks: 12
    }
]


function LinksTable() {
    
    return (
        <Container fluid="sm">
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Website</th>
                        <th>Comment</th>
                        <th># of Clicks</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyData.map((site, i) => {
                        return (
                            <tr key={i}>
                                <td><a href={`https://www.${site.website}`} target="_blank" rel="noreferrer noopener">{site.website}</a></td>
                                <td>{site.comment}</td>
                                <td>{site.clicks}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default LinksTable;