export async function getData(url: string) {
  // const summonersdata = "https://pvp.qq.com/web201605/js/summoner.json";
  // const summonerUrl = "/api/web201605/js/summoner.json"; // -> http://localhost:8000/api/web201605/js/summoner.json

  //console.log("getSummoner");
  try {
    let arr = await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    // console.log("arr ", arr);
    return arr;
  } catch (error) {
    console.log(error);
  }
}
