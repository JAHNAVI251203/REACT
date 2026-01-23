import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';

export function ChatMessage({ message, sender }) {
        //const message = props.message;
        //const sender = props.sender; 
        //const { message , sender } = props; 
        //destructuring assignment
        
        /*
          if (sender === 'robot'){
          return (
            <div>
              <img src="images/robot.png" width="50" />
              {message}
            </div>
          );
        }
        */

        return (
          <div className={
            sender === 'user' 
              ? 'chat-message-user' 
              : 'chat-message-robot'
          }> {/*div is a block element,ie,it takes up an entire line by itself;used here to prevent image and text from being on same line*/}
            {sender === 'robot' && (
              <img src={RobotProfileImage} className="chat-message-profile" />
            )}
            <div className="chat-message-text">
              {message}
            </div>        
            {sender === 'user' && (
              <img src={UserProfileImage}className="chat-message-profile" />
            )}
          </div>
        );
      }
