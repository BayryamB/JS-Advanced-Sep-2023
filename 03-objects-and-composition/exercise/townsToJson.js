function townsToJson(arr) {
    let towns = [];
    let info = arr.shift().split(/\s?\|\s?/gm);
    let town = info[1];
    let lat = info[2];
    let long = info[3];

    for (const iterator of arr) {
        let a = iterator.split(/\s?\|\s?/gm);
        let city = a[1];
        let latitude = Number(a[2]).toFixed(2);
        let longitude = Number(a[3]).toFixed(2);
        let obj = {};
        obj[town] = city;
        obj[lat] = Number(latitude);
        obj[long] = Number(longitude);
        towns.push(obj)
    }
    console.log(JSON.stringify(towns));
}
townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia grad | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])