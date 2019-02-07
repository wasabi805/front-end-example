import { connect } from 'react-redux';
import Presenter      from './dots-01-presenter';
import * as select from '../logic/selectors'

const mapStateToProps = (state) => ({
    dots_01: select.getDotItems01(state),
    dot_count: select.getDotCount(state)
});

const Container = connect(mapStateToProps)(Presenter);

export default Container;