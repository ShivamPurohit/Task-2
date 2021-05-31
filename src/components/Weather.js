import React, { useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { selectWeatherData } from '../reducers/reducer'
import { weatherDataReducer} from '../reducers/reducer'
import axios from 'axios'

export const Weather = () => {

    const dispatch = useDispatch()
     const weatherData = useSelector(selectWeatherData)

    useEffect(()=> {
      
            const url  = 'http://api.openweathermap.org/data/2.5/weather?q=Dehradun&appid=2712cea70c7dfa5a562cecd318ac7892&units=metric'
              axios.get(url)
              .then((res) => {
                  console.log(res);
                dispatch(weatherDataReducer(res.data));
              })
              .catch(err => alert(err.message))

    }, [])

    return (
        <div>
            <div className="weather__data">
                <h1>{weatherData.main?.temp} Degree celcius</h1>
                <h5>{weatherData?.name}, India</h5>
            </div>
        </div>
    )
} 

export default Weather;