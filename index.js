const defaultImgUrl =  'https://images.unsplash.com/photo-1544084944-15269ec7b5a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzAyNzE0ODR8&ixlib=rb-4.1.0&q=85'
try {
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
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

// const randomAyah = function () {
//     let randomNo = Math.floor(Math.random()*6235) + 2
//     console.log(randomNo)
//     return randomNo
// }
// try {
//     const res = await fetch(`http://api.alquran.cloud/v1/ayah/${randomAyah()}`)
//     if(!res.ok) {
//         throw Error()
//     }
//     const data = await res.json()
//     console.log(data.data)
//     document.getElementById('verse').textContent = data.data.text
    
// } catch (error) {
//     document.getElementById('verse').textContent =' ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ'
//     alert(error)
// }

function getTIme() {
    const time = new Date()
    const currentTime = time.toLocaleString('en-us', {
        timeStyle: 'short'
    })
    document.getElementById('time').textContent = currentTime
}

setInterval(getTIme, 1000)


navigator.geolocation.getCurrentPosition((position) => {

    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather/?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res=> res.json())
        .then(data => {
            const iconId = data.weather[0].icon
            const iconUrl = `https://openweathermap.org/payload/api/media/file/${iconId}.png`
            document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°`
            document.getElementById('city').textContent = data.name
            document.getElementById('icon').src = iconUrl
        })

const date = new Date()
const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
const currentDate = date.toLocaleDateString('en-GB', options)
const dateInFormat = currentDate.replace(/\//g, '-')
    fetch(`https://api.aladhan.com/v1/timings/${dateInFormat}?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&method=1&school=1`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById('nimaz-time').innerHTML = `
                <p>Fajr: ${data.data.timings.Fajr}</p>
                <p>Zuhar: ${data.data.timings.Dhuhr}</p>
                <p>Asar: ${data.data.timings.Asr}</p>
                <p>Maghrib: ${data.data.timings.Maghrib}</p>
                <p>Isha: ${data.data.timings.Isha}</p>
            `
        })
});

// fetch('https://api.sunnah.com/v1/hadiths/random')
//     .then(res => res.json())
//     .then(data => console.log(data))

// $2y$10$lB5Y2Co56jTaUQINuxyaQOxPkbudqgATXsiVbH7s8OAEQhGQKPR2
    //    const defaultImgUrl =  'https://images.unsplash.com/photo-1544084944-15269ec7b5a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzAyNzE0ODR8&ixlib=rb-4.1.0&q=85'

