/**
 *    Slider-component.
 *      - Slider
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
  memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { uid } from 'shared/lib/uid/uid';
import classes from './Slider.module.scss';

type itemsType = (string | React.ReactNode)[];

interface SliderProps {
    className?: string;
    items: itemsType;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    animationSpeed?: number;
    visibleSlides?: number;
    infiniteLoop?: boolean;
}

export const Slider = memo((props: SliderProps) => {
  const {
    className,
    items,
    autoPlay,
    autoPlayInterval,
    animationSpeed,
    visibleSlides = 3,
    infiniteLoop,
  } = props;

  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Рассчитываем ширину одного слайда
  const slideWidth = 100 / visibleSlides;

  // Обновляем слайд на следующий
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= items.length - visibleSlides) {
        if (infiniteLoop) {
          return 0;
        }
        return prevIndex;
      }
      return prevIndex + 1;
    });
  }, [items.length, visibleSlides, infiniteLoop]);

  // Обновляем слайд на предыдущий
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        if (infiniteLoop) {
          return items.length - visibleSlides;
        }
        return prevIndex;
      }
      return prevIndex - 1;
    });
  }, [items.length, visibleSlides, infiniteLoop]);

  // Инициализация автоплея
  const startAutoPlay = useCallback(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(nextSlide, autoPlayInterval);
    }
  }, [autoPlay, autoPlayInterval, nextSlide]);

  // Остановка автоплея
  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  }, []);

  // Эффект для управления автоплеем
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  // Рендеринг слайдов
  const renderSlides = useCallback(() => items.map((item, index) => (
      <div
          key={uid()}
          className="slide"
          style={{
            flex: `0 0 ${slideWidth}%`,
            transition: `transform ${animationSpeed}ms ease-in-out`,
          }}
          aria-hidden={index < currentIndex || index >= currentIndex + visibleSlides}
      >
          {item}
      </div>
  )), [items, currentIndex, slideWidth, animationSpeed, visibleSlides]);

  return (
      <div
          className={classes.slider}
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
      >
          <div
              className={classes.slidesContainer}
              style={{
                display: 'flex',
                transform: `translateX(-${currentIndex * slideWidth}%)`,
                transition: `transform ${animationSpeed}ms ease-in-out`,
              }}
          >
              {renderSlides()}
          </div>
          <button className={classes.prevButton} onClick={prevSlide}>
              ❮
          </button>
          <button className={classes.nextButton} onClick={nextSlide}>
              ❯
          </button>
      </div>
  );
});
