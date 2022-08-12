import { useCallback, useContext, useEffect, useState } from "react";
import { CarouselContext } from "pure-react-carousel";

const useSliderState = () => {
  const { state, subscribe, unsubscribe } = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(state.currentSlide);
  const [visibleSlides, setVisibleSlides] = useState(state.visibleSlides);

  const onChangeSlide = useCallback(() => {
    setCurrentSlide(state.currentSlide);
  }, [state.currentSlide]);

  const onChangeVisibleSlides = useCallback(() => {
    setVisibleSlides(state.visibleSlides);
  }, [state.visibleSlides]);

  useEffect(() => {
    subscribe(onChangeSlide);
    subscribe(onChangeVisibleSlides);
    return () => {
      unsubscribe(onChangeSlide);
      unsubscribe(onChangeVisibleSlides);
    };
  }, [onChangeSlide, onChangeVisibleSlides, subscribe, unsubscribe]);

  return { state, currentSlide, visibleSlides };
};

export default useSliderState;
