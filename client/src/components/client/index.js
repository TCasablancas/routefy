import React, { Component } from 'react';
import { Container, ButtonsContainer, UserSearch } from './styles';
import Input from '../reusable/input';
import Button from '../reusable/button';
import UserData from './userData';
import { useSpring, animated } from "react-spring";

export default class Client extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
          <>
            <Container>
              <p>Cadastrar endereço de cliente</p>
              <Input newPlaceholder="nome e sobrenome do cliente" />
              <Input newPlaceholder="peso da entrega" />
              <Input newPlaceholder="endereço do cliente" />
              <Button title="buscar" type="buscar" />
              <UserSearch>
                <UserData

                />
              </UserSearch>
              <ButtonsContainer>
                <Button title="cadastrar cliente" type="cadastrar" />
                <Button title="resetar cadastro" type="limpar" />
              </ButtonsContainer>
            </Container>
          </>
        )
    }
}
