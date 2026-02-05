const defaultImgUrl =  'https://images.unsplash.com/photo-1544084944-15269ec7b5a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzAyNzE0ODR8&ixlib=rb-4.1.0&q=85'
try {
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature+scenery+forest+mountains")
if(!res.ok) {
    throw Error()
}
const data = await res.json()
const imageUrl = data.urls.full
document.body.style.backgroundImage = `url(${imageUrl})`
document.getElementById('author').textContent = data.user.name
} catch (err) {
    document.body.style.backgroundImage = `url(${defaultImgUrl})`
    alert(err, "Something went wrong")
}

const randomAyah = function () {
    let randomNo = Math.floor(Math.random()*6235) + 2
    console.log(randomNo)
    return randomNo
}
try {
    const res = await fetch(`http://api.alquran.cloud/v1/ayah/${randomAyah()}`)
    if(!res.ok) {
        throw Error()
    }
    const data = await res.json()
    console.log(data.data)
    document.getElementById('verse').textContent = data.data.text
    
} catch (error) {
    document.getElementById('verse').textContent =' ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ'
    alert(error)
}

function getTIme() {
    const time = new Date()
    const currentTime = time.toLocaleString('en-us', {
        timeStyle: 'short'
    })
    document.getElementById('time').textContent = currentTime
}

setInterval(getTIme, 1000)


navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);

    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather/?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res=> res.json())
        .then(data => {
            const iconId = data.weather[0].icon
            const iconUrl = `https://openweathermap.org/payload/api/media/file/${iconId}.png`
            console.log(iconId)
            document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°`
            document.getElementById('city').textContent = data.name
            document.getElementById('icon').src = iconUrl
        })
});




    //    const defaultImgUrl =  'https://images.unsplash.com/photo-1544084944-15269ec7b5a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzAyNzE0ODR8&ixlib=rb-4.1.0&q=85'