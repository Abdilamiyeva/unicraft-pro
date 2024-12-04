import React from 'react'
import {cn} from '@/utils/lib/utils'
import {Props} from './types'

export const Spinner: React.FC<Props> = ({className}) => <span className={cn('spinner', className)} />
