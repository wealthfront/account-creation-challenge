import { Button } from 'app/frontend/reusable-components/button/button';
import { Card } from 'app/frontend/reusable-components/card/card';
import { FlowLayout } from 'app/frontend/reusable-components/flow-layout/flow-layout';
import { Input } from 'app/frontend/reusable-components/input/input';
import React, { useState } from 'react';

export const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    validateForm();
    console.log(formData);
  };

  const disableSubmit = !username || !password;
  return (
    <FlowLayout showLogoutButton={false}>
      <Card title={'Create New Account'}>
        <form onSubmit={handleSubmit}>
          <Input label="Username" onChange={(value) => setUsername(value)} />
          <Input label="Password" onChange={(value) => setPassword(value)} />
          <Button type="submit" disabled={disableSubmit}>
            Create Account
          </Button>
        </form>
      </Card>
    </FlowLayout>
  );
};
