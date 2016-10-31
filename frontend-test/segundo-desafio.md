# Segundo desafio - Formulário de cadastro

A ideia é criar um pequeno formulário de cadastro para contatos e mostrar os contatos cadastrados na mesma tela.

## Formulário

Os campos do formulário devem ser:  
- Nome
- Telefone
- Email

O formulário deve ter dois botões:
- Botão "Salvar" - Este botão vai enviar os dados dos campos preenchidos para a **Lista de contatos**.
- Botão "Cancelar" - Este botão vai limpar os dados preenchidos.

### Validação
Você deverá validar os campos quando o cursor deixar o campo e quando o botão "Salvar" for clicado

#### Regras para validação

##### Nome:
- Deve aceitar somente letras.  
- Não pode aceitar números ou caracteres especiais  

##### Telefone
- Deve aceitar somente números e os caracteres `()` e `-`.
- Não pode aceitar letras ou caracteres especiais.
- Se possível crie uma máscara para separar o DDD do número de telefone seguindo o  formato: `(xx)` xxxx-xxxx`.

##### E-mail
- Deve seguir o formato padrão de email `xxx@xx.xx`  
- Deve aceitar letras, números e os caracteres `@`, `.`, `-` e `_`
- Não pode aceitar o restante dos caracteres especiais.

## Lista de contatos

Você deve mostrar os contatos cadastrados na mesma página, seguindo o seguinte formato:

**Xxxxxxxx Xxxxxxx**  
(xx) xxxx-xxxx - xxx@xxx.xx  

## Compatibilidade browsers
IE9+, Chrome, Firefox
