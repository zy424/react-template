import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { action } from 'app/redux/Store';
import HelloWorld from 'app/components/HelloWorld';

class App extends PureComponent {
    componentDidMount() {
        action('FETCH_DATA');
    }

    render () {
        const { data } = this.props;

        return (
            <Fragment>
                <HelloWorld />
                <div>
                    { data }
                </div>
            </Fragment>
        );
    }
}

App.propTypes = {
    data: PropTypes.string,
};

App.defaultProps = {
    data: '',
};

export default connect(store => ({
    data: store.Data.data,
}))(App);
