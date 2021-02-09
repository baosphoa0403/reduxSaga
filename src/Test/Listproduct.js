import React from 'react'
import　Axios from "axios"
import Product from './Product';
import Table from './Table';
import LoginFacebook from './LoginFacebook';
export default function Listproduct() {
    const [data, setData]  = React.useState();
    const [arrGioHang, setArr] = React.useState([]);

    React.useEffect(()=>{
      Axios({
          method: "GET",
          url: "https://nike0403.herokuapp.com/product"
      }).then((rs)=>{
          console.log(rs.data);
          setData(rs.data)
      }).catch((error)=>{
          console.log(error);
      })
    }, [])

    const render = () => {
        return data?.map((item, index)=>{
            return <Product item={item} add= {add} key={index} />
        })
    }
    const  tets = () => {
       if (data) {
        for (const item of data) {
            const  colors = item.imgDetails.filter((item, index)=>{
               return item.color === "blue"
            }).map((item)=>{
                return item.color
             })
            console.log(colors);
            
        }
       }
    }
    
    const add  = (value) => {
     console.log(value.name);
     setArr([...arrGioHang, value])
     
    }
    const timViTri = (value) => {
       return arrGioHang.findIndex((item)=> item._id === value)
    }
    const xoa = (value) => {
        // console.log(value);
        const index = timViTri(value._id);
        console.log(index);
        const arrGioHang1 = [...arrGioHang];
        arrGioHang1.splice(index, 1);
        setArr(arrGioHang1)
        // setArr([...arrGioHang, arrGioHang.splice(index, 1)]);
        
    }
    const sum = () => {
         arrGioHang.reduce((sum, item)=>{
            return sum += item.price
        }, 0)
    }

    return (
        <div>
            
            <LoginFacebook/>
            <h1>List product</h1>
            <p>tổng tiền: {sum()} </p>
            <Table arrGioHang={arrGioHang} xoa={xoa}/>
            <div className="row">
            {render()}
            {tets()}
            </div>
            
            
        </div>
    )
}
