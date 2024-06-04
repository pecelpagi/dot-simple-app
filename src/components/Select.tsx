import React from 'react'
import Box from './Box'

type SelectProps = {
    data: { id: number, name: string }[],
    value: string;
    title: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ data, value, title, onChange }: SelectProps) => {
    return (
        <Box
            css={{
                gap: 10,
                display: 'flex',
                flexDirection: 'column',
                label: {
                  fontWeight: 'bold'
                },        
                select: {
                    border: '2px solid #000',
                    outline: 'none',
                    fontSize: 18,
                    padding: 10,
                    width: 'auto'
                }
            }}
        >
            <label>{title}</label>
            <select className='custom-select' value={value} onChange={onChange}>
                {data.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
            </select>
        </Box>
    )
}

export default Select