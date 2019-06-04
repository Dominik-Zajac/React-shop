import React from 'react';
import {
    Carousel,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

const CarouselContainer = props => {
    const {
        next,
        items,
        slides,
        previous,
        activeIndex,
        clickHandlerNext,
        clickHandlerIndex,
        clickHandlerPrevious
    } = props;

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={clickHandlerIndex}
            />
            {slides}
            <CarouselControl
                direction='prev'
                directionText='Previous'
                onClickHandler={clickHandlerPrevious}
            />
            <CarouselControl
                direction='next'
                directionText='Next'
                onClickHandler={clickHandlerNext}
            />
        </Carousel>
    )
}

export default CarouselContainer;