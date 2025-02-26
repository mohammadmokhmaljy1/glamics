import { useEffect, useState } from "react";
import Catigury from "../../../components/Catigury/Catigury";
import {GetAllCatiguries} from './../../../api/productsApi'
export default function CatiguriesContainer() {
  const [data, setData] = useState(false)
  useEffect(() => {
    async function FetchCatig(){
      try{
        const res = await GetAllCatiguries()
        if(res.status === 200) setData(JSON.parse(res.data.data))
      } catch(err) {
        console.log(err)
      }
    }
    FetchCatig()
  },[])
  return (
    <section className="ul-container">
      <div className="ul-categories">
        <div className="ul-inner-container">
          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2 row-cols-xxs-1 ul-bs-row">
            {data && data.map((catigury) =>  <Catigury key={catigury.id}/>)}
          </div>
        </div>
      </div>
    </section>
  )
}
