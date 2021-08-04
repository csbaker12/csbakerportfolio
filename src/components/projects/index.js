const Projects = () => {
  return (
    <>
      <div className='projects'>
        <div className='wrapper div1'>
          <h1>Projects I've worked on</h1>
          <div>
            <h3>Flickbase</h3>
            <p className='paragraph'>
              Flickbase is an IMDB style fullstack application built with React,
              Express, mongoDB, and Node.js
              <br />
              Users can sign up and validate their email via mail sent to their
              inbox. From there users can edit their profile <br />
              All users can access article content and administrative users have
              the ability to add, edit, and remove articles <br /> as well as
              control public vs draft status and add movie categories
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
