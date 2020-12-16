import React from 'react';
import {
  AddCircleOutlineOutlined,
  CardGiftcardOutlined,
  EmojiEmotionsOutlined,
  GifOutlined,
} from '@material-ui/icons';
import './ChatInput.css';

function ChatInput() {
  return (
    <div className='chat__input'>
      <AddCircleOutlineOutlined fontSize='large' />
      <form>
        <input placeholder={`Message #Youtube`} />
        <button type='submit'>Send Message</button>
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
