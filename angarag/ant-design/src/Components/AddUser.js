import React from "react";
import { Button, Row, Col } from "antd";

function Header() {
  return (
    <Row align="middle" justify="space-around">
      <Col span={12}>
        <h1>
          <b>User List</b>
        </h1>{" "}
      </Col>
      <Col span={6}>
        <Button block>Add User </Button>
      </Col>
    </Row>
  );
}

export default Header;
