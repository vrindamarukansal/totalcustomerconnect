export const users = [
    {
        name:'John',
        phone:1234567890,
        zip:12345
    },
    {
        name:'Jane',
        phone:9987654321,
        zip:54321
    },
]

// A mock function to mimic making an async request for data
export const fetchUser = (phone,zip) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let user  = users.find(item=> item.phone===parseInt(phone) && item.zip===parseInt(zip))
            if(typeof user !== 'undefined')
                resolve(user)
            else reject()
        },1000)
    })
}
  