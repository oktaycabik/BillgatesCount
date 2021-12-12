import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:"counter",
    initialState:{
        value:1000000,
        products:[
            {   
                id:1,
                name:"araba",
                price:100000
            },
            {   id:2,
                name:"laptop",
                price:7000
            },
            {   id:3,
                name:"saat",
                price:500
            }
        ]
    },
    reducers:{
        increment:(state)=>{
           state.value += 1
        },
        buyproduct:(state,data)=>{
            state.value=state.value - data.payload
        },
        sellproduct:(state,data)=>{
            
            state.value= Number(data.payload) + state.value
         
        },
        addproduct:(state,data)=>{
            
        state.products.push(data.payload)
        },
        deleteproduct:(state,data)=>{
            const name=data.payload
            const filtered=state.products.filter((item)=>item.name !==name)
            state.products=filtered

        },
        alldelete:(state)=>{
            state.products=[]
        }
    }
})

export default counterSlice.reducer 
export const {increment}=counterSlice.actions
export const {buyproduct}=counterSlice.actions
export const {sellproduct}=counterSlice.actions
export const {addproduct}=counterSlice.actions
export const {deleteproduct}=counterSlice.actions
export const {alldelete}=counterSlice.actions