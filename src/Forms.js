import React, {Component} from 'react'

class Forms extends Component {
    constructor() {
        super()
        this.state = {
            nameInput: "",
            emailInput: "",
            telephoneInput: "",
            messageInput: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    
    render(){
        return(
            <section class='container-fluid'>
                <div class='row'>
                    <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <form>
                            <label><p>Qual o seu nome?</p></label>
                            <input 
                            name="nameInput"
                            value={this.state.nameInput} 
                            type="text" class="input" 
                            onChange={this.handleChange} 
                            required />
    
                            <label><p>Qual o seu e-mail?</p></label>
                            <input 
                            name="emailInput"
                            value={this.state.emailInput} 
                            type="text" 
                            class='input' 
                            placeholder="seuemail@exemplo.com" 
                            onChange={this.handleChange} 
                            required />
    
                            <label><p>Qual o seu telefone?</p></label>
                            <input 
                            name="telephoneInput"
                            value={this.state.telephoneInput} 
                            type="tel" 
                            class='input' 
                            placeholder="(DDD) XXXXX-XXX" 
                            onChange={this.handleChange} 
                            required />
    
                            <label><p>Deixe sua mensagem:</p></label>
                            <textarea 
                            name="messageInput"
                            value={this.state.messageInput} 
                            class='input' 
                            onChange={this.handleChange} 
                            required />
    
                            <button class="button">Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Forms