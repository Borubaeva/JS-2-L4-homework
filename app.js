const btns=document.querySelectorAll('button')
const olTag=document.querySelector('ol')
const spinner=document.querySelector('#spinner')


const clothes=[
    {foto:'https://basket-05.wbbasket.ru/vol925/part92517/92517469/images/big/1.webp', kategory:'детская одежда', name:'Кардиган школьный на пуговицах', price:1600},
    {foto:'https://ae04.alicdn.com/kf/S3554418de9134f3c8ad3fcbbace9a5c7W.jpg_640x640.jpg', kategory:'детская одежда', name:'Платье на новый год', price:3100},
    {foto:'https://basket-03.wbbasket.ru/vol380/part38018/38018978/images/big/1.webp', kategory:'детская одежда', name:'Куртка зимняя для мальчика оверсайз', price:2800},
    {foto:'https://oz-baby.ru/item/evkAPG1n-1522399593.jpeg', kategory:'детская одежда', name:'Детский пиджак для мальчика', price:2700},
    {foto:'https://gulyator.ru/image/cache/catalog/nordman/flash/pink/uteplennye-rezinovye-sapozhki-na-devochku-800x800.jpg', kategory:'детская одежда', name:'Резиновые сапоги детские Flash', price:1300},
    {foto:'https://ir-3.ozone.ru/s3/multimedia-1/c500/6673719817.jpg', kategory:'мужская одежда', name:'Рубашка в клетку оверсайз', price:2000},
    {foto:'https://sportsolo.ru/upload/iblock/a3a/8mficpx2s03ux9t346fbkbx5vpf7yqe2.jpg', kategory:'мужская одежда', name:'Спортивный костюм', price:3000},
    {foto:'https://mehzoloto.ru/wp-content/uploads/2021/12/9K1A8973.jpg', kategory:'мужская одежда', name:'Пуховик зимний', price:5700},
    {foto:'https://i.pinimg.com/474x/5b/79/70/5b7970e84bdb1dd34203e0532b08880a.jpg', kategory:'мужская одежда', name:'свитер вязаный с горлом', price:2800},
    {foto:'https://olcha.uz/image/400x400/products/qfb7fbeHnH4SUY4m6KDZwOpGSO4ZbASePSJ8TzsLnCBAts7xljz9qqqQTYX3.jpg', kategory:'мужская одежда', name:'Кроссовки ', price:2500},
    {foto:'https://olo.kg/oc-content/uploads/52/17613.jpg', kategory:'женская одежда',name:'Шелковое платье',price:4100},
    {foto:'https://basket-04.wbbasket.ru/vol534/part53451/53451492/images/big/5.webp', kategory:'женская одежда',name:'Джемпер Тельняшка Лонгслив',price:600},
    {foto:'https://basket-10.wbbasket.ru/vol1342/part134283/134283966/images/big/1.webp', kategory:'женская одежда',name:'Костюм спортивный',price:2100},
    {foto:'https://img.joomcdn.net/b2a99b09f92211e37fd4d63ae82d1b6bafe63138_original.jpeg', kategory:'женская одежда',name:'Юбка школьная теннисная',price:800},
    {foto:'https://wosk1147.ru/pictures/product/middle/50834_middle.jpg', kategory:'женская одежда',name:'Пальто',price:4000}
]




function getOdejda(data){
    return new Promise((resolve, reject)=>{
        if(data){
            setTimeout(()=>{
                resolve(clothes)
            }, 3000)
        } else {
            reject('Kata ketti')
        }
      
       
        
    })
}


function showOdejda(massive){
    olTag.innerHTML=''
    for (const odejda  of massive) {
        console.log(odejda);
        olTag.innerHTML+=`
        <div class="card" style="width: 280px; padding: 15px; margin-top: 10px;">
        <img class="card-img-top" src="${odejda.foto}" alt="Card image cap">
        <div class="card-body">
          <li class="card-text">${odejda.kategory}</li>
          <li class="card-text">${odejda.name}</li>
          <li class="card-text">${odejda.price}</li>
        </div>
      </div>
        
        `
    }
}



btns[0].onclick=()=>{
    olTag.innerHTML=''
    spinner.style.display='block'
    console.log(
        getOdejda(true)
        .then((mass)=>{
            showOdejda(mass)
        console.log(mass)
       })
       .catch((err)=>{
        console.error(err);
       })
       .finally(()=>{
        console.log('Buttu Promise');
        spinner.style.display='none'
       })
    );
}


btns[1].onclick=()=>{
    olTag.innerHTML=''
    spinner.style.display='block'
    console.log(
        getOdejda(true)
        .then((mass)=>{
            showOdejda(mass)
        console.log(mass)
       })
       .catch((err)=>{
        console.error(err);
       })
       .finally(()=>{
        console.log('Buttu Promise');
        spinner.style.display='none'

        const mujskaya=clothes.filter(odejda=>odejda.kategory==='мужская одежда')
    showOdejda(mujskaya)
       })
    );
}


btns[2].onclick=()=>{
    olTag.innerHTML=''
    spinner.style.display='block'
    console.log(
        getOdejda(true)
        .then((mass)=>{
            showOdejda(mass)
        console.log(mass)
       })
       .catch((err)=>{
        console.error(err);
       })
       .finally(()=>{
        spinner.style.display='none'
        console.log('Buttu Promise');
        const mujskaya=clothes.filter(odejda=>odejda.kategory=='женская одежда')
    showOdejda(mujskaya)
       })
    );
}


btns[3].onclick=()=>{
    olTag.innerHTML=''
    spinner.style.display='block'
    console.log(
        getOdejda(true)
        .then((mass)=>{
            showOdejda(mass)
        console.log(mass)
       })
       .catch((err)=>{
        console.error(err);
       })
       .finally(()=>{
        spinner.style.display='none'
        console.log('Buttu Promise');
        const mujskaya=clothes.filter(odejda=>odejda.kategory=='детская одежда')
    showOdejda(mujskaya)
       })
    );
}