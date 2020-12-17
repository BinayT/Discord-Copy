import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from 'firebase';
import {
  AddCircleOutlineOutlined,
  CardGiftcardOutlined,
  EmojiEmotionsOutlined,
  GifOutlined,
} from '@material-ui/icons';

import './Chat.css';
import ChatMessages from './ChaMessages/ChatMessages';
import ChatHeader from './ChatHeader/ChatHeader';
import { selectUser } from '../../reducers/userReducer';
import { selectChannelId, selectChannelName } from '../../reducers/appReducer';
import db from '../../firebase';

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamps', 'desc')
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('channels').doc(channelId).collection('messages').add({
      message: input,
      user,
      timestamps: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className='chat'>
      <ChatHeader channelName={channelName} channelId={channelId} />
      <div className='chat__messages'>
        {messages.map((message) => (
          <ChatMessages />
        ))}
      </div>
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
    </div>
  );
}

export default Chat;
