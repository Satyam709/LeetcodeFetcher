export default async function getDailyProblem() {

  const res = await fetch("https://leetcode.com/graphql", {
    body: '{"operationName":"codingChallengeMedal","variables":{"year":2024,"month":11},"query":"query codingChallengeMedal($year: Int!, $month: Int!) {\\n  dailyChallengeMedal(year: $year, month: $month) {\\n    name\\n    config {\\n      icon\\n      __typename\\n    }\\n    __typename\\n  }\\n  activeDailyCodingChallengeQuestion {\\n    link\\n    __typename\\n  }\\n}\\n"}',
    method: "POST",
    headers: {
      "x-csrftoken":
        "oLdPuX36DXGDg9WSU8K5U3JPljOO9x4cTkX2wFTvP6FtdCe2HFU0owDVBmOl4ZJR",
      cookie:
        '__cf_bm=KuMxsnh05R_6QtjDZQ8QZS5chkYcQSJdhcGmvcfDe84-1730618233-1.0.1.1-WQeAy8T6iPYyUnNmSMk9u4N6yE.fJXmirr3V4B3wQyggazN4hlo_PtxN.SjM.lgiuvGbLsGZLYAmGt9CtT0vxA; ip_check=(false, "103.154.56.74"); ext_name=gdgnlfdenkmjcfgjpnookbglpndleahm; cf_clearance=wbdxb3JUrf6WhKZqOrOcwaYfn9Y4jRqSSsFlktZomzI-1730618240-1.2.1.1-S3Uedi24RuapJpxb.nNEjccer0c9j5t2BnabkK124DNfrhgsTv7._8.otq2IX_GemsCXExv93Pq64cB7NkVj8KVG2LOIe5WG.3SHNEQg6ZhVT2T.UNoBEaIjTGHQKAgZexXNKcweMkLE.0rDN_MMkxgH7Wc6cWA2Kzl2vBE5AGhmqwwzxCFGInBPWcySMWlh5ipB1WFZ0Trfqag3duh5mTenwXyZQUPLgEt903yYRTVR3QUjrVfmPQyxKCNNijXQumTbvf1pEAnvM8eyR6TGmXsJKrFXUjli6v1qrJ5g2nrZVn2amUarXnk5h_OPGM7c3Mu1CfK9qNsSSojd26jjxyJLv7i8mHOJNDrnKX3mMdWcZET_bNZ_BOfOUdj2X.y5aJcfub0oUSQdOEnOiwXG0Sqgp.3LQRsFR84axIK4TP8QinmfEFHASuab6_DvVkLT; csrftoken=oLdPuX36DXGDg9WSU8K5U3JPljOO9x4cTkX2wFTvP6FtdCe2HFU0owDVBmOl4ZJR; messages=W1siX19qc29uX21lc3NhZ2UiLDAsMjUsIlN1Y2Nlc3NmdWxseSBzaWduZWQgaW4gYXMgU2F0eWFtLiJdXQ:1t7UrX:dYkNWDfZXV3QVEe1ENfS1qyoyVfBqvmAu3nHWtdZO-Q; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiOTkxNTA3OCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6IjUwODI4MjIwNDhhNGEwN2U4Yzc3MzdiYmY2ZGM3ZjEzNmViODM3YmY0N2MwYjU3ZWY4OTQ3MzU3NjUyNmFiNmIiLCJpZCI6OTkxNTA3OCwiZW1haWwiOiJzYXR5YW1jaGF1aGFuNzA5QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoic2F0eWFtY2hhdWhhbjcwOSIsInVzZXJfc2x1ZyI6InNhdHlhbWNoYXVoYW43MDkiLCJhdmF0YXIiOiJodHRwczovL2Fzc2V0cy5sZWV0Y29kZS5jb20vdXNlcnMvYXZhdGFycy9hdmF0YXJfMTY4NzU5ODU2NC5wbmciLCJyZWZyZXNoZWRfYXQiOjE3MzA2MTgyNDcsImlwIjoiMTAzLjE1NC41Ni43NCIsImlkZW50aXR5IjoiOWZhZTc4OTQ4OTBmZTIxY2Q3NzA5MGFmMTE0YWEyY2QiLCJzZXNzaW9uX2lkIjo3NzM5NzU1NCwiZGV2aWNlX3dpdGhfaXAiOlsiNTIxMWU0OTU5YzE3MTZmODZiODAzNjJjYzcxMDIzOWIiLCIxMDMuMTU0LjU2Ljc0Il19.ZOog9QNmRf2v3lnzs95PP94h33_Z8ao08Aj-dDi8P8Q; _dd_s=rum=0&expire=1730619761006',
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

  console.log(res);

    const body : body = await res.json();

    let baseUrl = "https://leetcode.com/";
    console.log(body.data?.activeDailyCodingChallengeQuestion?.link);
    const pblm_link = body.data?.activeDailyCodingChallengeQuestion?.link;
  return baseUrl + pblm_link;
}

