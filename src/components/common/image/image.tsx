/* eslint-disable unicorn/no-null */
import React from 'react'
import {Props} from './types'
import 'react-lazy-load-image-component/src/effects/blur.css'
import {cn} from '@/utils/lib/utils'
import {LazyLoadImage} from 'react-lazy-load-image-component'

export const Image: React.FC<Props> = ({src, alt, className, imageClassName, defaultImageSrc}) => {
  const imageErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const el = e.target as HTMLImageElement
    el.onerror = null
    el.src = defaultImageSrc || '/images/placeholder.jpg'
  }

  return (
    <LazyLoadImage
      wrapperClassName={cn('max-w-max max-h-max', className)}
      className={cn('object-cover', imageClassName)}
      src={src}
      alt={alt}
      effect="blur"
      crossOrigin="anonymous"
      onError={imageErrorHandler}
    />
  )
}
