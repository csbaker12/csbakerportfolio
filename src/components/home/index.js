import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const Home = () => {
  return (
    <div className='home'>
      <div className='wrapper'>
        <div className='div1'>
          <h1>Welcome to my Portoflio</h1>
          <br />
          <p className='paragraph'>
            My name is Cam Baker, I'm a fullstack web developer. I am most
            confident working with JavaScript and the MERN stack but am always
            open to picking up new technology.
          </p>
          <p className='paragraph'>
            <a href='/projects'>Check out my projects!</a>
          </p>
          <br />
        </div>

        <hr />
        <br />

        <div className='row'>
          <div className='col-4'>
            <div className='label'>
              <h2>Who I am</h2>
              <div className='profpic'></div>
            </div>
          </div>
          <div className='col-6'>
            <p className='paragraph'>
              In 2019 I graduated cum laude from the Colorado School of Mines
              with a B.S. In Metallurgical and Materials Engineering. I received
              multiple national recognitions for research and expertise in my
              field. Shortly thereafter I started learning Object Oriented
              Programming using C# as I was interested in mobile game
              development. As I became comfortable with coding logic I began to
              explore other types of development. In March of 2021 I discovered
              web development and have since been practicing full time. I have
              completed three Udemy bootcamps for a total of over 150 hours of
              lecture and am now building projects from scratch to continue
              gaining experience. As a self taught developer I am passionate and
              accountable. I am looking forward to contributing to a larger
              cause than myself and using my developing skills to have a
              positive impact on the world. Check out my projects{' '}
              <a href='/projects'>here</a>
            </p>
          </div>
        </div>
        <hr />
        <br />
        <div className='row'>
          <div className='col-4'>
            <h2 className='label'>Connect with me</h2>
          </div>
          <div className='col-6'>
            <p className='paragraph'>
              <EmailIcon style={{ fontSize: '40px', color: 'white' }} />:
              camsandybaker@gmail.com
            </p>
            <br />
            <p className='paragraph'>
              <PhoneIcon
                style={{
                  fontSize: '40px',
                  color: 'white',
                }}
              />
              : (970) 214-7220
            </p>
            <br />
            <a
              href='https://docs.google.com/document/d/1d94PMthIv14acHUwOprN2PolTyNKFcV-cnbHsXdauR4/edit?usp=sharing'
              target='_blank'
              rel='noreferrer'>
              <p className='paragraph'>Resume Download</p>
            </a>
            <br />
            <div className='row'>
              <div className='col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-5'>
                <a href='https://www.linkedin.com/in/cameron-baker-9b15a1198/'>
                  <LinkedInIcon style={{ fontSize: '40px', color: 'white' }} />
                </a>
              </div>
              <div className='col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-5'>
                <a href='https://github.com/csbaker12'>
                  <GitHubIcon style={{ fontSize: '40px', color: 'white' }} />
                </a>
              </div>
              <div className='col-xl-10 col-lg-8 col-md-6 col-sm-4 col-xs-2'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
