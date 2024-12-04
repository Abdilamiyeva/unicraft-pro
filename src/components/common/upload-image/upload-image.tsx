/* eslint-disable react-hooks/exhaustive-deps */
import {cn} from '@/utils/lib/utils'
import {Props} from './types'
import {ChangeEvent, useEffect, useState} from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {CameraIcon} from '@/icons/camera'
import {UploadImageContentBottom} from './components/upload-image-content-bottom'
import {UploadImageContentTop} from './components/upload-image-content-top'
import {Image} from '../image'

export const ImageUploader = ({onChange, value, className, variant, height}: Props) => {
  const [file, setFile] = useState<File | undefined>(value || undefined)
  const [error, setError] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string>('')
  const [isActive, setIsActive] = useState<boolean>(false)
  const [isLabelHovered, setIsLabelHovered] = useState<boolean>(false)
  const allowedFormats = ['.png', '.svg', '.jpg']

  const onUploadImage = async (uploadedFile: File | undefined) => {
    if (uploadedFile) {
      setImageUrl(URL.createObjectURL(uploadedFile))
      if (onChange) {
        onChange(uploadedFile)
      }
    }
  }

  const onDeleteImage = () => {
    setFile(undefined)
    setImageUrl('')
    if (onChange) {
      onChange(undefined)
    }
    setIsActive(false)
  }

  useEffect(() => {
    if (file) {
      onUploadImage(file)
    }
  }, [file])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0]
      const fileExtension = selectedFile.name?.split('.').pop()?.toLowerCase() || ''

      if (allowedFormats.includes(`.${fileExtension}`)) {
        setFile(selectedFile)
        setError(false)
      } else {
        setFile(undefined)
        setError(true)
      }

      event.target.value = ''
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    if (isActive) {
      window.addEventListener('click', () => {
        setIsActive(false)
      })
    }
  }, [])

  useEffect(() => {
    if (value && value !== file) {
      setFile(value)
      onUploadImage(file)
    }
  }, [value])

  useEffect(() => {
    const handleWindowClick = (event: any) => {
      const isOutsideLabel = !event.target.closest('label')
      const isOutsideFileInput = !event.target.closest('input[type="file"]')

      if (isOutsideLabel && isOutsideFileInput) {
        setIsActive(false)
      }
    }

    window.addEventListener('click', handleWindowClick)
    return () => {
      window.removeEventListener('click', handleWindowClick)
    }
  }, [])

  return (
    <div>
      {variant === 'top' && <UploadImageContentTop />}
      <div className={cn('relative', className)}>
        <label
          htmlFor="file"
          onClick={() => setIsActive(true)}
          onMouseEnter={() => setIsLabelHovered(true)}
          onMouseLeave={() => setIsLabelHovered(false)}
          className={cn(
            'block cursor-pointer rounded-[8px] text-lg text-black leading-7.5 border border-[#e6e6e6] border-dashed',
            {
              'shadow-[0px_0px_10px_rgba(150,193,225)] border-[#2e83c4]': isActive,
            },
          )}
        >
          <div className={`flex relative flex-col mt-4 items-center h-[${height}px]`}>
            {file ? (
              <>
                <div className="flex px-5 justify-center items-center">
                  <Image
                    src={imageUrl}
                    alt="upload image"
                    imageClassName={
                      variant === 'bottom'
                        ? 'border-3 border-white p-1 w-[200px] object-cover min-h-[200px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] rounded-full'
                        : 'min-w-[520px]'
                    }
                  />
                </div>
              </>
            ) : (
              <div className="text-center">
                <CameraIcon
                  className={cn('w-[100px] h-[100px] text-zinc-400 transition-all mt-5 mb-5', {
                    'text-[#2e83c4]': isLabelHovered,
                  })}
                />
              </div>
            )}
            <div>
              {file?.name ? (
                <div className="text-center font-semibold mt-5 -mb-1 text-black mx-auto text-sm leading-8">
                  {file.name}
                </div>
              ) : (
                <div>
                  <p className="text-xs text-center font-semibold leading-5 not-italic">No file selected</p>
                </div>
              )}
              <p className="text-xs mb-3 text-[#949393]">Click to replace an image or drag it to this field</p>
            </div>

            <input onChange={handleChange} hidden type="file" id="file" />
          </div>
        </label>

        {file && (
          <div onClick={onDeleteImage} className="absolute top-3 right-4">
            <RiDeleteBin5Line className="text-[#787777] cursor-pointer text-2xl" />
          </div>
        )}
        {variant === 'bottom' && <UploadImageContentBottom />}

        {error && (
          <p className="text-center my-2 font-quicksand text-12 font-bold leading-20 text-red-600">
            File format is not supported
          </p>
        )}
      </div>
    </div>
  )
}
