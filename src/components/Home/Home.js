import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    Container,
} from 'reactstrap';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
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
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    
        this.setState({ 
            activeIndex: nextIndex 
        });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    
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

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={ this.onExiting }
                    onExited={ this.onExited }
                    key={ item.src } 
                >
                    <img src={ item.src } alt={ item.altText } />
                </CarouselItem>
            );
        });

        return (
            <div className='home-container'>
                <h1 className='title'>Sklep <span className='subtitle'>Narzedzia</span></h1>
                <Carousel
                    activeIndex={ activeIndex }
                    next={ this.next }
                    previous={ this.previous }
                >   
                    <CarouselIndicators items={ items } activeIndex={ activeIndex } onClickHandler={ this.goToIndex } />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={ this.previous } />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={ this.next } />
                </Carousel>
                <div className='container'>
                    <h1 className='info-title'>O nas</h1>
                    <div className='row'>
                        <div className='offer col-sm-12 col-lg-4'>
                            <i className='icon far fa-thumbs-up'></i>
                            <h2>Sprawdzony sklep</h2>
                            <p>Sklep otrzymuje swietne opinie i recenzje.</p>
                        </div>
                        <div className='offer col-sm-12 col-lg-4'>
                            <i className='icon far fa-heart'></i>
                            <h2>Najlepsza jakość</h2>
                            <p>Posiadamy markowe sprzety swietnej jakosci.</p>
                        </div>
                        <div className='offer col-sm-12 col-lg-4'>
                            <i className='icon fas fa-map-marked-alt'></i>
                            <h2>Dobra lokalizacja</h2>
                            <p>Sklep zlokalizowany w centrum miasta.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Home;