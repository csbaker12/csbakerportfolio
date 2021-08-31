const Projects = () => {
  return (
    <>
      <div className='projects'>
        <div className='wrapper div1'>
          <h1>Projects I've worked on</h1>
          <hr />
          <br />
          <div className='row'>
            <div className='col-6'>
              <a
                href='https://tgrclone.herokuapp.com/'
                target='_blank'
                rel='noreferrer'>
                <h3>TGR Clone</h3>
              </a>
            </div>
            <div className='col-6'>
              <p className='paragraph'>
                Currently, I am cloning Teton Gravity Research's website. It is
                a large undertaking but already has a lot of functionality to
                explore. I used React, HTML, CSS, Bootstrap, Material UI, and
                more for the frontend. The backend consists of Express, Node,
                MongoDB, and more. I will be implementing full CRUD
                functionality in the forum section. It also features RESTful API
                integration.
              </p>
            </div>
          </div>
          <hr />
          <br />
          <div className='row'>
            <div className='col-6'>
              <a
                href='https://flickbaseapp.herokuapp.com/'
                target='_blank'
                rel='noreferrer'>
                <h3>Flickbase</h3>
              </a>
            </div>
            <div className='col-6'>
              <p className='paragraph'>
                Flickbase is an IMDB style fullstack application built with
                React, Express, mongoDB, and Node.js Users can sign up and
                validate their email via mail sent to their mailbox. All users
                can access article content, registered users can access the
                dashboard and update their account info, and administrative
                users can control article status, and have access to article
                CRUD functionality. Feel to create an account and peruse.
                Passwords are salted and hashed to prevent security breaches I'd
                be happy to provide administrative access to those who desire a
                look at that side
              </p>
            </div>
          </div>

          <hr />
          <br />
          <div className='row'>
            <div className='col-6'>
              <h3>Portfolio</h3>
            </div>
            <div className='col-6'>
              <p className='paragraph'>
                I built the site you are currently browsin using React!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
