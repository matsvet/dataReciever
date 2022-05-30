import React, {useState} from 'react';
import './App.css';
import fetch from 'node-fetch';


const sendData = () => {}

const respHaraba = async (city, mark, model, minYear, maxYear, minPrice, maxPrice, minMileage, maxMileage, sortBy, howMuchTake) => {
    if (minYear === null) {minYear = ""} else {minYear = "year_from="+minYear+"&"}
    if (maxYear === null) {maxYear = ""} else {maxYear = "year_to="+maxYear+"&"}
    if (minPrice === null) {minPrice = ""} else {minPrice = "ot="+minPrice+"&"}
    if (maxPrice === null) {maxPrice = ""} else {maxPrice = "do="+maxPrice+"&"}
    if (sortBy === null) {sortBy = ""} else {sortBy = "sort="+sortBy+"&"}
    if (minMileage === null) {minMileage = ""} else {minMileage = "km_age_from="+minMileage+"&"}
    if (maxMileage === null) {maxMileage = ""} else {maxMileage = "km_age_to="+maxMileage+"&"}

    await fetch("https://harabadealer.ru/Search/"+city+"GetCars/"+mark+"/"+model+"?"+minYear+maxYear+minPrice+maxPrice+minMileage+maxMileage+sortBy+"&take="+howMuchTake, {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "ru,en;q=0.9",
        "cache-control": "max-age=0",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Yandex\";v=\"22\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "cookie": "_ym_d=1651239542; _ym_uid=1651239542224599478; .AspNetCore.Cookies=CfDJ8LL0vQdr9OJMqf4x_p8Ki6oDhDFBFMes3wUqyjA-zCgH3uxtH_UZg1P3UkfuAmnfJTYm0VQnWKMeNdQZa-7FPUwS4w_vLsFeAA-FdKoFRHA8qvybk85PebFPZwjFN22sCgFtRdVeqysW_ZwGznbBC4GgE4DVWQ9uzQLeoYXvVJmX51JxSuJJ4X6GRHEoI2NahQlwC_IwUvgg95jLXdbCzYiyRIusVDNFpuqVpMKqz0CWiyHjPf0Ech-a_gHWycYIHxvGtjaX-S95moBGUtoQwqPPl-PUUU_RDV6rjWLoCueu6mNuMXZDB4uB5KnUfTxKP2ZGzhq6dZBRLW87OJNuMSVrkE4n6JUggzYkfsHn7fSbZgw6Nt1d0_TU864dj_Ogzjn-67R0NCRlnsp1h08aVbl2oxTgCm-cJicpHu9fV5KF_PVEaQzbRapMvpfjS5RvX18hkPN6OJ3QwmGy9654mm28irF6n-eYgmazwK6IEWCpwKo31s0V2Zembb-hg9RW7Ujc0Qv9i38FFpOKD6OuCKk; _ym_isad=1"
    },
    "referrerPolicy": "no-origin",
    "body": null,
    "method": "GET"
})};

const Harabaresult = async () => await respHaraba().then((response) => sendData(response.json()))


const Avitoresult = async () => await respAvitoRecommend().then((response) => response.json())
const AvitoHandleClick = () => Avitoresult().then((data) => console.log(data))

function App() {
    const [data, setData] = useState(null)
    return (
        <div className="App">
            PerekData: <button onClick={PerekHandleClick}>click</button>
            <br/>
            <br/>
            HarabaCheckAuth: <button onClick={() => checkAuthResponse()}>check</button>
            HarabaData: <button onClick={HarabaHandleClick}>click</button>
            <br/>
            <br/>
            AvitoRecommendData: <button onClick={AvitoHandleClick}>click</button>
        </div>
    );
}

export default App;
