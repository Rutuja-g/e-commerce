import React from 'react';
import { Button, Modal } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';
import ProfileAvatar from '../../ProfileAvatar';

const ProfileInfoBtnModel = ({ profile }) => {
  const { isOpen, close, open } = useModalState();
  const { name } = profile;
  const shortName = profile.name.split(' ')[0];

  return (
    <div>
      <Button>{shortName}</Button>
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>{shortName} profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <ProfileAvatar
            src={profile.avatar}
            name={profile.name}
            className="width-200 height-200 img-fullsize font-huge"
          />
          <h4>{name} </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button block onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProfileInfoBtnModel;
