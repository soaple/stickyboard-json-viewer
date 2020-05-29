// src/JsonViewer.js

import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styled from 'styled-components';

const Wrapper = styled.div``;

class JsonViewer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { jsonObject } = this.props;

        if (!jsonObject) {
            return <div>JSON object is invalid!</div>;
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
