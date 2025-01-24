## DevTinder

 - tailwind css - css framework
 - daisy UI - component library to design
 - 


## setting redux
- install redux toolkit ---> npm install @reduxjs/toolkit react-redux
- create a store using configureStore
- wraps the app and provide store to the entire application using Provider
- create slices ( reducers + actions) using createSlice
    - pass object containing actions to reducers of slice
    - export reducer and actions
- provide the created slices to the reducer of store created in configureStore
- Now u are ready to save in the store
    - to save in store u disptach an action using a hook named as useDispatch
- How to use the saved data in the store :-
    - susbcribe the store using a hook named useSelector 
    - susbcribing to a particular field in the stored data.