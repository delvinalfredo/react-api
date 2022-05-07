import React, { useState, useEffect } from 'react'
import './TokoContainer.css'
import AddItem from './AddItem'
import ItemCard from './ItemCard'
import axios from 'axios'

const TokoContainer = () => {
    const [itemList, setItemList] = useState([])

    useEffect(() => {
        updateItem()
    },[])

    const updateItem = () => {
        const accessToken = localStorage.getItem('accessToken')
        const config = {
            headers: {
                authorization: accessToken
            }
        }
        axios.get('http://localhost:3100/items/', config).then(response => {
            if (response.data.length > 0) {
                setItemList(response.data)
            }
        }).catch((error) => {
            //error handle here
            console.log("Error:", error)
        })
    }

    const handleAddItem = (newItem) => {
        axios.post('http://localhost:3100/items/',newItem).then(() => {
            updateItem()
        }).catch((error) => {
            //error handle here
            console.log("Error:", error)
        })
    }

    const handleEditItem = (editedItem) => {
        axios.put(`http://localhost:3100/items/${editedItem.id}`, editedItem).then(() => {
            updateItem()
        }).catch((error) => {
            //error handle here
            console.log("Error:", error)
        })
    }

    const handleDeleteItem = (item) => {
        axios.delete(`http://localhost:3100/items/${item.id}`).then(() => {
            updateItem();
        })
        .catch((error) => {
            //error handle here
            console.log("Error:", error)
        })
    }

    return (
        <section>
            <AddItem handleAddItem={handleAddItem} />
            {itemList.map((item,index) => {
                return <ItemCard  key={index} item={item} handleDeleteItem={handleDeleteItem} handleEditItem={handleEditItem} />
            })}
        </section>
    )
}

export default TokoContainer