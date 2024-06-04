import React, { useContext } from 'react'
import Select from '../../components/Select';
import PageContext from './PageContext';
import Box from '../../components/Box';

const SelectCourier = () => {
    const { couriers, courier, onSetData } = useContext(PageContext);

    return (
        <Box
            css={{
                '.custom-select': {
                    width: '100%'
                }
            }}
        >
            <Select
                value={courier}
                data={couriers}
                title="Pilih Kurir"
                onChange={(e) => { onSetData('courier', e.target.value); }}
            />
        </Box>
    )
}

export default SelectCourier