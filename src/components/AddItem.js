import React, { useState } from 'react'
import './AddItem.css';

const AddItem = ({ handleAddItem }) => {
    const [itemTitle, setItemTitle] = useState('')
    const [itemQuantity, setItemQuantity] = useState('')
    const [itemPrice, setItemPrice] = useState('')

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
                title: itemTitle,
                quantity: itemQuantity,
                price: itemPrice
            }
            handleAddItem(newItem)
            setItemTitle('')
            setItemQuantity('')
            setItemPrice('')
        } else {
            alert('Title is required')
        }
    }

    return (
        <div className='add-item-container'>
            <form onSubmit={handleSubmit}>
                <label>
                    Tulis nama HP:
                    <input value={itemTitle} onChange={handletTitle} className='add-item-title' type="text" placeholder='Handphone Name'></input>
                </label>
                <label>
                    Quantity:
                    <input value={itemQuantity} onChange={handleQuantity} className='add-item-description' type="text" placeholder='Quantity'></input>
                </label>
                <label>
                    Price:
                    <input value={itemPrice} onChange={handlePrice} className='add-item-description' type="text" placeholder='Price'></input>
                </label>
                <button type="submit" className='add-item-button'>Add</button>
            </form>
        </div>
    )
}

export default AddItem