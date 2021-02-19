import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../components/card';

const Home = (prop) => {

    const data = useSelector((state) => state.todo);

    return (
        <View>
            <ScrollView style={styles.ScrollView}>
                {data.map((todo) => <Card style={{
                    backgroundColor: todo.isMissed ? '#ea382e' : 'white',
                    height: 200,
                    margin: 10,
                    alignItems: 'center'
                }}
                    key={Math.random().toString()}
                >
                    <Text
                        style={styles.title}>
                        {todo.title}
                    </Text>
                    <Text
                        style={styles.work}
                        numberOfLines={3}
                        ellipsizeMode='tail'>
                        {todo.work}
                    </Text>
                    <View style={styles.timeDate}>
                        <Text>{todo.time}</Text>
                        <Text>{todo.date}</Text>
                    </View>
                </Card>)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'black',
    },
    work: {
        width: '100%',
        fontSize: 15,
        marginTop: 10,
        alignItems: 'flex-end'
    },
    ScrollView: {
    },
    timeDate: {
        flex: 1,
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    }
});

export default Home;