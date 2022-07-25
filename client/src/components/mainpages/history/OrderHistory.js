import React, {useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
                    const res = await axios.get('/api/payment', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }else{
                    const res = await axios.get('/user/history', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    },[token, isAdmin, setHistory])

    return (
        <div className="history-page">
            <h2>주문내역</h2>

            <h4>{history.length} 주문건수가 있습니다</h4>

            <table>
                <thead>
                    <tr>
                        <th>날짜</th>
                        <th>자세히</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(items => (
                            <tr key={items._id}>
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                <td><Link to={`/history/${items._id}`}>상세보기</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory
