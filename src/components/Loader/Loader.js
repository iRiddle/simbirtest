import React from 'react';
import Loader from 'react-loader-spinner';

const CommonLoader = () => {
    return (
        <Loader
            type="Oval"
            color="#006492"
            height={50}
            width={50}
        />
    );
}

export default CommonLoader
