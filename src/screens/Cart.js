import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCart } from '../redux/actions/cartAction';
import { useFocusEffect } from '@react-navigation/native';
const Cart = () => {
    const listCart = useSelector(state => state.listCart.listCart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch])

    const renderItem = ({ item }) => {
        return (
            <View style={{ padding: 10, marginTop: 10, backgroundColor: 'cyan' }}>
                <Text>{item.product.ma_sach_ph43159}</Text>
                <Text>{item.product.tieu_de_ph43159}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '50%', alignItems: 'center' }}>
                    <Button title='-' />
                    <Text>{item.soluong}</Text>
                    <Button title='+' />
                </View>
            </View>
        );
    }

    console.log('listCart: ' + listCart);

    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.id}
                data={listCart}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})