import React, { useEffect, useState } from 'react'
import './ItemCard.css'

const ItemCard = ({ item, handleDeleteItem, handleEditItem }) => {
    const [isEdit, setIsEdit] = useState(false)

    // for edit
    const [itemTitle, setItemTitle] = useState('')
    const [itemQuantity, setItemQuantity] = useState('')
    const [itemPrice, setItemPrice] = useState('')

    useEffect(() => {
        setItemTitle(item.title)
        setItemQuantity(item.quantity)
        setItemPrice(item.price)
    }, [item])

    const handleDelete = () => {
        handleDeleteItem(item)
    }

    const handleEdit = () => {
        setIsEdit(true)
    }

    const handletTitle = (e) => {
        const val = e.target.value;
        setItemTitle(val)
    }

    const handleQuantity = (e) => {
        const val = e.target.value;
        setItemQuantity(val)
    }

    const handlePrice = (e) => {
        const val = e.target.value
        setItemPrice(val)
    }


    const handleValidation = () => {
        if (itemTitle === '') {
            return false
        } else {
            return true
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (handleValidation()) {
            const newItem = {
                id: item.id,
                title: itemTitle,
                quantity: itemQuantity,
                price: itemPrice
            }
            handleEditItem(newItem)
            setIsEdit(false);
            setItemTitle('')
            setItemQuantity('')
            setItemPrice('')
        } else {
            alert('Name is required')
        }
    }

    return (
        <div className='card-container'>
            {isEdit
                // when edit = true
                ?
                <form onSubmit={handleSubmit}>
                    <h4>Edit Item</h4>
                    <label>
                        Tulis nama HP:
                        <input value={itemTitle} onChange={handletTitle} type="text" placeholder='Handphone Name'></input>
                    </label>
                    <label>
                    Quantity:
                    <input value={itemQuantity} onChange={handleQuantity} className='add-item-description' type="text" placeholder='Quantity'></input>
                </label>
                    <label>
                    Price:
                    <input value={itemPrice} onChange={handlePrice} className='add-item-description' type="text" placeholder='Quantity'></input>
                </label>
                    <button type="submit" className='edit-item-button'>Save</button>
                </form>
                //when edit = false
                :
                <>
                    <div className='content-container'>
                        <h2>HP : {item.title} </h2>
                        <p>Quantity : {item.quantity}</p>
                        <p>Price : {item.price}</p>
                    </div>
                    <button className='card-button' onClick={handleDelete}>Delete</button>
                    <button className='card-button' onClick={handleEdit}>Edit</button>
                </>
            }
        </div>
    )
}

export default ItemCard