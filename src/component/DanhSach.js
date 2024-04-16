import { Button, Image, Modal, ScrollView, StyleSheet, Text, ToastAndroid, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/actions/cartAction'

const DanhSach = ({ listSach }) => {    
    const [ttct, setTtct] = useState(false)

    const dispatch = useDispatch();

    const [ma_sach_ph43159, setma_sach_ph43159] = useState('')
    const [tieu_de_ph43159, settieu_de_ph43159] = useState('')
    const [tac_gia_ph43159, settac_gia_ph43159] = useState('')
    const [nam_xuat_ban_ph43159, setnam_xuat_ban_ph43159] = useState('')
    const [so_trang_ph43159, setso_trang_ph43159] = useState('')
    const [the_loai_ph43159, setthe_loai_ph43159] = useState('')
    const [so_luong_ph43159, setSo_luong_ph43159] = useState('')
    const [hinh_anh_2024_ph43159, sethinh_anh_2024_ph43159] = useState('')
    const [don_gia_2024_ph43159, setdon_gia_2024_ph43159] = useState('')

    const handlerAdd = (row) => {
        const newData = {
            product: {
                ...row
            },
            soluong: 1
        }
        console.log(newData);

        dispatch(addToCart(newData))
            .then(() => {
                ToastAndroid.show('Them thanh con', ToastAndroid.SHORT)
            })
            .catch(err => console.log('Loi try catch: ' + err))

    }

    return (
        <ScrollView>
            <View>
                {
                    listSach.map(row => (
                        <View key={row.id} style={{ marginTop: 10, padding: 10, backgroundColor: 'cyan' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setma_sach_ph43159(row.ma_sach_ph43159)
                                    settieu_de_ph43159(row.tieu_de_ph43159)
                                    settac_gia_ph43159(row.tac_gia_ph43159)
                                    setnam_xuat_ban_ph43159(row.nam_xuat_ban_ph43159)
                                    setso_trang_ph43159(row.so_trang_ph43159)
                                    setthe_loai_ph43159(row.the_loai_ph43159)
                                    setSo_luong_ph43159(row.So_luong_ph43159)
                                    sethinh_anh_2024_ph43159(row.hinh_anh_2024_ph43159)
                                    setdon_gia_2024_ph43159(row.don_gia_2024_ph43159)

                                    setTtct(true)
                                }}>
                                <Text>{row.ma_sach_ph43159}</Text>
                                <Text>{row.tieu_de_ph43159}</Text>
                            </TouchableOpacity>
                            <Button onPress={() => {
                                handlerAdd(row);
                            }} title='Add to cart' />
                        </View>
                    ))
                }
            </View>

            <Modal
                animationType='slide'
                transparent={true}
                visible={ttct}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: 'white', padding: 15 }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: hinh_anh_2024_ph43159 }} />
                        <Text>Mã sách: {ma_sach_ph43159}</Text>
                        <Text>Tiêu đề: {tieu_de_ph43159}</Text>
                        <Text>Tác giả: {tac_gia_ph43159}</Text>
                        <Text>Năm xuất bản: {nam_xuat_ban_ph43159}</Text>
                        <Text>Số trang: {so_trang_ph43159}</Text>
                        <Text>Thể loại: {the_loai_ph43159}</Text>
                        <Text>Số lượng: {so_luong_ph43159}</Text>
                        <Text>Đơn giá: {don_gia_2024_ph43159}</Text>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Button title='Cancel' onPress={() => setTtct(false)} />
                            <Button style={{ marginLeft: 20 }} title='Add to cart' />
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView >
    )
}

export default DanhSach

const styles = StyleSheet.create({})