export const userColumns = [
    {field: 'id', headerName: 'ID', width: 70 },
        {field:"user", headerName:"User", width: 230, renderCell: (params)=>{
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field:"email", 
        headerName:"Email",
        width:230,
    },
    {
        field:"age", 
        headerName:"Age",
        width:100,
    },
    {
        field:"status", 
        headerName:"Status",
        width:160,
        renderCell:(params)=>{
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

//temporary data
export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://static.wikia.nocookie.net/game_of_thrones_-_the_storm_kings_fanon/images/f/fa/Jon_Snow.png/revision/latest?cb=20231224101744",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Snow",
        img: "https://static.wikia.nocookie.net/game_of_thrones_-_the_storm_kings_fanon/images/f/fa/Jon_Snow.png/revision/latest?cb=20231224101744",
        status: "passive",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 3,
        username: "Snow",
        img: "https://static.wikia.nocookie.net/game_of_thrones_-_the_storm_kings_fanon/images/f/fa/Jon_Snow.png/revision/latest?cb=20231224101744",
        status: "pending",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 4,
        username: "Snow",
        img: "https://static.wikia.nocookie.net/game_of_thrones_-_the_storm_kings_fanon/images/f/fa/Jon_Snow.png/revision/latest?cb=20231224101744",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 5,
        username: "Snow",
        img: "https://static.wikia.nocookie.net/game_of_thrones_-_the_storm_kings_fanon/images/f/fa/Jon_Snow.png/revision/latest?cb=20231224101744",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 6,
        username: "Snow",
        img: "https://static.wikia.nocookie.net/game_of_thrones_-_the_storm_kings_fanon/images/f/fa/Jon_Snow.png/revision/latest?cb=20231224101744",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 7,
        username: "Snow",
        img: "https://static.wikia.nocookie.net/game_of_thrones_-_the_storm_kings_fanon/images/f/fa/Jon_Snow.png/revision/latest?cb=20231224101744",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 8,
        username: "Snow",
        img: "https://static.wikia.nocookie.net/game_of_thrones_-_the_storm_kings_fanon/images/f/fa/Jon_Snow.png/revision/latest?cb=20231224101744",
        status: "passive",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 9,
        username: "Snow",
        img: "https://static.wikia.nocookie.net/game_of_thrones_-_the_storm_kings_fanon/images/f/fa/Jon_Snow.png/revision/latest?cb=20231224101744",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
   

]