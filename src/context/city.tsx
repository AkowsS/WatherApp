import React, { useState } from 'react';

interface Cityprops{
  addCity: (name:CityInfo) => void;
  removeCity: (name:string)=>void;
  cityList:any[];
}

export interface CityInfo {
  name?:string;
  count: number,
}

export const ValueContext = React.createContext({} as Cityprops);

interface ValueChildrenProps {
  children: React.ReactNode;
};

export const ValueProvider: React.FC <ValueChildrenProps> = ({ children }) =>{
  const [ cityList , setCityList ] = useState<any[]>([]);
  
  const addCity = (name : any) => {
    const newList = [...cityList];
    const inList = newList.some(item => item === name);
    if(inList) return alert("Cidade ja adicionada")

    newList.push(name)
    setCityList(newList);
  };

  // const removeCity = (name: string) => setCityList(cityList?.filter((item) => (item.name !== name)));
  const removeCity = (city: any) => {
    const newList = cityList.filter(cityName => cityName !== city)
    setCityList(newList);
  }

  return (
      <ValueContext.Provider value={{
        addCity,
        removeCity,
        cityList,
      }}>
        {children}
      </ValueContext.Provider>
  );
};