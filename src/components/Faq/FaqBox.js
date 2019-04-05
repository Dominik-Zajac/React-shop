import React from 'react';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';

export const FaqBox = () => {
    return (
        <div className='box-shadow'>
            <div className='container-collapse'>
                <div className='box-collapse'>
                    <i className='fas fa-question icon'></i>
                    <p className='paragraph'>Pierwsze pytanie</p>
                    <i id='toggler1' className='fas fa-chevron-down icon'></i>
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
                    <i className='fas fa-question icon'></i>
                    <p className='paragraph'>Drugie pytanie</p>
                    <i id='toggler2' className='fas fa-chevron-down icon'></i>
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
                    <i className='fas fa-question icon'></i>
                    <p className='paragraph'>Trzecie pytanie</p>
                    <i id='toggler3' className='fas fa-chevron-down icon'></i>
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
                    <i className='fas fa-question icon'></i>
                    <p className='paragraph'>Czwarte pytanie</p>
                    <i id='toggler4' className='fas fa-chevron-down icon'></i>
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
                    <i className='fas fa-question icon'></i>
                    <p className='paragraph'>Piate pytanie</p>
                    <i id='toggler5' className='fas fa-chevron-down icon'></i>
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
                    <i className='fas fa-question icon'></i>
                    <p className='paragraph'>Szoste pytanie</p>
                    <i id='toggler6' className='fas fa-chevron-down icon'></i>
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
                    <i className='fas fa-question icon'></i>
                    <p className='paragraph'>Siodme pytanie</p>
                    <i id='toggler7' className='fas fa-chevron-down icon'></i>
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
                    <i className='fas fa-question icon'></i>
                    <p className='paragraph'>Osme pytanie</p>
                    <i id='toggler8' className='fas fa-chevron-down icon'></i>
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
                    <i className='fas fa-question icon'></i>
                    <p className='paragraph'>Dziewiate pytanie</p>
                    <i id='toggler9' className='fas fa-chevron-down icon'></i>
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
                    <i className='fas fa-question icon'></i>
                    <p className='paragraph'>Dziesiate pytanie</p>
                    <i id='toggler10' className='fas fa-chevron-down icon'></i>
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