import React from 'react';
import { StoreServiceConsumer } from '../store-service-context/store-service-context';


const withServiceGame = () => (Wrapped) => {

    return (props) => {
        return (
            <StoreServiceConsumer>
                {
                    (serviceGame) => {
                        return (<Wrapped {...props}
                            serviceGame={serviceGame} />)
                    }
                }
            </StoreServiceConsumer>

        )
    }
}

export default withServiceGame;