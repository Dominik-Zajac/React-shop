import React from 'react';
import { connect } from 'react-redux';
import TableThead from './TableThead';
import TableTbody from './TableTbody';
import SummaryFunctions from './SummaryFunctions';
import { Table } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* Styles */
import '../../../sass/animations.scss';
import './BasketSummary.scss';

const Summary = props => {
    return(
        <div className='summary-container'>
            <ReactCSSTransitionGroup
                transitionName='fade'
                transitionEnterTimeout={1500}
                transitionLeaveTimeout={2000}
                transitionAppear={true}
                transitionAppearTimeout={1500}
            >
                <h1 className='title-summary'>Podsumowanie</h1>
                <Table responsive>
                    <TableThead />
                    <tbody>
                        {props.carts.map((product, index) => {
                            const {
                                name, 
                                count, 
                                price, 
                                imageUrl, 
                                producent
                            } = product;
                            
                            return(
                                <TableTbody
                                    key={index}
                                    name={name}
                                    count={count}
                                    price={price}
                                    index={index}
                                    imageUrl={imageUrl}
                                    producent={producent}
                                />
                            )
                        })}
                    </tbody>
                </Table>
                <SummaryFunctions sumPrice={props.sumPrice} />
            </ReactCSSTransitionGroup> 
        </div>
    )
}

const mapStateToProps = function(store) {
    return {
        carts: store.basketReducer.carts,
        sumPrice: store.basketReducer.sumPrice
    }
};

export default connect(mapStateToProps)(Summary);