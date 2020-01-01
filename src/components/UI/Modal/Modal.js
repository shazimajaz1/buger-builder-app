import React, {Component} from 'react'
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
//A model is like pop up box that shows up on the screen.
class Modal extends Component {

    //Make sure that order summary is only updated when
    //it is showing!
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show;
    }

    render() {

        return (
            <React.Fragment>
                <Backdrop show={this.props.show}
                          clicked={this.props.modalClosed}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'

                    }}>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }

}

export default Modal;