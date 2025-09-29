import React, { useState } from 'react';
import { CircleStencil, Cropper } from 'react-advanced-cropper';

const CropModal = () => {
    const [image] = useState(
        'https://images.unsplash.com/photo-1599140849279-1014532882fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
    );

    return (
        <Cropper
        src={image}
        stencilProps={{
            aspectRatio: {
                minimum: 16/8,
                maximum: 4/8
            }
        }}
    />
    )
};
export default CropModal