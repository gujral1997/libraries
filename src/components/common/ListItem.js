import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';

class ListItem extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Body>
                        <Text>{this.props.library.title}</Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default ListItem;