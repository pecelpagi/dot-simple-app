import React, { useContext } from 'react'
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import PageContext from './PageContext';
import Box from '../../components/Box';
import { styled } from '../../stitches.config';

const StyledForm = styled('form', {
    display: 'flex',
    gap: 15,
    flexDirection: 'column',
    input: {
        width: 400,
    },
    '.error': {
        color: '#F00'
    }
});

const Form = () => {
    const { apiKey, onChangeApiKey, onSubmit, error } = useContext(PageContext);

    return (
        <StyledForm onSubmit={onSubmit}>
            <InputText value={apiKey} title="API KEY" onChange={(e) => { onChangeApiKey(e.target.value); }} />
            {error && <Box className="error">{error}</Box>}
            <Button value="Masuk" />
        </StyledForm>
    )
}

export default Form