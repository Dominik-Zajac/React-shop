import React, { Component } from 'react';
import {
    Container,
    CarouselItem,
} from 'reactstrap';
import Title from './Title';
import Info from './ShopInfo';
import CarouselContainer from './CarouselContainer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sass/animations.scss';
import './Home.scss';

const items = [
    {
        src: 'https://i.ibb.co/L6pNN8t/dewalt-shop.jpg',
        altText: 'Mark DEWALT'
    },
    {
        src: 'https://i.ibb.co/LhbFGVD/bosch-shop.jpg',
        altText: 'Mark BOSCH'
    },
    {
        src: 'https://i.ibb.co/bbvBKH0/makita-shop.jpg',
        altText: 'Mark MAKITA'
    }
];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1
            ? 0
            : this.state.activeIndex + 1;

        this.setState({
            activeIndex: nextIndex
        });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0
            ? items.length - 1
            : this.state.activeIndex - 1;

        this.setState({
            activeIndex: nextIndex
        });
    }

    goToIndex(newIndex) {
        if (this.animating) return;

        this.setState({
            activeIndex: newIndex
        });
    }

    render() {
        const { activeIndex } = this.state;
        const {
            next,
            previous,
            goToIndex,
            onExited,
            onExiting
        } = this;
        const slides = items.map((item) => {
            const {
                src,
                altText
            } = item;

            return (
                <CarouselItem
                    key={src}
                    onExiting={onExiting}
                    onExited={onExited}
                >
                    <img
                        src={src}
                        alt={altText}
                    />
                </CarouselItem>
            )
        })

        return (
            <ReactCSSTransitionGroup
                transitionName='fade'
                transitionEnterTimeout={1500}
                transitionLeaveTimeout={2000}
                transitionAppear={true}
                transitionAppearTimeout={1500}
            >
                <div className='home-container'>
                    <Title />
                    <CarouselContainer
                        next={next}
                        items={items}
                        slides={slides}
                        previous={previous}
                        activeIndex={activeIndex}
                        clickHandlerIndex={goToIndex}
                        clickHandlerNext={next}
                        clickHandlerPrevious={previous}
                    />
                    <Info />
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default Home;