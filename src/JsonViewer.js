// src/JsonViewer.js

import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100%;
    padding: 8px;
    overflow: scroll;
`;

const Loading = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

class JsonViewer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { jsonObject } = this.props;

        if (!jsonObject) {
            return <Loading>Loading...</Loading>;
        }

        return (
            <Wrapper>
                <ReactJson src={jsonObject} />
            </Wrapper>
        );
    }
}

JsonViewer.propTypes = {};

export default JsonViewer;
