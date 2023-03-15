import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import { FiberManualRecord } from '@mui/icons-material';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets-article">
            <div className="widgets-article-left">
                <FiberManualRecord />
            </div>

            <div className="widgets-article-right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        
        </div>
    )
    return ( 
        <div className="widgets">
            <div className="widgets-header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Apple delays bonuses, hiring: Report", "Top news • 5,072 reader")}
            {newsArticle("Eyes on Fed as inflation cools", "9h ago • 5,860 readers")}
            {newsArticle("US banking outlook now positive", "9h ago • 17,482 readers")}
            {newsArticle("US banking outlook now positive", "9h ago • 17,482 readers")}
            {newsArticle("US banking outlook now positive", "9h ago • 17,482 readers")}
            {newsArticle("US banking outlook now positive", "9h ago • 17,482 readers")}
        </div>
     );
}
 
export default Widgets;