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




    //    const defaultImgUrl =  'https://images.unsplash.com/photo-1544084944-15269ec7b5a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzAyNzE0ODR8&ixlib=rb-4.1.0&q=85'