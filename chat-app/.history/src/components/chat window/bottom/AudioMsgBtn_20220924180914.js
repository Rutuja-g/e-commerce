import React from 'react';
import { Icon, InputGroup } from 'rsuite';

const AudioMsgBtn = ({ afterUpload }) => {
  return (
    <InputGroup.Button onClick={onClick}>
      <Icon icon="attachment" />
    </InputGroup.Button>
  );
};

export default AudioMsgBtn;
