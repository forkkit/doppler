import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
  position: relative;
  width: auto;
  height: 100%;
`

const InputField = styled.input`
  color: inherit;
  font-size: 32px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1;
  padding: 0;
  border: 0;
  width: 100%;
  position: absolute;
  top: 0;
  height: 100%;
  background-color: transparent;
  appearance: textfield;
  margin: 0;
  ${props => props.isDisabled && `
    user-select: none;
    opacity: 0.4;
    pointer-events: none;
  `};
  &:hover {
    color: hsla(328, 100%, 45%, 1);
  }
  &:focus {
    outline: none;
    background-color: hsla(328, 100%, 45%, 1);
    color: hsla(328, 100%, 93%, 1);
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-moz-selection {
    background-color: hsla(328, 100%, 45%, 1);
  }
  &::selection {
    background-color: hsla(328, 100%, 45%, 1);
  }
`

const InputValue = styled.div`
  font-size: 32px;
  font-weight: inherit;
  line-height: 1;
  opacity: 0;
  transform: translateY(236px) scale(0);
`

const InputLabel = styled.label`
  
`

const InputRoot = styled.div`
  display: flex;
  margin: 0 0 0.5rem 0;
`

const Input = ({ value, onChange, color, prefix, sufix, withRgbSlider, label, min, max, ...rest }) => {
  return (
    <div>
      <InputLabel htmlFor={label}>
        {label}
      </InputLabel>

      <InputRoot>
        <InputWrapper color={color}>
          <InputField color={color} value={prefix} type='text' readOnly isDisabled tabIndex={-1} />
          <InputValue>
            {prefix}
          </InputValue>
        </InputWrapper>

        <InputWrapper color={color}>
          <InputField color={color} value={value} onChange={onChange} {...rest} min={min} max={max} />
          <InputValue>
            {value}
          </InputValue>
        </InputWrapper>

        <InputWrapper color={color}>
          <InputField color={color} value={sufix} type='text' readOnly isDisabled tabIndex={-1} />
          <InputValue>
            {sufix}
          </InputValue>
        </InputWrapper>
      </InputRoot>
    </div>
  )
}

export default Input