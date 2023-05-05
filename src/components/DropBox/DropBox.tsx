import React from "react"
import { DropDown, FavCity, ButtonSubmit, SearchDiv} from "./DropBox.styles"
import { ValueContext } from "../../context/city";
import buttonX from "../../public/img/botao-x.png"

type Cityprops = {
  setCity:(city:string) => Promise<void>
}

export const DropBox : React.FC <Cityprops>= ({setCity}) =>{
  const { removeCity, cityList} = React.useContext(ValueContext)
  
  return(
    <DropDown>
      <div className="dropdown">
        <SearchDiv>
          <input
            type="text"
            placeholder="Search a city..."
            onChange={(e: any) => setCity(e.target.value)}
            className="dropDown"
          />
          <button>search</button>
        </SearchDiv>
        
        <div className="dropdown-content">
        {
          cityList?.map((item:string) =>{
            return (
              <FavCity>
                <ButtonSubmit type="submit">
                <FavCity onClick={()=>setCity(item)}>  
                {item} 
                </FavCity>
              </ButtonSubmit>
                <div onClick={()=>removeCity(item)}>
                  <img src={buttonX}  alt="delet"/>
                </div>
              </FavCity>
              
            )
          })
        }
        </div>
      </div>
    </DropDown>
  );
};