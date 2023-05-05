import {
  Container,
  MainBox,
  DivImg,
  DivInfos,
  InputDiv,
  DivElements,
  Element,
  FirstResearch,
  FavButton,
} from "./HomePage.styles";
import { api } from "../config/api";
import { useContext, useState } from "react";
import {
  degToCompass,
  kelvinToCelsius,
  metersToKm,
} from "../utils/format";
import { getTime, getWeekDay } from "../utils/helpers";
import React from "react";
import {ValueContext, CityInfo} from "./../context/city"
import { DropBox } from "../components/DropBox";
import favButton1 from "../public/img/marca-paginas.png"
import favButton2 from "../public/img/marca-paginas2.png"
import Logo from "../public/img/Weather-icon.png"
import { Load } from "../components/Load";

export const HomePage: React.FC = () => {
  const [changeWindow, setChangeWindow]= useState(false);
  const [city, setCity] = useState("");
  const [verifyPage, setVerifyPage] = useState(false);
  const appId = "0bba2d003204dbffb86db855e0e9c9e7";
  const [system, setSystem] = useState<"metric" | "imperial">("metric");
  const [dataCity, setDataCity] = useState<any>();
  const [load, setLoad] = useState(false);

  const {addCity, cityList, removeCity} = useContext(ValueContext);

  const findCity = async( city: string)=>{
    setCity(city);
    favImage;
  }

  const weatherIcon = (weather: string) => {
    switch (weather) {
      case "Thunderstorm":
        return "cloud-lightning";
      case "Drizzle":
        return "cloud-drizzle";
      case "Rain":
        return "cloud-rain";
      case "Snow":
        return "cloud-snow";
      case "Clear":
        return "sun";
      case "Clouds":
        return "cloud";
      default:
        return "mist";
    }
  }; 
  
  const onInputCity = async (event: any) => {
    setVerifyPage(true);
    event.preventDefault();

    try{
      setLoad(true);
      const result = await api.get(`weather?q=${city}&appid=${appId}`);
      const data = {
        id: result.data.id,
        name: result.data.name,
        country: result.data.sys.country,
        temp: result.data.main.temp,
        feels_like: result.data.main.feels_like,
        weather: result.data.weather[0].main,
        description: result.data.weather[0].description,
        humidity: result.data.main.humidity,
        visibility: result.data.visibility,
        wind_direction: result.data.wind.deg,
        wind_speed: result.data.wind.speed,
        sunrise: result.data.sys.sunrise,
        sunset: result.data.sys.sunset,
        timezone: result.data.timezone,
        dt: result.data.dt,
      };
      setDataCity(data);
    }catch(result){
      setVerifyPage(false);
      alert("City not found")
    }finally{
      setLoad(false);
    }
    //const result = await api.get(`weather?q=${city}&appid=${appId}`);
    
    
  };

  const favImage = (val:any)=>{
    console.log("entrou")
    console.log(cityList.find((item:string) => item===val)?"true":"false")
    if(cityList.find((item:string) => item===val)){
      removeCity(val);
    }else{
      addCity(val);
    }
  };

  return (
    <Container>
      <Load loadwin={load}/>
      <FirstResearch style={verifyPage===true?{display:"none"}:{display:"grid"}}>
        <h1>Current climate <p>app</p></h1>
        <div>
          <img src={Logo} alt="img" />
        </div>
        <form onSubmit={onInputCity}>
          <p>Search for a city!</p>
          <DropBox setCity={findCity}/>
        </form>
      </FirstResearch>
      {dataCity ? (
        <MainBox style={verifyPage===true?{display:"grid"}:{display:"none"}}>
          <Load loadwin={load}/>
          <DivImg>
            <h1>
              {dataCity?.name}, {dataCity.country}
              <FavButton onClick={()=>favImage(dataCity?.name)}><img src={cityList.find((item:string) => item== dataCity.name)?favButton2:favButton1}/></FavButton>
            </h1>
            <p >{dataCity?.description}</p>
            <div>
              <div>
                <img
                  src={`src/public/img/${weatherIcon(dataCity?.weather)}.svg`}
                  alt=""
                />
              </div>
            </div>
            <h2>{kelvinToCelsius(dataCity?.temp)}°C</h2>
            <h3>Feels like {kelvinToCelsius(dataCity?.feels_like)}°C</h3>
          </DivImg>
          <DivInfos>
            <InputDiv>
              <div>
                <h2>
                  {getWeekDay(dataCity?.dt, dataCity?.timezone)}
                  , {getTime(system, dataCity?.dt, dataCity?.timezone)}
                </h2>
              </div>
              <form onSubmit={onInputCity}>
              <DropBox setCity={findCity}/>
              </form>
            </InputDiv>
            <DivElements>
              <Element>
                <p>Humidity</p>
                <div className="elementValue">
                  <div>
                    <img
                      src="https://weather-app-madza.netlify.app/nextimg/%2Ficons%2Fhumidity.png/128/75?url=%2Ficons%2Fhumidity.png&w=128&q=75"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>{dataCity?.humidity}</h1>
                    <p>%</p>
                  </div>
                </div>
              </Element>
              <Element>
                <p>Wind speed</p>
                <div className="elementValue">
                  <div>
                    <img
                      src="https://weather-app-madza.netlify.app/nextimg/%2Ficons%2Fwind.png/128/75?url=%2Ficons%2Fwind.png&w=128&q=75"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>{dataCity?.wind_speed}</h1>
                    <p>m/s</p>
                  </div>
                </div>
              </Element>
              <Element>
                <p>Wind direction</p>
                <div className="elementValue">
                  <div>
                    <img
                      src="https://weather-app-madza.netlify.app/nextimg/%2Ficons%2Fcompass.png/128/75?url=%2Ficons%2Fcompass.png&w=128&q=75"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>{degToCompass(dataCity?.wind_direction)}</h1>
                  </div>
                </div>
              </Element>
              <Element>
                <p>Visibility</p>
                <div className="elementValue">
                  <div>
                    <img
                      src="https://weather-app-madza.netlify.app/nextimg/%2Ficons%2Fbinocular.png/128/75?url=%2Ficons%2Fbinocular.png&w=128&q=75"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>{metersToKm(dataCity?.visibility)}</h1>
                    <p>km</p>
                  </div>
                </div>
              </Element>
              <Element>
                <p>Sunrise</p>
                <div className="elementValue">
                  <div>
                    <img
                      src="https://weather-app-madza.netlify.app/nextimg/%2Ficons%2Fsunrise.png/128/75?url=%2Ficons%2Fsunrise.png&w=128&q=75"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>
                      {getTime(system, dataCity?.sunrise, dataCity?.timezone)}
                    </h1>
                  </div>
                </div>
              </Element>
              <Element>
                <p>Sunset</p>
                <div className="elementValue">
                  <div>
                    <img
                      src="https://weather-app-madza.netlify.app/nextimg/%2Ficons%2Fsunset.png/128/75?url=%2Ficons%2Fsunset.png&w=128&q=75"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>
                      {getTime(system, dataCity?.sunset, dataCity?.timezone)}
                    </h1>
                  </div>
                </div>
              </Element>
            </DivElements>
          </DivInfos>
        </MainBox>
      ) : (
        ""
      )}
    </Container>
  );
};
