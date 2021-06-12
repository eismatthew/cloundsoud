import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            credentials: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => {
                this.props.closeModal();
                this.props.history.push('/discover')
        })
            
            
            
    }
    
    renderErrors() {
        return(
          <ul className='error-box'>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
    }

    handleDemo(e) {
        e.preventDefault();

        this.props.loginDemoUser().then(this.props.closeModal);
    }

    render () {
        const formInputs = this.props.formType === 'login' ? (
            <div className='modal-login'>
            <div className='login-input-container'>
                <label>Username or Email:
                    <input type='text'
                        value={this.state.credentials}
                        onChange={this.update('credentials')}
                        className="login-input"
                    />
                </label>
            </div>
            <div className='login-input-container'>
                <label>Password:
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                    />
                </label>
            </div>
            <br/>
            </div>
        ) : (
            <div className='modal-signup'>
            <div className='signup-input-container'>
                    <label>Username:
                        <input type='text'
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="signup-input"
                        />
                    </label>
            </div >
            <div className='signup-input-container'>
                    <label>Email:
                        <input type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="signup-input"
                        />
                    </label>
            </div>
            <div className='signup-input-container'>
                    <label>Password:
                    <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="signup-input"
                        />
                    </label>
            </div>
                <br/>
            </div>
        )



        return (
            
            <div className='login-form-container'>
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                    {/* Please {this.props.formType} */}
                    <div onClick={this.props.closeModal} className="close-modal"></div>
                    {/* {this.renderErrors()} */}
                    <div className='login-form'>
                        {formInputs}
                        <input className="session-submit" type="submit" value='Continue'/>
                        {this.renderErrors()}
                    </div>
                </form>   
            </div>
        );
    }
}

export default withRouter(SessionForm);