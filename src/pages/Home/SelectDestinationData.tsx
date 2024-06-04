import React, { useContext, useEffect } from 'react'
import PageContext from './PageContext';
import Box from '../../components/Box';
import Select from '../../components/Select';
import AppContext from '../../App/AppContext';

const SelectCity = () => {
    const { destinationProvinceId, destinationCityId, destinationCities, onSetData, onFetchDestinationCity } = useContext(PageContext);

    useEffect(() => {
        onFetchDestinationCity();
    }, [destinationProvinceId, onFetchDestinationCity]);

    return (
        <Select
            value={destinationCityId}
            data={destinationCities}
            title="Pilih Kota"
            onChange={(e) => { onSetData('destinationCityId', e.target.value); }}
        />
    )
}

const SelectDestinationData = () => {
    const { provinces } = useContext(AppContext);
    const { destinationProvinceId, onSetData } = useContext(PageContext);

    return (
        <Box
            css={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                border: '1px solid #000',
                h5: {
                    background: '#000',
                    color: '#FFF',
                    margin: 0,
                    padding: 10
                }
            }}
        >
            <h5>Tujuan Daerah</h5>
            <Box
                css={{
                    padding: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10
                }}
            >
                <Select value={destinationProvinceId} data={provinces} title="Pilih Provinsi" onChange={(e) => { onSetData('destinationProvinceId', e.target.value); }} />
                {destinationProvinceId && <SelectCity />}
            </Box>
        </Box>
    )
}

export default SelectDestinationData;