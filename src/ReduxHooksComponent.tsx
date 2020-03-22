import React, { ChangeEvent, useState } from 'react';
import { Form, Input, Card, Button, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState, RootDispatcher } from './store/root-reducer';

interface Props {}

interface StateProps {
  name: string;
  address: string;
}

const ReduxHooksComponent: React.FC<Props> = () => {
  // Local state
  const [age, setAge] = useState<string>();

  // Redux state
  const { name, address } = useSelector<InitialState, StateProps>(
    (state: InitialState) => {
      return {
        name: state.name,
        address: state.address,
      };
    }
  );

  const dispatch = useDispatch();
  const rootDispatcher = new RootDispatcher(dispatch);

  return (
    <Row>
      <Col xs={24} lg={12}>
        <Card title="Write to Redux">
          <Form layout="inline">
            <Form.Item label="Name">
              <Input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  rootDispatcher.updateName(e.target.value);
                }}
              />
              <Button onClick={rootDispatcher.deleteName}>Delete name</Button>
            </Form.Item>
            <Form.Item label="Address">
              <Input
                type="text"
                placeholder="address"
                value={address}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  rootDispatcher.updateAddress(e.target.value);
                }}
              />
              <Button onClick={rootDispatcher.deleteAddress}>
                Delete address
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
      <Col xs={24} lg={12}>
        <Card title="Preview Redux">
          <pre>
            {JSON.stringify({
              name,
              address,
            })}
          </pre>
        </Card>
      </Col>
      <Col xs={24} lg={12}>
        <Card title="Write to local state">
          <Form layout="inline">
            <Form.Item label="Age">
              <Input
                type="text"
                placeholder="age"
                value={age}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setAge(e.target.value);
                }}
              />
              <Button onClick={() => setAge('')}>Delete age</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
      <Col xs={24} lg={12}>
        <Card title="Preview local state">
          <pre>
            {JSON.stringify({
              age,
            })}
          </pre>
        </Card>
      </Col>
    </Row>
  );
};

export default ReduxHooksComponent;
