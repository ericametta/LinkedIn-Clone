import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOptions from './InputOptions';



const Feed = () => {
    return (
        <div className="feed">
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                        <input type="text" placeholder='Start a post'/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-input-options">
                <InputOptions title="Photo" Icon={ImageIcon} color="#378FE9"/>
                <InputOptions title="Video" Icon={SubscriptionsIcon} color="#5F9B41"/>
                <InputOptions title="Event" Icon={EventNoteIcon} color="#D39E5A"/>
                <InputOptions title="Write Article" Icon={CalendarViewDayIcon} color="#E16744"/> 
                </div>
            </div>

            {/*Posts */}
        </div>
     );
}
 
export default Feed;