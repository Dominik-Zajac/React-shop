import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* Styles */
import '../../sass/animations.scss';
import './Regulations.scss';

export const Regulations = () => {
      return (
            <ReactCSSTransitionGroup
                  transitionName='fade'
                  transitionEnterTimeout={1500}
                  transitionLeaveTimeout={2000}
                  transitionAppear={true}
                  transitionAppearTimeout={1500}
            >
                  <div className='regulations-container'>
                        <h1 className='title'>Regulamin Narzedzia</h1>
                        <h3 className='subtitle'>I. Postanowienia ogolne</h3>
                        <p className='paragraph'>
                              1.Lorem ipsum dolor sit amet, 
                              consectetur adipiscing elit. Sed tincidunt eleifend purus, 
                              id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </p>
                        <p className='paragraph'>
                              2. Lorem ipsum dolor sit amet, 
                              consectetur adipiscing elit. Sed tincidunt eleifend purus, 
                              id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </p>
                        <p className='paragraph'>
                              3. Lorem ipsum dolor sit amet, 
                              consectetur adipiscing elit. Sed tincidunt eleifend purus, 
                              id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </p>
                        <p className='paragraph'>
                              4. Lorem ipsum dolor sit amet, 
                              consectetur adipiscing elit. Sed tincidunt eleifend purus, 
                              id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </p>
                        <h3 className='subtitle'>II. Transakcje</h3>
                        <p className='paragraph'>
                              1. Lorem ipsum dolor sit amet, 
                              consectetur adipiscing elit. Sed tincidunt eleifend purus, 
                              id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </p>
                        <p className='paragraph'>
                              2. Lorem ipsum dolor sit amet, 
                              consectetur adipiscing elit. Sed tincidunt eleifend purus, 
                              id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </p>
                        <p className='paragraph'>
                              3. Lorem ipsum dolor sit amet, 
                              consectetur adipiscing elit. Sed tincidunt eleifend purus, 
                              id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </p>
                        <p className='paragraph'>
                              4. Lorem ipsum dolor sit amet, 
                              consectetur adipiscing elit. Sed tincidunt eleifend purus, 
                              id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </p>
                        <h3 className='subtitle'>III. Postanowienia koncowe</h3>
                        <p className='paragraph'>
                              1. Lorem ipsum dolor sit amet, 
                              consectetur adipiscing elit. Sed tincidunt eleifend purus, 
                              id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </p>
                        <p className='paragraph'>
                              6. Lorem ipsum dolor sit amet, 
                              consectetur adipiscing elit. Sed tincidunt eleifend purus, 
                              id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </p>
                        <p className='paragraph'>
                              2. Lorem ipsum dolor sit amet, 
                              consectetur adipiscing elit. Sed tincidunt eleifend purus, 
                              id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </p>
                        <p className='paragraph'>
                              3. Lorem ipsum dolor sit amet, 
                              consectetur adipiscing elit. Sed tincidunt eleifend purus, 
                              id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </p>
                  </div>
            </ReactCSSTransitionGroup>
      )
}

export default Regulations;