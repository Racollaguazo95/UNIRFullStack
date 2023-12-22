import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../views/Home'
import { ItemCategory } from '../views/ItemCategory'
import { ItemDetails } from '../views/ItemDetails'
import { ShopCart } from '../views/ShopCart'
import { CardsBusquedaFormat } from '../components/CardsBusquedaFormat'

export const StoreRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/pcbuilds" element={<ItemCategory />} />
            <Route path="/laptops" element={<ItemCategory />} />
            <Route path="/fuentes" element={<ItemCategory />} />
            <Route path="/gpus" element={<ItemCategory />} />
            <Route path="/ssd" element={<ItemCategory />} />
            <Route path="/accesorios" element={<ItemCategory />} />
            <Route path="/carrito" element={<ShopCart />} />
            <Route path="/buscar" element={<CardsBusquedaFormat />} />
            <Route path="/pcbuilds/detalles/:itemId" element={<ItemDetails />} />
            <Route path="/laptops/detalles/:itemId" element={<ItemDetails />} />
            <Route path="/fuentes/detalles/:itemId" element={<ItemDetails />} />
            <Route path="/gpus/detalles/:itemId" element={<ItemDetails />} />
            <Route path="/ssd/detalles/:itemId" element={<ItemDetails />} />
            <Route path="/accesorios/detalles/:itemId" element={<ItemDetails />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}
