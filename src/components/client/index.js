import React, { Component } from 'react';
import { Container } from './styles';
import Input from '../reusable/input';
import Button from '../reusable/button';

export default class Client extends Component {
    render() {
        return(
          <>
            <Container>
              <p>
                Cadastrar endereço de cliente
              </p>
              <Input newPlaceholder="nome e sobrenome do cliente" />
              <Input newPlaceholder="peso da entrega" />
              <Input newPlaceholder="endereço do cliente" />
              <Button title="cadastrar cliente" type="cadastrar" />
              <Button title="resetar cadastro" type="limpar" />
            </Container>
          </>
        )
    }
}
