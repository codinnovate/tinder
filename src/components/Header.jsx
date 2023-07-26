import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
    return (
        <div className='header'>
            <div className='header_content'>
            <IconButton>
                <PersonIcon fontSize='large' className='header__icons'/>
            </IconButton>
            <img className='header__logo' src="https://th.bing.com/th/id/OIP.LsnATST5D3Fx4_PwaXpkcwHaBv?pid=ImgDet&rs=1" alt="cody_tinder" />
            <IconButton>
                <ForumIcon fontSize='large' className='header__icons'/>
            </IconButton>
            </div>
            
        </div>
    )
}

export default Header
