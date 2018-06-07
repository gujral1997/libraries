import React, {Component} from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base'; 
import CardSection from '../CardSection'
import { connect } from 'react-redux';
import * as actions from '../../actions'; 

class ListItem extends Component {
    componentDidMount() {
        if(Platform.OS==='android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const {library, expanded} = this.props;
        if(expanded) {
            return (
                <CardItem>
                    <Text>{this.props.library.description}</Text>
                </CardItem>
            )
        }
    }
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        return (
            <TouchableWithoutFeedback
            onPress={()=> {
                this.props.selectLibrary(id)
            }}
            >
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={titleStyle}>{title}</Text>
                        </Body> 
                    </CardItem>
                    {this.renderDescription()}
                </Card>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem); // pass null everytime if you dont want to pass mapStateToProps