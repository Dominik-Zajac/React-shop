import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';

const items = [
  {
    src: 'http://agroma.olsztyn.pl/images/supersized/artykuly/WIELKA_PROMOCJA_ELEKTRONARZEDZI_DeWalt%21/wielka_4.jpg',
    altText: 'Slide 12'
  },
  {
    src: 'https://tools.swiatnarzedzi.pl/all/wolfcraft/certyfikat-gold_2017a.jpg',
    altText: 'Slide 2'
  },
  {
    src: 'http://fhb-sklep.pl/fhbskweb/galeria/wal-sklep-01.jpg',
    altText: 'Slide 3'
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
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
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
    );
  }
}

export default Home;