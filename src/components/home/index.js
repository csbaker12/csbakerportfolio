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
          <h5>
            My name is Cam Baker, I'm a fullstack web developer. I am most
            experienced with the MERN stack but have also worked with
            Python(+Django), and MySQL
          </h5>
          <br />
        </div>

        <hr />
        <br />

        <div className='row'>
          <div className='col-4'>
            <h2 className='label'>Who I am</h2>
          </div>
          <div className='col-6'>
            <p className='who'>
              I hold a B.S. in Metallurgical and Materials Engineering from the
              Colorado School of Mines that I obtained in 2019. My interest in
              coding began long ago in a high school Robotics course but it was
              not until I began Harvard's CS50 in February 2021 that I became
              serious about a career in Development. Since then I have completed
              Harvard's CS50 and CS50W plus three Udemy full stack development
              bootcamps courses and have now turned my attention to building
              projects for displaying on this portofilio. I am currently seeking
              employment as a fullstack, frontend, or backend developer. I am
              willing to learn any language, stack, or framework.
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
            <h5>
              <EmailIcon style={{ fontSize: '40px', color: 'white' }} />:
              camsandybaker@gmail.com
            </h5>
            <br />
            <h5>
              <PhoneIcon style={{ fontSize: '40px', color: 'white' }} />: (970)
              214-7220
            </h5>
            <br />
            <a href='https://docs.google.com/document/d/1d94PMthIv14acHUwOprN2PolTyNKFcV-cnbHsXdauR4/edit?usp=sharing'>
              <h5>Resume Download</h5>
            </a>
            <br />
            <div className='row'>
              <div className='col-lg-1 col-md-2 '>
                <a href='https://www.linkedin.com/in/cameron-baker-9b15a1198/'>
                  <LinkedInIcon style={{ fontSize: '40px', color: 'white' }} />
                </a>
              </div>
              <div className='col-lg-1 col-md-2 '>
                <a href='https://github.com/csbaker12'>
                  <GitHubIcon style={{ fontSize: '40px', color: 'white' }} />
                </a>
              </div>
              <div className='col-lg-10 col-md-8'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;