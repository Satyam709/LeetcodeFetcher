export default async function getDailyProblem() {

  const res = await fetch("https://leetcode.com/graphql", {
    body: '{"operationName":"codingChallengeMedal","variables":{"year":2024,"month":11},"query":"query codingChallengeMedal($year: Int!, $month: Int!) {\\n  dailyChallengeMedal(year: $year, month: $month) {\\n    name\\n    config {\\n      icon\\n      __typename\\n    }\\n    __typename\\n  }\\n  activeDailyCodingChallengeQuestion {\\n    link\\n    __typename\\n  }\\n}\\n"}',
    method: "POST",
    headers: {
      "x-csrftoken":
        "oLdPuX36DXGDg9WSU8K5U3JPljOO9x4cTkX2wFTvP6FtdCe2HFU0owDVBmOl4ZJR",
      Referer: "https://leetcode.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "content-type": "application/json",
    },
  });

  interface body {
		data: {
			activeDailyCodingChallengeQuestion  :{
        link : string
      }
		};
	}

  if (res.status!=200) {
    console.log(res);
    throw new Error("cannot fetch ");
  }

    const body : body = await res.json();

    let baseUrl = "https://leetcode.com";
    //console.log(body.data?.activeDailyCodingChallengeQuestion?.link);
    const pblm_link = body.data?.activeDailyCodingChallengeQuestion?.link;
  return baseUrl + pblm_link;
}

