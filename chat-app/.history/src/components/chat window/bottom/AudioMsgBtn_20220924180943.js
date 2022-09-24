import React from 'react';
import { Icon, InputGroup } from 'rsuite';
import { ReactMic } from 'react-mic';

const AudioMsgBtn = ({ afterUpload }) => {
  return (
    <InputGroup.Button onClick={onClick}>
      <Icon icon="microphone" />
    </InputGroup.Button>
  );
};

export default AudioMsgBtn;
