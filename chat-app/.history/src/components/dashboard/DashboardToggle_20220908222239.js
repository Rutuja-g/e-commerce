import React from 'react';
import { Button, Icon, Drawer } from 'rsuite';
import { useModalState } from '../../misc/custom-hooks';
import Dashboard from '.';

function DashboardToggle() {
  const { isOpen, close, open } = useModalState();
  return (
    <>
      <Drawer>
        <Button block color="blue" onClick={open}>
          <Icon icon="dashboard" /> Dashboard
        </Button>
        <Drawer show={isOpen} onHide={close} placement="left" />
        <Dashboard />
      </Drawer>
    </>
  );
}

export default DashboardToggle;
