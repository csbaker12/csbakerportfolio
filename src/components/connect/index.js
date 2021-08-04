import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

const Connect = () => {
  return (
    <>
      <div className='div1'>
        <div>
          <h1>Connect with me</h1>
        </div>
        <div>
          <p>email: camsandybaker@gmail.com</p>
        </div>
        <div>
          <p>phone: (970)214-7220</p>
        </div>
        <div>
          <p>LinkedIn, GitHub, and Resume:</p>
          <a href='https://www.linkedin.com/in/cameron-baker-9b15a1198/'>
            <LinkedInIcon style={{ fontSize: '40px', color: 'white' }} />
          </a>
        </div>
        <div className='connectIcons'>
          <a href='https://github.com/csbaker12'>
            <GitHubIcon style={{ fontSize: '40px', color: 'white' }} />
          </a>
        </div>
        <div className='connectIcons'>
          <a href='https://docs.google.com/document/d/1d94PMthIv14acHUwOprN2PolTyNKFcV-cnbHsXdauR4/edit?usp=sharing'>
            <DescriptionIcon style={{ fontSize: '40px', color: 'white' }} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Connect;
