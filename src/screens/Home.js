import { Button, Image, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSach } from '../redux/actions/sachAction'
import Banner from '../component/Banner'
import DanhSach from '../component/DanhSach'

const Home = () => {
    const listSach = useSelector(state => state.listSach.listSach)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //       dispatch(fetchSach());
    //     });

    //     return unsubscribe;
    //   }, [navigation, dispatch])

    useEffect(() => {
        if(listSach == 0){
            dispatch(fetchSach())
        }
    }), [dispatch, listSach]

    return (
        <View>
            <Banner url={'https://static-cse.canva.com/blob/1167222/banner.a3b267e7.jpg'} />
            <DanhSach listSach={listSach} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})