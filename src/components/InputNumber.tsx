import React from 'react'
import Box from './Box'

type InputNumberProps = {
  value: number;
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNumber = ({ value, title, onChange }: InputNumberProps) => {
  return (
    <Box
      css={{
        gap: 10,
        display: 'flex',
        flexDirection: 'column',
        label: {
          fontWeight: 'bold'
        },
        input: {
          border: '2px solid #000',
          outline: 'none',
          fontSize: 18,
          padding: 10,
          width: 'auto',
        }
      }}
    >
      <label>{title}</label>
      <input type="number" value={value} onChange={onChange} />
    </Box>
  )
}

export default InputNumber