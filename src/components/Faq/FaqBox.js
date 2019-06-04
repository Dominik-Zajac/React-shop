import React from 'react';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const FaqBox = () => {
    return (
        <div className='box-shadow'>
            <div className='container-collapse'>
                <div className='box-collapse'>
                    <FontAwesomeIcon className='icon' icon={faQuestion} />
                    <p className='paragraph'>Pierwsze pytanie</p>
                    <FontAwesomeIcon id='toggler1' className='icon' icon={faChevronDown} />
                </div>
                <UncontrolledCollapse toggler='#toggler1'>
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed tincidunt eleifend purus,
                            id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <div className='box-collapse'>
                    <FontAwesomeIcon className='icon' icon={faQuestion} />
                    <p className='paragraph'>Drugie pytanie</p>
                    <FontAwesomeIcon id='toggler2' className='icon' icon={faChevronDown} />
                </div>
                <UncontrolledCollapse toggler='#toggler2'>
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed tincidunt eleifend purus,
                            id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <div className='box-collapse'>
                    <FontAwesomeIcon className='icon' icon={faQuestion} />
                    <p className='paragraph'>Trzecie pytanie</p>
                    <FontAwesomeIcon id='toggler3' className='icon' icon={faChevronDown} />
                </div>
                <UncontrolledCollapse toggler='#toggler3'>
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed tincidunt eleifend purus,
                            id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <div className='box-collapse'>
                    <FontAwesomeIcon className='icon' icon={faQuestion} />
                    <p className='paragraph'>Czwarte pytanie</p>
                    <FontAwesomeIcon id='toggler4' className='icon' icon={faChevronDown} />
                </div>
                <UncontrolledCollapse toggler='#toggler4'>
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed tincidunt eleifend purus,
                            id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <div className='box-collapse'>
                    <FontAwesomeIcon className='icon' icon={faQuestion} />
                    <p className='paragraph'>Piate pytanie</p>
                    <FontAwesomeIcon id='toggler5' className='icon' icon={faChevronDown} />
                </div>
                <UncontrolledCollapse toggler='#toggler5'>
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed tincidunt eleifend purus,
                            id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <div className='box-collapse'>
                    <FontAwesomeIcon className='icon' icon={faQuestion} />
                    <p className='paragraph'>Szoste pytanie</p>
                    <FontAwesomeIcon id='toggler6' className='icon' icon={faChevronDown} />
                </div>
                <UncontrolledCollapse toggler='#toggler6'>
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed tincidunt eleifend purus,
                            id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <div className='box-collapse'>
                    <FontAwesomeIcon className='icon' icon={faQuestion} />
                    <p className='paragraph'>Siodme pytanie</p>
                    <FontAwesomeIcon id='toggler7' className='icon' icon={faChevronDown} />
                </div>
                <UncontrolledCollapse toggler='#toggler7'>
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed tincidunt eleifend purus,
                            id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <div className='box-collapse'>
                    <FontAwesomeIcon className='icon' icon={faQuestion} />
                    <p className='paragraph'>Osme pytanie</p>
                    <FontAwesomeIcon id='toggler8' className='icon' icon={faChevronDown} />
                </div>
                <UncontrolledCollapse toggler='#toggler8'>
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed tincidunt eleifend purus,
                            id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <div className='box-collapse'>
                    <FontAwesomeIcon className='icon' icon={faQuestion} />
                    <p className='paragraph'>Dziewiate pytanie</p>
                    <FontAwesomeIcon id='toggler9' className='icon' icon={faChevronDown} />
                </div>
                <UncontrolledCollapse toggler='#toggler9'>
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed tincidunt eleifend purus,
                            id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <div className='box-collapse'>
                    <FontAwesomeIcon className='icon' icon={faQuestion} />
                    <p className='paragraph'>Dziesiate pytanie</p>
                    <FontAwesomeIcon id='toggler10' className='icon' icon={faChevronDown} />
                </div>
                <UncontrolledCollapse toggler='#toggler10'>
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed tincidunt eleifend purus,
                            id aliquam mi sollicitudin ut. Pellentesque ut urna urna.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        </div>
    )
}

export default FaqBox;