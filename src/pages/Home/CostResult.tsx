import React, { useContext } from 'react'
import numeral from 'numeral';
import PageContext from './PageContext';
import Box from '../../components/Box';

const CostResut = () => {
    const { shippingCost } = useContext(PageContext);

    if (!shippingCost) return null;

    return (
        <Box
            css={{
                border: '1px solid #000',
                '.title': {
                    background: '#000',
                    color: '#FFF',
                    margin: 0,
                    padding: 10,
                    fontWeight: 'bold'
                }
            }}
        >
            <Box className='title'>Informasi Ongkir - {shippingCost.name}</Box>
            <Box
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 10,
                    padding: 10
                }}
            >
                {shippingCost.costs.map((x) => (
                    <Box
                        css={{
                            padding: '10px',
                            background: '#e7e7e7',
                            border: '1px solid #b6b6b6',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10,
                        }}
                    >
                        <Box><b>{x.service}</b> - {x.description}</Box>
                        {x.cost.map((c) => (
                            <Box
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 10,
                                    p: {
                                        margin: 0,
                                        fontSize: 22
                                    }
                                }}
                            >
                                <Box>
                                    <label>Estimasi Pengiriman (Hari): </label>
                                    <p>{c.etd}</p>
                                </Box>
                                <Box>
                                    <label>Biaya: </label>
                                    <p>{numeral(c.value).format('0,0')}</p>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default CostResut