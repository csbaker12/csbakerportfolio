const Education = () => {
  return (
    <>
      <div className='education'>
        <div className='wrapper div1'>
          <h1>Education</h1>
          <hr />
          <br />
          <div>
            <div className='row'>
              <div className='col-4'>
                <h3>Colorado School of Mines</h3>
              </div>
              <div className='col-6'>
                <p className='paragraph'>
                  Degree: B.S. Metallurgical and Materials Engineering
                </p>
              </div>
            </div>
          </div>
          <hr />

          <div>
            <div className='row'>
              <div className='col-4'>
                <h3>Univeristy of Harvard </h3>
              </div>
              <div className='col-6'>
                <p className='paragraph'>
                  CS50: Introduction to Computer Science <br />
                  CS50W: Web Programming with Python and Javascript
                </p>
              </div>
            </div>
          </div>
          <hr />

          <div>
            <div className='row'>
              <div className='col-4'>
                <h3>Udemy </h3>
              </div>
              <div className='col-6'>
                <p className='paragraph'>
                  The Web Development Bootcamp <br />
                  React: The Complete Guide <br />
                  The Complete React Fullstack Course
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
