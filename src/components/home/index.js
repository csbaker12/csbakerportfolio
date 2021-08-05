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
            experienced with the MERN stack but have also worked with
            Python(+Django), and MySQL
          </p>
          <br />
        </div>

        <hr />
        <br />

        <div className='row'>
          <div className='col-4'>
            <h2 className='label'>
              Who I am
              <img
                className='headshot'
                src='https://lh3.googleusercontent.com/I34UsjkcgkTUUuF-TaCCz9hYTZKrDdxQerQxtJAHT-P2_OAgXnRKwDYbsxKEQ5XYrFB3n3NZ0A-tWgR-tU1rUgTWYAzD3jnhmlwtBl0YHMWMdp7gMNB0JmYDBg3bgyv68-OnLvnV-fQJ5yJfbGOwK4rCThVHAI_g29ndfpCPNwKLfxTGdfNs4KCJ98xYSt-YbMQ0zH5dbqhwhHgBUr_SHyuXkcKli4Ui_F2y8Ov-kdyr7lUNGctGOzo4AO26X4TZrpSBhgehFW3T5xuSkKxkstnmSSD8lC6Jx5UO_WvytkbqE2lWE_yGR8d5WBaqNNvp62U_uzi8MySyo0PRcHx3_M56pXu4VtjRp2rN2jLhoSiC_VkKlLQDagxL4EIVs5LAmXKtG3A7jUkWQxfblt_jB_7fxn_hIUdrTgep5vDme7ksCKNxYO1k7HplBYHkxb8d7h--ly9wPH5Ad5o0QzeWDEHuk9vbtOQWQuUNGRxNTtHXs0_sQavjf2ukLPeKMtkks6cZ7jwHzY2TSxnSSTdlQ_qOM_viqbQVFx43MXtYcbncPEB1LsrpX-vpV99gLkwqvGQyZe_2VpoG01ZKke7RuRdhd2PgFmRRhZ4-QyPR9Jd_H2y2DMY8HO8KeM0N4ofZor4V2OFNSCJymfthesDVivkHxe3UmtDg_i4tx-ZNANHc43SPs6anI6KHYqtXDmiRRfRtbvkdML4jmOOZO4nQ5dLu=w686-h914-no?authuser=0'></img>
            </h2>
          </div>
          <div className='col-6'>
            <p className='paragraph'>
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
              target='_blank'>
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
