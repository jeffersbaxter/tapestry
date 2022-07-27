import { Fragment } from 'react';
import Whiteboard from '../../components/whiteboard/whiteboard.component';

const Algorithms = () => (
    <Whiteboard 
        title='algorithms' 
        children={
            <Fragment>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </Fragment>
        }
    />
);

export default Algorithms;