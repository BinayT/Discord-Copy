import React, { useState } from 'react';
import {
  AddCircleOutlineOutlined,
  CardGiftcardOutlined,
  EmojiEmotionsOutlined,
  GifOutlined,
} from '@material-ui/icons';
import './ChatInput.css';

function ChatInput({ channelName, channelId, input, sendMessage, setInput }) {
  return (
    <div className='chat__input'>
      <AddCircleOutlineOutlined fontSize='large' />
      <form>
        <input
          placeholder={`Message #${channelName}`}
          disable={!channelId}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          type='submit'
          disable={!channelId}
          className='chat__inputButton'
          onClick={sendMessage}
        >
          Send Message
        </button>
      </form>

      <div className='chat__inputIcons'>
        <CardGiftcardOutlined fontSize='large' />
        <GifOutlined fontSize='large' />
        <EmojiEmotionsOutlined fontSize='large' />
      </div>
    </div>
  );
}

export default ChatInput;
