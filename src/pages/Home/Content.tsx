import React, { useContext } from 'react'
import Box from '../../components/Box';
import SelectOriginData from './SelectOriginData';
import SelectDestinationData from './SelectDestinationData';
import InputNumber from '../../components/InputNumber';
import PageContext from './PageContext';
import SelectCourier from './SelectCourier';
import Button from '../../components/Button';
import CostResult from './CostResult';

const Content = () => {
    const { error, weight, onSetData, onFetchCost, onLogout } = useContext(PageContext);

    return (
        <Box
            css={{
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 15,
                '.error': {
                    color: '#F00'
                },
                form: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 15,
                },
            }}
        >
            <form onSubmit={onFetchCost}>
                <Box
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: 15,
                        '@lg': {
                            gridTemplateColumns: '1fr 1fr',
                        }
                    }}
                >
                    <SelectOriginData />
                    <SelectDestinationData />
                </Box>
                <Box
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: 15,
                        '@sm': {
                            gridTemplateColumns: '1fr 1fr',
                        }
                    }}
                >
                    <InputNumber value={weight} title="Berat (gr)" onChange={(e) => { onSetData('weight', e.target.value); }} />
                    <SelectCourier />
                </Box>
                {error && <Box className="error">{error}</Box>}
                <Box
                    css={{
                        display: 'flex',
                        gap: 10,
                    }}
                >
                    <Button value="Cek Ongkir" />
                    <Button outlined value="Log Out" type="button" onClick={onLogout} />
                </Box>
            </form>
            <CostResult />
        </Box>
    )
}

export default Content;