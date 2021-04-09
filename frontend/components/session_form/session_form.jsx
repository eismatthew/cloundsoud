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
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }
    
    renderErrors() {
        return(
          <ul>
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
        this.props.loginDemoUser().then(this.props.closeModal);;
    }

    render () {
        const formInputs = this.props.formType === 'login' ? (
            <div classname='modal-login'>
                <label>Username or Email:
                    <input type='text'
                        value={this.state.credentials}
                        onChange={this.update('credentials')}
                        className="login-input"
                    />
                </label>
                <br/>
                <label>Password:
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                    />
                </label>
                <br/>
            </div>
        ) : (
            <div classname='modal-signup'>
                <div className='modal-demo-login'>
                    <button className="modal-button" id="demo-login" onClick={(e) => this.handleDemo(e)}>Demo Login</button>
                </div>
                <div>
                    <label>Username:
                        <input type='text'
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="login-input"
                        />
                    </label>
                </div>
                    <label>Email:
                        <input type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                        />
                    </label>
                <br/>
                    <label>Password:
                    <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                        />
                    </label>
                <br/>
            </div>
        )



        return (
            <div className='login-form-container'>
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                    {/* Please {this.props.formType} */}
                    <div onClick={this.props.closeModal} className="close-modal"></div>
                    {this.renderErrors()}
                    <div className='login-form'>
                        {formInputs}
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>   
            </div>
        );
    }
}

export default withRouter(SessionForm);