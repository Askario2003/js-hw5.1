const user = {

}
for(let i = 1; i <= 10; i++){
    let num = 'пользователь ' + i

    user.name = prompt('введите ваше имя')
    user.age  = +prompt('введите ваш возраст')
    for ( const key in user ){
        console.info(`${num}\n ваше имя ${user.name}\n ваш возраст ${user.age}`)
    }

}
console.info(user)