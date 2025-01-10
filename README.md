# Projeto de Ecommerce sobre venda de produtos do nincho da saúde 

## Descrição
Este projeto é uma aplicação web desenvolvida com **Node.js**, **Express**, **Sequelize** e **EJS**, com foco em criar uma página dinâmica, que integra diversos conteúdos de seus produtos a partir de interações de forma altamente responsiva, + sistema de painel administrativo capaz de:
- Registrar e autenticar administradores
- Monitorar métricas como tempo de tela e cliques em botões específicos.
- Renderizar páginas dinâmicas e parciais.

## Funcionalidades Principais
### Rotas de Autenticação
- **Registro**: Permite a criação de um novo administrador com senha criptografada.
- **Login**: Valida as credenciais do administrador e cria uma sessão segura.

### Painel Administrativo
- **Painel de Controle**: Exibe dados relacionados a cliques e tempo de tela.
- **Monitoramento de Métricas**:
  - Incrementa tempo de tela baseado no uso.
  - Registra cliques em botões específicos do painel.

### Renderização de Páginas
- Páginas principais e componentes (parciais) renderizados dinamicamente usando **EJS**.

### Endpoints para Métricas
- **/painelAdm/getTime**: Incrementa o tempo de tela no banco de dados.
- **/painelAdm/clicksRegister**: Registra cliques em botões predefinidos.

## Tecnologias Utilizadas
### Dependências
- **`express`**: Framework para gerenciamento de rotas.
- **`sequelize`**: ORM para interação com o banco de dados MySQL.
- **`bcryptjs`**: Criptografia de senhas.
- **`ejs`**: Template engine para renderizar páginas dinâmicas.
- **`dotenv`**: Gerenciamento de variáveis de ambiente.
- **`axios`**: Requisições HTTP.
- **`express-session`**: Gerenciamento de sessões.

### Dependências de Desenvolvimento
- **`webpack`** e plugins relacionados: Empacotamento e otimização de assets.
- **`babel`**: Transpiler para compatibilidade de código.

## Estrutura de Rotas
### Rotas GET
- `/homepage`: Exibe a página principal.
- `/registro`: Página de registro.
- `/loginAdm`: Página de login.
- `/painelAdm`: Painel administrativo (autenticado).
- `/carregaPartial/:partial`: Renderiza parciais específicas.
- `/carregaLift/:partial`, `/carregaSecando/:partial`, `/carregaTreino/:partial`: Renderiza seções específicas.

### Rotas POST
- `/cadastro`: Registra um novo administrador.
- `/login`: Efetua login do administrador.
- `/painelAdm/getTime`: Atualiza tempo de tela no banco.
- `/painelAdm/clicksRegister`: Registra cliques em botões.
 
