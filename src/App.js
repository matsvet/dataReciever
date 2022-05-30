import React, {useState} from 'react';
import './App.css';
import fetch from 'node-fetch';

const respPerek = async () => await fetch("https://www.perekrestok.ru/api/customer/1.4.1.0/catalog/product/grouped-feed", {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "ru,en;q=0.9",
        "auth": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJqdGkiOiI5ZTZmM2FmOC00ZjFhLTQ0NTYtOTA1MS0zOThlNTQ1MWQwOTkiLCJpYXQiOjE2NTM4MjQzODIsImV4cCI6MTY1Mzg1MzE4MiwiZCI6IjA0ODFjMDU4LTc2YWEtNDY1NC1hMjkxLWMzYjY5MTg1NDY2ZSIsImFwaSI6IjEuNC4xLjAiLCJpcCI6IjEwOS4yNTIuMTgyLjEwNCIsInUiOiI2OTE1MDNjYS0zOTk1LTQzMzAtOGVhZS1mNjEwMTA1MWVlODUiLCJ0IjoxfQ.AYUe5ba76pRZDb4kjtKfDdgh0WsYsJgLNf3pXIoKP0gckvB3q9c_9EYoyRI2b7JGd1bwvxCQ5ZP-I0UiILLBkn5yACAUuTFzmDO_c_hPIlJS-66ic0pijGi4BkaYP9vMi-1bw_cDTXRKKJASZ17HQctNFR-QEAHl6MzIuEbWeawpXQ9V",
        "content-type": "application/json;charset=UTF-8",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Yandex\";v=\"22\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "TS0115a7cc=01a93f7547d64f862c658380c968a30180767ad7e9d00276a40703301514cf04c774def700079da26c533a8561c43a055f5e857c8c7fa6fae7100a81060c892803180406b3; _gcl_au=1.1.1574236050.1653824392; tmr_lvid=8de96f52a1ad9f966603054f2dc70a89; tmr_lvidTS=1653824393441; _ym_uid=1653824394358746671; _ym_d=1653824394; _ym_isad=1; _ym_visorc=b; _gid=GA1.2.1881287028.1653824394; _dc_gtm_UA-189134493-1=1; flocktory-uuid=eb8cce4c-2c3b-4065-89dd-ed4cde46c92c-0; _gpVisits={\"isFirstVisitDomain\":true,\"todayD\":\"Sun%20May%2029%202022\",\"idContainer\":\"100024EE\"}; tmr_detect=0%7C1653824396454; agreements=j:{\"isCookieAccepted\":true,\"isAdultContentEnabled\":false,\"isAppAppInstallPromptClosed\":false}; _gp100024EE={\"utm\":\"1ad70b1b\",\"hits\":1,\"vc\":1,\"ac\":1}; _ga_5K49P5RFR8=GS1.1.1653824393.1.1.1653824417.36; _ga=GA1.1.517896861.1653824393; session=j:{\"accessToken\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJqdGkiOiI5ZTZmM2FmOC00ZjFhLTQ0NTYtOTA1MS0zOThlNTQ1MWQwOTkiLCJpYXQiOjE2NTM4MjQzODIsImV4cCI6MTY1Mzg1MzE4MiwiZCI6IjA0ODFjMDU4LTc2YWEtNDY1NC1hMjkxLWMzYjY5MTg1NDY2ZSIsImFwaSI6IjEuNC4xLjAiLCJpcCI6IjEwOS4yNTIuMTgyLjEwNCIsInUiOiI2OTE1MDNjYS0zOTk1LTQzMzAtOGVhZS1mNjEwMTA1MWVlODUiLCJ0IjoxfQ.AYUe5ba76pRZDb4kjtKfDdgh0WsYsJgLNf3pXIoKP0gckvB3q9c_9EYoyRI2b7JGd1bwvxCQ5ZP-I0UiILLBkn5yACAUuTFzmDO_c_hPIlJS-66ic0pijGi4BkaYP9vMi-1bw_cDTXRKKJASZ17HQctNFR-QEAHl6MzIuEbWeawpXQ9V\",\"refreshToken\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJqdGkiOiJlNTAzMDM4Ni05OWMxLTQzOTAtOTA4ZS1lMGJmNTM0NWYxZGIiLCJpYXQiOjE2NTM4MjQzODIsImV4cCI6MTY2OTM3NjM4MiwiZCI6IjA0ODFjMDU4LTc2YWEtNDY1NC1hMjkxLWMzYjY5MTg1NDY2ZSIsImFwaSI6IjEuNC4xLjAiLCJpcCI6IjEwOS4yNTIuMTgyLjEwNCIsInUiOiI2OTE1MDNjYS0zOTk1LTQzMzAtOGVhZS1mNjEwMTA1MWVlODUiLCJ0IjoyfQ.AUXLfavazmOoM6BfV580fMIg8JJ0WIX8rgMHeUqbXWmy0pdtVjBktZ2jdwo-hSxj0gy_aXmfgq-FPrKKBZ-zhHS4AAV6sg74xwjK2O3TwK5gHhSNnlj5zvg92RY8LRsjgg8UkmBzhoHGuu56qwjcH5ijeTM2MhntF0mHAG7T2kGMafg_\",\"accessTokenExpiredAt\":1653853182456,\"refreshTokenExpiredAt\":1669376382456,\"device\":{\"uuid\":\"0481c058-76aa-4654-a291-c3b69185466e\"}}; tmr_reqNum=10"
    },
    "referrerPolicy": "no-referrer",
    "body": "{\"page\":1,\"perPage\":48,\"filter\":{\"category\":470}}",
    "method": "POST"
});


const checkAuthHaraba = async () => await fetch("https://harabadealer.ru/Account/CheckAuth", {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "ru,en;q=0.9",
        "connectionid": "",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Yandex\";v=\"22\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "_ym_d=1651239542; _ym_uid=1651239542224599478; .AspNetCore.Cookies=CfDJ8LL0vQdr9OJMqf4x_p8Ki6oDhDFBFMes3wUqyjA-zCgH3uxtH_UZg1P3UkfuAmnfJTYm0VQnWKMeNdQZa-7FPUwS4w_vLsFeAA-FdKoFRHA8qvybk85PebFPZwjFN22sCgFtRdVeqysW_ZwGznbBC4GgE4DVWQ9uzQLeoYXvVJmX51JxSuJJ4X6GRHEoI2NahQlwC_IwUvgg95jLXdbCzYiyRIusVDNFpuqVpMKqz0CWiyHjPf0Ech-a_gHWycYIHxvGtjaX-S95moBGUtoQwqPPl-PUUU_RDV6rjWLoCueu6mNuMXZDB4uB5KnUfTxKP2ZGzhq6dZBRLW87OJNuMSVrkE4n6JUggzYkfsHn7fSbZgw6Nt1d0_TU864dj_Ogzjn-67R0NCRlnsp1h08aVbl2oxTgCm-cJicpHu9fV5KF_PVEaQzbRapMvpfjS5RvX18hkPN6OJ3QwmGy9654mm28irF6n-eYgmazwK6IEWCpwKo31s0V2Zembb-hg9RW7Ujc0Qv9i38FFpOKD6OuCKk; _ym_isad=1; _ym_visorc=w",
        "Referer": "https://harabadealer.ru/search?mode=online",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
});

const respHaraba = async () => await fetch("https://harabadealer.ru/Search/GetCars?take=30", {
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
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET"
});

const respAvitoRecommend = async () => await fetch("https://www.avito.ru/js/recommendations", {
    "headers": {
        "accept": "*/*",
        "accept-language": "ru,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Yandex\";v=\"22\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "tildauid=1650283332304.373946; _ym_uid=1650283334341947842; _ym_d=1650283334; u=2t9e94ay.uimvkv.efxo6stz9gg0; buyer_laas_location=637640; _gcl_au=1.1.1471527113.1650727004; sessid=0fe0fd2455fd1519f54ed99607854854.1650727032; auth=1; uxs_uid=72859030-c318-11ec-8052-ab98b586c908; __ddg1_=Tul5r5Lp0XfjuqzXnN8i; v=1653831093; luri=moskva; buyer_location_id=637640; dfp_group=89; isLegalPerson=0; showedStoryIds=163-159-158-157-156-155-147-146-145-143-142-133-135-124-129-134-132-131-128-125-121-122-120-116-115-112-104-99-94; _ym_isad=1; _ym_visorc=b; tmr_lvid=30ea7feedd7e00fbb779323608e19813; tmr_lvidTS=1653831106457; _gid=GA1.2.892656022.1653831107; _dc_gtm_UA-2546784-1=1; f=5.32e32548b6f3e9784b5abdd419952845a68643d4d8df96e9a68643d4d8df96e9a68643d4d8df96e9a68643d4d8df96e94f9572e6986d0c624f9572e6986d0c624f9572e6986d0c62ba029cd346349f36c1e8912fd5a48d02c1e8912fd5a48d0246b8ae4e81acb9fa143114829cf33ca746b8ae4e81acb9fa46b8ae4e81acb9fae992ad2cc54b8aa8fbcd99d4b9f4cbda7778bd2c4ff5e29f085d5b6a45ae867378ba5f931b08c66a59b49948619279110df103df0c26013a2ebf3cb6fd35a0ac91e52da22a560f550df103df0c26013a7b0d53c7afc06d0bba0ac8037e2b74f92da10fb74cac1eab71e7cb57bbcb8e0f71e7cb57bbcb8e0f71e7cb57bbcb8e0f0df103df0c26013a037e1fbb3ea05095de87ad3b397f946b4c41e97fe93686add2bdfb33ba79f0e5b7399555adb8b5e102c730c0109b9fbba7b850e51b1f91d514e24eee29e73b450e28148569569b790349ce0d6f89543c2fd0800df3c25df92ebf3cb6fd35a0ac0df103df0c26013a28a353c4323c7a3a140a384acbddd7487e4492679cb209d93de19da9ed218fe23de19da9ed218fe2ddb881eef125a8703b2a42e40573ac3c8edd6a0f40cbfd87da3d420d6cca468c; ft=\"CWEMoetHI3G3dNPJUQT8jNEc9DGqFCIlkrjRNO5CvX0NHSyanj6ZE4ftqQQcZhgqLz2ditCaxMcEIyX8ZVmKj49i5C2SbjRHXj4wXfjO09kkNj8g1YxZBMXOtoTQhrdOz3ZSuUi7GfgJWVWuUivbHsqDlGP2Zhv17cFHuQwibS9QpPkIiq/CyjPd9iBAt+RR\"; SEARCH_HISTORY_IDS=0%2C3%2C4%2C; _ga_9E363E7BES=GS1.1.1653831106.11.1.1653831135.31; _ga=GA1.2.126447110.1650727005; tmr_detect=0%7C1653831138037; tmr_reqNum=9; sx=H4sIAAAAAAAC%2F1TMQZqqMAwA4Lt0zSIlbdJwm6ahKvh8OAwg%2BHH3WbnwAv%2FbEREVY6pCEimQ9Kw9inGEUtjEdW%2B3us7tJXMON%2BzleE66pnKsl7mt9RHnperhGte7zlNE8RwEz8axBkwCkrn1FdjQcoyQKgQzLJg%2Fsk8bj8Md5PnPhtuv5geM2%2Fjiaf4Z7X%2F5kiO2Z%2BOU24KBSgT2CD5pG9l8VTKtkUP6yJMM1yXptC%2ByyeUKesjk9%2B3%2BGtMAa%2F2WAc%2FzLwAA%2F%2F%2Bl7urWDwEAAA%3D%3D; abp=0",
        "Referer": "https://www.avito.ru/moskva/avtomobili/geely-ASgBAgICAUTgtg2gmCg?cd=1&radius=0",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "categoryId=9&position=1&limit=8",
    "method": "POST"
});

const Perekresult = async () => await respPerek().then((response) => response.json())
const PerekHandleClick = () => Perekresult().then((data) => console.log(data))

const checkAuthResponse = async () => checkAuthHaraba().then((response) => response.json())

const Harabaresult = async () => await respHaraba().then((response) => response.json())
const HarabaHandleClick = () => Harabaresult().then((data) => console.log(data))

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
