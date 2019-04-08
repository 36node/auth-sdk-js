const TOKEN =
  process.env["TOKEN"] ||
  "something-u-can-never-guessed-secret-password-or-key";

module.exports = {
  db: [
    {
      ns: "/",
      provider: "5c8224458b17ac000f59ddc8",
      expireAt: "2019-04-15T09:53:00.167Z",
      user: {
        ns: ["/"],
        source: "register",
        email: "root@36node.com",
        gender: "UNKOWN",
        name: "root",
        nickname: "root",
        roles: [
          {
            ns: "/",
            name: "admin",
          },
        ],
        updatedAt: "2019-03-26T08:36:35.566Z",
        createdAt: "2019-03-08T08:16:48.598Z",
        active: true,
        id: "5c8224f08b17ac000f59ddc9",
      },
      updatedAt: "2019-04-08T09:53:00.168Z",
      createdAt: "2019-04-08T09:53:00.168Z",
      id: "5cab19fc164eda0011969a48",
      token:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzZXNzaW9uIiwiYWN0aXZlIjp0cnVlLCJ1c2VyIjoiNWM4MjI0ZjA4YjE3YWMwMDBmNTlkZGM5Iiwicm9sZXMiOlt7Im5zIjoiLyIsIm5hbWUiOiJhZG1pbiJ9XSwiaWF0IjoxNTU0NzE3MTgwLCJleHAiOjE1NTQ4MDM1ODB9.hSCR7CvVCLH2G24FGeDojwSrP351tHcRd39WDupGiptdc-byYXKohemRTcqHo2jEPvFKHk9nnR6IZ5G7aai7FWOO4zZUjHoM8km4wUs3rEAf96axsXMlYPNhRnLt-EPtv585765Zi80DA_D5k4YqEvNOrNKRy5UbKhogTRa4F-A",
    },
  ],
  router: (req, res, next) => {
    if (req.path === "/sessions" && req.method === "POST") {
      req.body.token = TOKEN;
    }
    next();
  },
};
