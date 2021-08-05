const Projects = () => {
  return (
    <>
      <div className='projects'>
        <div className='wrapper div1'>
          <h1>Projects I've worked on</h1>
          <hr />
          <br />
          <div className='row'>
            <div className='col-4'>
              <a href='https://flickbaseapp.herokuapp.com/' target='_blank'>
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
        </div>
      </div>
    </>
  );
};

export default Projects;
