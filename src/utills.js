import React from 'react'

export function getItem(label, key, icon , children, type){
    return{
        key,
        icon,
        children,
        label,
        type,
    }
}

export const getBase64 = (file) => 
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });


// Lưu cart vào local storage nhé
export const saveCart = (newCartItem) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push(newCartItem);
    localStorage.setItem('cart', JSON.stringify(existingCart));
};
    
// Lấy cart từ Local Storage
export const getCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
};

// Xóa SP trong cart
export const deleteCart = (id) => {
    let existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Tìm index của phần tử có id trùng với id được truyền vào
    const index = existingCart.findIndex(item => item.id === id);

    // Nếu tìm thấy phần tử, xóa nó ra khỏi mảng
    if (index !== -1) {
        existingCart.splice(index, 1);
    }

    // Lưu lại mảng đã cập nhật vào Local Storage
    localStorage.setItem('cart', JSON.stringify(existingCart));
};

// Lưu access token vào Local Storage
export const saveAccessToken = (accessToken) => {
    localStorage.setItem('accessToken', accessToken);
};

// Lấy access token từ Local Storage
export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
};

