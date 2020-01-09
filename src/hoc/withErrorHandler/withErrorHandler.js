import React, {Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'

/*
This is a higher order component that provides error handling functionality.
 */
const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {

        state = {
            error: null
        };


        //We want to make sure that we register the interceptors before the
        //components are mounted!
        componentWillMount = () => {

            //Clear any error
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });


            this.responseInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({
                    error: error
                })
            })
        };

        componentWillUnmount = () => {

            console.log("componentWillMount was called!");
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        };

        errorConfirmedHandler = () => {
            this.setState({error: null})
        };

        render() {
            return (
                <React.Fragment>

                    <Modal show={this.state.error}
                           modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </React.Fragment>
            )
        }


    }
};

export default withErrorHandler;