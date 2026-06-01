export function criarLogin(){
    const container = document.createElement('form')

    const inputEmail = document.createElement('input')
    inputEmail.type = 'text'
    inputEmail.placeholder = 'digite seu e-mail'

    const inputSenha = document.createElement('input')
    inputSenha.type = 'password'
    inputSenha.placeholder = 'digite sua senha...'

    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'button'

    return container
}