import React, { Component, Fragment } from "react";
import Popup from "../Popup";

const axiosErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {

    state = {
      error: null
    }

    componentDidMount() {

      // Add a request interceptor
      this.reqInterceptor = axios.interceptors.request.use((config) => {
        this.setState({ error: null })
        return config;
      });

      // Add a response interceptor
      this.resInterceptor = axios.interceptors.response.use((response) => {
        return response;
      }, (error) => {
        this.setState({ error: error });
      });
    }

    componentWillUnmount() {
      // Remove axios interceptors
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.request.eject(this.resInterceptor);
    }

    closePopup = () => {
      this.setState({ error: null })
    }

    render() {
      return (
        <Fragment>
          {
            this.state.error && <Popup
              errorType="NETWORK ERROR"
              errorMessage="Please connect to the internet and refresh your browser."
              onClick={this.closePopup} />
          }
          <WrappedComponent error={this.state.error} {...this.props} />
        </Fragment>
      )
    }
  }
};

export default axiosErrorHandler;