import React, { useContext, useEffect } from 'react'
import PageContext from './PageContext';
import Box from '../../components/Box';
import Select from '../../components/Select';
import AppContext from '../../App/AppContext';

const SelectCity = () => {
    const { originProvinceId, originCityId, originCities, onSetData, onFetchOriginCity } = useContext(PageContext);

    useEffect(() => {
        onFetchOriginCity();
    }, [originProvinceId, onFetchOriginCity]);

    return (
        <Select
            value={originCityId}
            data={originCities}
            title="Pilih Kota"
            onChange={(e) => { onSetData('originCityId', e.target.value); }}
        />
    )
}

const SelectOriginData = () => {
    const { provinces } = useContext(AppContext);
    const { originProvinceId, onSetData } = useContext(PageContext);

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
            <h5>Asal Daerah</h5>
            <Box
                css={{
                    padding: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10
                }}
            >
                <Select value={originProvinceId} data={provinces} title="Pilih Provinsi" onChange={(e) => { onSetData('originProvinceId', e.target.value); }} />
                {originProvinceId && <SelectCity />}
            </Box>
        </Box>
    )
}

export default SelectOriginData;