import { GrNode } from 'react-icons/gr';
import { GrReactjs } from 'react-icons/gr';
import { ImHtmlFive } from 'react-icons/im';
import { FaCss3 } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { DiSqllite } from 'react-icons/di';
import { BsFillBootstrapFill } from 'react-icons/bs';

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
          <hr />

          <h1>Languages</h1>
          <hr />
          <br />
          <div className='row'>
            <div className='col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-5'>
              <GrNode style={{ fontSize: '60px', color: 'white' }} />
              <p>Node.js</p>
            </div>
            <div className='col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-5'>
              <GrReactjs style={{ fontSize: '60px', color: 'white' }} />{' '}
              <p>React.js</p>
            </div>
            <div className='col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-5'>
              <ImHtmlFive style={{ fontSize: '60px', color: 'white' }} />
              <p>HTML5</p>
            </div>
            <div className='col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-5'>
              <FaCss3 style={{ fontSize: '60px', color: 'white' }} />
              <p>CSS</p>
            </div>
            <div className='col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-5'>
              <SiJavascript style={{ fontSize: '60px', color: 'white' }} />
              <p>Javascript</p>
            </div>
            <div className='col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-5'>
              <SiPython style={{ fontSize: '60px', color: 'white' }} />
              <p>Python</p>
            </div>
            <div className='col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-5'>
              <FaGitAlt style={{ fontSize: '60px', color: 'white' }} />
              <p>Git</p>
            </div>
            <div className='col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-5'>
              <SiMongodb style={{ fontSize: '60px', color: 'white' }} />
              <p>mongoDB</p>
            </div>
            <div className='col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-5'>
              <DiSqllite style={{ fontSize: '60px', color: 'white' }} />
              <p>SQLite</p>
            </div>
            <div className='col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-5'>
              <BsFillBootstrapFill
                style={{ fontSize: '60px', color: 'white' }}
              />
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
