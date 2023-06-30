let positions = []
let desert = []

// 한개만
const makeMap = (lat, lng, lv) => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
        mapOption = {
            center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
            level: lv // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35);

    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(Number(lat), Number(lng)), // 마커를 표시할 위치
        title: positions.name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage // 마커 이미지 
    });
}

// 여러개 
const makeMap2 = () => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
        mapOption = {
            center: new kakao.maps.LatLng(35.1495, 126.9202), // 지도의 중심좌표
            level: 5 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {

        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(Number(positions[i].lat), Number(positions[i].lng)), // 마커를 표시할 위치
            title: positions[i].name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage // 마커 이미지 
        });
    }

}

// 리스트 띄우는거
const soloLunchShop = () => {
    let a = null
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].day === '0' && arr[i].category === '0') {
            a = arr[i]
            cnt++
            if (cnt <= 5) {
                positions.push(a)
            }
        }
    }
    console.log(positions);
    document.querySelector('.wholeContent').innerText = ' '
    let resultList = ''

    for (let k = 0; k < positions.length; k++) {
        resultList += `
                        <div class="content" data-value="${positions[k].name}">
                                 <div class="shopIMG"><img src="img/프로젝트가게이미지/${positions[k].img}.jpg" alt=""   height="100%"></div>
                                 <div id="ping"><div class="shopNm">${positions[k].name}</div>
                                <div class="shopInfo">${positions[k].notice}</div>
                                <div class="shopOpen">${positions[k].time}</div>
                        </div>
                        </div>`
    }

    let b = [...positions]
    document.querySelector('.wholeContent').innerHTML = resultList
    makeMap2()
    document.querySelectorAll('.content').forEach(el =>{
        el.addEventListener('click',()=>{
            let plz = el.dataset.value;
            
            let plz2 = b.filter(el => el.name == plz)
            let resultHTML = ` <div class="detail">
                                    <div id="detailImg"><img src="./img/프로젝트가게이미지/${plz2[0].img}.jpg" alt="" height="100%"></div>
                                    <div id="ping_Detail">
                                        <div class="shopNm shopNm_Detail">${plz2[0].name}</div>
                                        <p class="shopOpen shopOpen_Detail">${[plz2[0].time]}</p>
                                        <div class="shopPhoneNum_Detail">${plz2[0].number}</div>
                                        <div class="shopInfo shopInfo_Detail">${plz2[0].notice}</div>
                                        <div class="shopOpen shopLink_Detail"><a href="">${plz2[0].link}</a></div>
                                        <div></div>
                                    </div>
                                    <div class="dessert_Detail"><p>Menu</p></div>
                                    <p class="shopInfo shopMenu">${plz2[0].menu}</p>
                                    <div class="dessert_Text">
                                        <p class="shopInfo">가게 위치</p>
                                    </div>
                                </div>`
            document.querySelector('.shopDetail').innerHTML = resultHTML
            
            document.querySelector('.shopDetail').style.display = "block"
            makeMap(plz2[0].lat, plz2[0].lng, 2)
            // console.log(document.querySelector('#o'))
            console.log(plz2);
        })
    })
    positions = []

}
const soloDinnerShop = () => {
    let a = null
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].day === '1' && arr[i].category === '0') {
            a = arr[i]
            cnt++
            if (cnt <= 5) {
                positions.push(a)
            }
        }
    }
    console.log(positions);
    document.querySelector('.wholeContent').innerText = ' '
    let resultList = ''

    for (let k = 0; k < positions.length; k++) {
        resultList += `
                        <div class="content" data-value="${positions[k].name}">
                                 <div class="shopIMG"><img src="img/프로젝트가게이미지/${positions[k].img}.jpg" alt=""   height="100%"></div>
                                 <div id="ping"><div class="shopNm">${positions[k].name}</div>
                                <div class="shopInfo">${positions[k].notice}</div>
                                <div class="shopOpen">${positions[k].time}</div>
                        </div>
                        </div>`
    }
    let b = [...positions]
    document.querySelector('.wholeContent').innerHTML = resultList
    makeMap2()
    document.querySelectorAll('.content').forEach(el =>{
        el.addEventListener('click',()=>{
            let plz = el.dataset.value;
            
            let plz2 = b.filter(el => el.name == plz)
            let resultHTML = ` <div class="detail">
                                    <div id="detailImg"><img src="./img/프로젝트가게이미지/${plz2[0].img}.jpg" alt="" height="100%"></div>
                                    <div id="ping_Detail">
                                        <div class="shopNm shopNm_Detail">${plz2[0].name}</div>
                                        <p class="shopOpen shopOpen_Detail">${[plz2[0].time]}</p>
                                        <div class="shopPhoneNum_Detail">${plz2[0].number}</div>
                                        <div class="shopInfo shopInfo_Detail">${plz2[0].notice}</div>
                                        <div class="shopOpen shopLink_Detail"><a href="">${plz2[0].link}</a></div>
                                        <div></div>
                                    </div>
                                    <div class="dessert_Detail"><p>Menu</p></div>
                                    <p class="shopInfo shopMenu">${plz2[0].menu}</p>
                                    <div class="dessert_Text">
                                        <p class="shopInfo">가게 위치</p>
                                    </div>
                                </div>`
            document.querySelector('.shopDetail').innerHTML = resultHTML
            
            document.querySelector('.shopDetail').style.display = "block"
            makeMap(plz2[0].lat, plz2[0].lng, 2)
            // console.log(document.querySelector('#o'))
            console.log(plz2);
        })
    })
    positions = []
}
const friendLunchShop = () => {

    let a = null
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].day === '0' && arr[i].category === '1') {
            a = arr[i]
            cnt++
            if (cnt <= 5) {
                positions.push(a)
            }
        }
    }
    document.querySelector('.wholeContent').innerText = ' '
    let resultList = ''

    for (let k = 0; k < positions.length; k++) {
        resultList += `
                        <div class="content" data-value="${positions[k].name}">
                                 <div class="shopIMG"><img src="img/프로젝트가게이미지/${positions[k].img}.jpg" alt=""   height="100%"></div>
                                 <div id="ping"><div class="shopNm">${positions[k].name}</div>
                                <div class="shopInfo">${positions[k].notice}</div>
                                <div class="shopOpen">${positions[k].time}</div>
                        </div>
                        </div>`
    }
    let b = [...positions]
    console.log('b',b);
    document.querySelector('.wholeContent').innerHTML = resultList
    makeMap2()
    document.querySelectorAll('.content').forEach(el =>{
        el.addEventListener('click',()=>{
            let plz = el.dataset.value;
            
            let plz2 = b.filter(el => el.name == plz)
            console.log('plz2: ',plz2);
            let resultHTML = ` <div class="detail">
                                    <div id="detailImg"><img src="./img/프로젝트가게이미지/${plz2[0].img}.jpg" alt="" height="100%"></div>
                                    <div id="ping_Detail">
                                        <div class="shopNm shopNm_Detail">${plz2[0].name}</div>
                                        <p class="shopOpen shopOpen_Detail">${[plz2[0].time]}</p>
                                        <div class="shopPhoneNum_Detail">${plz2[0].number}</div>
                                        <div class="shopInfo shopInfo_Detail">${plz2[0].notice}</div>
                                        <div class="shopOpen shopLink_Detail"><a href="">${plz2[0].link}</a></div>
                                        <div></div>
                                    </div>
                                    <div class="dessert_Detail"><p>Menu</p></div>
                                    <p class="shopInfo shopMenu">${plz2[0].menu}</p>
                                    <div class="dessert_Text">
                                        <p class="shopInfo">가게 위치</p>
                                    </div>
                                </div>`
            document.querySelector('.shopDetail').innerHTML = resultHTML
            
            document.querySelector('.shopDetail').style.display = "block"
            makeMap(plz2[0].lat, plz2[0].lng, 2)
            // console.log(document.querySelector('#o'))
            console.log(plz2);
        })
    })
    positions = []
}
const friendDinnerShop = () => {
    let a = null
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].day === '1' && arr[i].category === '1') {
            a = arr[i]
            cnt++
            if (cnt <= 5) {
                positions.push(a)
            }
        }
    }
    document.querySelector('.wholeContent').innerText = ' '
    let resultList = ''

    for (let k = 0; k < positions.length; k++) {
        resultList += `
                        <div class="content" data-value="${positions[k].name}">
                                 <div class="shopIMG"><img src="img/프로젝트가게이미지/${positions[k].img}.jpg" alt=""   height="100%"></div>
                                 <div id="ping"><div class="shopNm">${positions[k].name}</div>
                                <div class="shopInfo">${positions[k].notice}</div>
                                <div class="shopOpen">${positions[k].time}</div>
                        </div>
                        </div>`
    }
    let b = [...positions]
    document.querySelector('.wholeContent').innerHTML = resultList
    makeMap2()
    document.querySelectorAll('.content').forEach(el =>{
        el.addEventListener('click',()=>{
            let plz = el.dataset.value;
            
            let plz2 = b.filter(el => el.name == plz)
            let resultHTML = ` <div class="detail">
                                    <div id="detailImg"><img src="./img/프로젝트가게이미지/${plz2[0].img}.jpg" alt="" height="100%"></div>
                                    <div id="ping_Detail">
                                        <div class="shopNm shopNm_Detail">${plz2[0].name}</div>
                                        <p class="shopOpen shopOpen_Detail">${[plz2[0].time]}</p>
                                        <div class="shopPhoneNum_Detail">${plz2[0].number}</div>
                                        <div class="shopInfo shopInfo_Detail">${plz2[0].notice}</div>
                                        <div class="shopOpen shopLink_Detail"><a href="">${plz2[0].link}</a></div>
                                        <div></div>
                                    </div>
                                    <div class="dessert_Detail"><p>Menu</p></div>
                                    <p class="shopInfo shopMenu">${plz2[0].menu}</p>
                                    <div class="dessert_Text">
                                        <p class="shopInfo">가게 위치</p>
                                    </div>
                                </div>`
            document.querySelector('.shopDetail').innerHTML = resultHTML
            
            document.querySelector('.shopDetail').style.display = "block"
            makeMap(plz2[0].lat, plz2[0].lng, 2)
            // console.log(document.querySelector('#o'))
            console.log(plz2);
        })
    })
    positions = []
}
const coupleLunchShop = () => {

    let a = null
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].day === '0' && arr[i].category === '2') {
            a = arr[i]
            cnt++
            if (cnt <= 5) {
                positions.push(a)
            }
        }
    }
    document.querySelector('.wholeContent').innerText = ' '
    let resultList = ''

    for (let k = 0; k < positions.length; k++) {
        resultList += `
                        <div class="content" data-value="${positions[k].name}">
                                 <div class="shopIMG"><img src="img/프로젝트가게이미지/${positions[k].img}.jpg" alt=""   height="100%"></div>
                                 <div id="ping"><div class="shopNm">${positions[k].name}</div>
                                <div class="shopInfo">${positions[k].notice}</div>
                                <div class="shopOpen">${positions[k].time}</div>
                        </div>
                        </div>`
    }
    let b = [...positions]
    document.querySelector('.wholeContent').innerHTML = resultList
    makeMap2()
    document.querySelectorAll('.content').forEach(el =>{
        el.addEventListener('click',()=>{
            let plz = el.dataset.value;
            
            let plz2 = b.filter(el => el.name == plz)
            let resultHTML = ` <div class="detail">
                                    <div id="detailImg"><img src="./img/프로젝트가게이미지/${plz2[0].img}.jpg" alt="" height="100%"></div>
                                    <div id="ping_Detail">
                                        <div class="shopNm shopNm_Detail">${plz2[0].name}</div>
                                        <p class="shopOpen shopOpen_Detail">${[plz2[0].time]}</p>
                                        <div class="shopPhoneNum_Detail">${plz2[0].number}</div>
                                        <div class="shopInfo shopInfo_Detail">${plz2[0].notice}</div>
                                        <div class="shopOpen shopLink_Detail"><a href="">${plz2[0].link}</a></div>
                                        <div></div>
                                    </div>
                                    <div class="dessert_Detail"><p>Menu</p></div>
                                    <p class="shopInfo shopMenu">${plz2[0].menu}</p>
                                    <div class="dessert_Text">
                                        <p class="shopInfo">가게 위치</p>
                                    </div>
                                </div>`
            document.querySelector('.shopDetail').innerHTML = resultHTML
            
            document.querySelector('.shopDetail').style.display = "block"
            makeMap(plz2[0].lat, plz2[0].lng, 2)
            // console.log(document.querySelector('#o'))
            console.log(plz2);
        })
    })
    positions = []
}
const coupleDinnerShop = () => {

    let a = null
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].day === '1' && arr[i].category === '2') {
            a = arr[i]
            cnt++
            if (cnt <= 5) {
                positions.push(a)
            }
        }
    }
    document.querySelector('.wholeContent').innerText = ' '
    let resultList = ''

    for (let k = 0; k < positions.length; k++) {
        resultList += `
                        <div class="content" data-value="${positions[k].name}">
                                 <div class="shopIMG"><img src="img/프로젝트가게이미지/${positions[k].img}.jpg" alt=""   height="100%"></div>
                                 <div id="ping"><div class="shopNm">${positions[k].name}</div>
                                <div class="shopInfo">${positions[k].notice}</div>
                                <div class="shopOpen">${positions[k].time}</div>
                        </div>
                        </div>`
    }
    let b = [...positions]
    document.querySelector('.wholeContent').innerHTML = resultList
    makeMap2()
    document.querySelectorAll('.content').forEach(el =>{
        el.addEventListener('click',()=>{
            let plz = el.dataset.value;
            
            let plz2 = b.filter(el => el.name == plz)
            let resultHTML = ` <div class="detail">
                                    <div id="detailImg"><img src="./img/프로젝트가게이미지/${plz2[0].img}.jpg" alt="" height="100%"></div>
                                    <div id="ping_Detail">
                                        <div class="shopNm shopNm_Detail">${plz2[0].name}</div>
                                        <p class="shopOpen shopOpen_Detail">${[plz2[0].time]}</p>
                                        <div class="shopPhoneNum_Detail">${plz2[0].number}</div>
                                        <div class="shopInfo shopInfo_Detail">${plz2[0].notice}</div>
                                        <div class="shopOpen shopLink_Detail"><a href="">${plz2[0].link}</a></div>
                                        <div></div>
                                    </div>
                                    <div class="dessert_Detail"><p>Menu</p></div>
                                    <p class="shopInfo shopMenu">${plz2[0].menu}</p>
                                    <div class="dessert_Text">
                                        <p class="shopInfo">가게 위치</p>
                                    </div>
                                </div>`
            document.querySelector('.shopDetail').innerHTML = resultHTML
            
            document.querySelector('.shopDetail').style.display = "block"
            makeMap(plz2[0].lat, plz2[0].lng, 2)
            // console.log(document.querySelector('#o'))
            console.log(plz2);
        })
    })
    positions = []
}
const familyLunchShop = () => {

    let a = null
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].day === '0' && arr[i].category === '3') {
            a = arr[i]
            cnt++
            if (cnt <= 5) {
                positions.push(a)
            }
        }
    }
    document.querySelector('.wholeContent').innerText = ' '
    let resultList = ''

    for (let k = 0; k < positions.length; k++) {
        resultList += `
                        <div class="content" data-value="${positions[k].name}">
                                 <div class="shopIMG"><img src="img/프로젝트가게이미지/${positions[k].img}.jpg" alt=""   height="100%"></div>
                                 <div id="ping"><div class="shopNm">${positions[k].name}</div>
                                <div class="shopInfo">${positions[k].notice}</div>
                                <div class="shopOpen">${positions[k].time}</div>
                        </div>
                        </div>`
    }
    let b = [...positions]
    document.querySelector('.wholeContent').innerHTML = resultList
    makeMap2()
    document.querySelectorAll('.content').forEach(el =>{
        el.addEventListener('click',()=>{
            let plz = el.dataset.value;
            
            let plz2 = b.filter(el => el.name == plz)
            let resultHTML = ` <div class="detail">
                                    <div id="detailImg"><img src="./img/프로젝트가게이미지/${plz2[0].img}.jpg" alt="" height="100%"></div>
                                    <div id="ping_Detail">
                                        <div class="shopNm shopNm_Detail">${plz2[0].name}</div>
                                        <p class="shopOpen shopOpen_Detail">${[plz2[0].time]}</p>
                                        <div class="shopPhoneNum_Detail">${plz2[0].number}</div>
                                        <div class="shopInfo shopInfo_Detail">${plz2[0].notice}</div>
                                        <div class="shopOpen shopLink_Detail"><a href="">${plz2[0].link}</a></div>
                                        <div></div>
                                    </div>
                                    <div class="dessert_Detail"><p>Menu</p></div>
                                    <p class="shopInfo shopMenu">${plz2[0].menu}</p>
                                    <div class="dessert_Text">
                                        <p class="shopInfo">가게 위치</p>
                                    </div>
                                </div>`
            document.querySelector('.shopDetail').innerHTML = resultHTML
            
            document.querySelector('.shopDetail').style.display = "block"
            makeMap(plz2[0].lat, plz2[0].lng, 2)
            // console.log(document.querySelector('#o'))
            console.log(plz2);
        })
    })
    positions = []
}
const familyDinnerShop = () => {

    let a = null
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].day === '1' && arr[i].category === '3') {
            a = arr[i]
            cnt++
            if (cnt <= 5) {
                positions.push(a)
            }
        }
    }
    document.querySelector('.wholeContent').innerText = ' '
    let resultList = ''

    for (let k = 0; k < positions.length; k++) {
        resultList += `
                        <div class="content" data-value="${positions[k].name}">
                                 <div class="shopIMG"><img src="img/프로젝트가게이미지/${positions[k].img}.jpg" alt=""   height="100%"></div>
                                 <div id="ping"><div class="shopNm">${positions[k].name}</div>
                                <div class="shopInfo">${positions[k].notice}</div>
                                <div class="shopOpen">${positions[k].time}</div>
                        </div>
                        </div>`
    }
    let b = [...positions]
    document.querySelector('.wholeContent').innerHTML = resultList
    makeMap2()
    document.querySelectorAll('.content').forEach(el =>{
        el.addEventListener('click',()=>{
            let plz = el.dataset.value;
            
            let plz2 = b.filter(el => el.name == plz)
            let resultHTML = ` <div class="detail">
                                    <div id="detailImg"><img src="./img/프로젝트가게이미지/${plz2[0].img}.jpg" alt="" height="100%"></div>
                                    <div id="ping_Detail">
                                        <div class="shopNm shopNm_Detail">${plz2[0].name}</div>
                                        <p class="shopOpen shopOpen_Detail">${[plz2[0].time]}</p>
                                        <div class="shopPhoneNum_Detail">${plz2[0].number}</div>
                                        <div class="shopInfo shopInfo_Detail">${plz2[0].notice}</div>
                                        <div class="shopOpen shopLink_Detail"><a href="">${plz2[0].link}</a></div>
                                        <div></div>
                                    </div>
                                    <div class="dessert_Detail"><p>Menu</p></div>
                                    <p class="shopInfo shopMenu">${plz2[0].menu}</p>
                                    <div class="dessert_Text">
                                        <p class="shopInfo">가게 위치</p>
                                    </div>
                                </div>`
            document.querySelector('.shopDetail').innerHTML = resultHTML
            
            document.querySelector('.shopDetail').style.display = "block"
            makeMap(plz2[0].lat, plz2[0].lng, 2)
            // console.log(document.querySelector('#o'))
            console.log(plz2);
        })
    })
    positions = []
}

// ------------------------------------------------------------------------------------------------------

// 클릭이벤트
// const soloShop1 = () => {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].name == "소야") {
//             positions = arr[i]
//             console.log('position :', positions);
//         }
//     }
//     // $('.shopNm').text(positions.name)
//     // $('.shopNotice').text(positions.notice)
//     // $('.shopOpen').text(positions.time)
//     makeMap(positions.lat, positions.lng, 1)
// }
// const desertList = ()=>{
    
//     let cnt = 0
//     let a = null
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].day === '2') {
//             a = arr[i]
//             cnt++
//             if(cnt <= 20){
//                 desert.push(arr[i])
//             }
//             // if (cnt <= 5) {
//                 //     positions.push(desert)
//                 // }
//             }
//         }
//         console.log(desert);
// }



