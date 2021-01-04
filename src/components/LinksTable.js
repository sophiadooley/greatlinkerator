import React from "react";
import { Container, Table } from "react-bootstrap";


function LinksTable({storedLinks, setStoredLinks}) {
    console.log(storedLinks);

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
          {storedLinks.map((site, i) => {
              console.log(site);
            return (
              <tr key={i}>
                <td>
                  <a
                    href={toString(site.link)}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {site.link}
                  </a>
                </td>
                <td>{site.comment}</td>
                <td>{site.clickcount}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default LinksTable;
